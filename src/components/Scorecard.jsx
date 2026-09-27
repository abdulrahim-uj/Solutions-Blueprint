import { useMemo, useState } from 'react'
import { scorecard } from '../data/business.js'
import { prefillEnquiry } from '../lib/lead.js'
import SectionHead from './SectionHead.jsx'
import { ArrowUpRight } from './Icons.jsx'

const OPTIONS = [
  { v: 2, label: 'Yes' },
  { v: 1, label: 'Partly' },
  { v: 0, label: 'No' },
]
const ALL = scorecard.flatMap((a, ai) => a.questions.map((q, qi) => ({ ...q, area: a.area, id: `${ai}-${qi}` })))

const band = (pct) =>
  pct >= 80 ? { label: 'Production-grade', tone: 'good', text: 'Strong foundations. A focused review can still find cost and latency wins.' }
    : pct >= 50 ? { label: 'Solid, but at risk', tone: 'mid', text: 'The basics work, but there are gaps that tend to surface as outages, slow pages or security findings as you grow.' }
      : { label: 'High risk', tone: 'low', text: 'Several fundamentals are missing. These usually turn into incidents, data loss or painful rewrites — worth fixing early.' }

export default function Scorecard() {
  const [answers, setAnswers] = useState({})
  const answered = Object.keys(answers).length
  const done = answered === ALL.length

  const result = useMemo(() => {
    const total = ALL.reduce((s, q) => s + (answers[q.id] ?? 0), 0)
    const pct = Math.round((total / (ALL.length * 2)) * 100)
    const areas = scorecard.map((a, ai) => {
      const got = a.questions.reduce((s, _, qi) => s + (answers[`${ai}-${qi}`] ?? 0), 0)
      return { area: a.area, pct: Math.round((got / (a.questions.length * 2)) * 100) }
    })
    const fixes = ALL.filter((q) => answers[q.id] !== undefined && answers[q.id] < 2)
      .sort((x, y) => answers[x.id] - answers[y.id])
    return { pct, areas, fixes }
  }, [answers])

  const b = band(result.pct)

  const sendResults = () => {
    const weakest = [...result.areas].sort((x, y) => x.pct - y.pct).slice(0, 2).map((a) => `${a.area} ${a.pct}%`).join(', ')
    prefillEnquiry({
      service: 'Backend Architecture & Code Audit',
      message: `My Django Production Readiness score is ${result.pct}% (${b.label}). Weakest areas: ${weakest}. ${result.fixes.length} items flagged. I'd like a review.`,
    })
  }

  return (
    <section id="scorecard">
      <div className="wrap">
        <SectionHead
          index="03"
          eyebrow="Free tool"
          title={<>How production-ready<br />is your Django backend?</>}
          lead="Answer 15 quick questions — about 2 minutes. You get a score, the areas that need attention and specific fixes. Nothing is sent anywhere unless you choose to share it."
        />

        <div className="score-layout">
          <div className="glass score-quiz reveal">
            <div className="score-progress" aria-hidden="true"><span style={{ width: `${(answered / ALL.length) * 100}%` }} /></div>
            <p className="score-count">{answered} / {ALL.length} answered</p>
            {scorecard.map((a, ai) => (
              <fieldset key={a.area} className="score-area">
                <legend>{a.area}</legend>
                {a.questions.map((q, qi) => {
                  const id = `${ai}-${qi}`
                  return (
                    <div className={`score-q ${answers[id] !== undefined ? 'is-answered' : ''}`} key={id} role="radiogroup" aria-label={q.q}>
                      <p>{q.q}</p>
                      <div className="score-opts">
                        {OPTIONS.map((o) => (
                          <button
                            key={o.v}
                            type="button"
                            role="radio"
                            aria-checked={answers[id] === o.v}
                            className={`opt opt-${o.v} ${answers[id] === o.v ? 'is-on' : ''}`}
                            onClick={() => setAnswers((s) => ({ ...s, [id]: o.v }))}
                          >
                            {o.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </fieldset>
            ))}
          </div>

          <aside className="glass score-result reveal" aria-live="polite">
            <p className="eyebrow">Your result</p>
            <div className={`score-ring tone-${done ? b.tone : 'none'}`} style={{ '--pct': done ? result.pct : (answered / ALL.length) * 100 }}>
              <div>
                <b>{done ? `${result.pct}%` : `${answered}/${ALL.length}`}</b>
                <small>{done ? b.label : 'answered'}</small>
              </div>
            </div>

            {!done && <p className="score-hint">Answer all questions to see your score and recommended fixes.</p>}

            {done && (
              <>
                <p className="score-verdict">{b.text}</p>
                <ul className="area-bars">
                  {result.areas.map((a) => (
                    <li key={a.area}>
                      <span>{a.area}</span>
                      <span className="bar"><i style={{ width: `${a.pct}%` }} className={a.pct >= 80 ? 'good' : a.pct >= 50 ? 'mid' : 'low'} /></span>
                      <em>{a.pct}%</em>
                    </li>
                  ))}
                </ul>
                {result.fixes.length > 0 && (
                  <>
                    <p className="case-label">Top fixes</p>
                    <ol className="fix-list">
                      {result.fixes.slice(0, 5).map((f) => <li key={f.id}><b>{f.area}:</b> {f.fix}</li>)}
                    </ol>
                  </>
                )}
                <button type="button" className="btn primary score-cta" onClick={sendResults}>
                  Get an expert review of these gaps <ArrowUpRight />
                </button>
                <button type="button" className="btn ghost score-reset" onClick={() => setAnswers({})}>Start over</button>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
