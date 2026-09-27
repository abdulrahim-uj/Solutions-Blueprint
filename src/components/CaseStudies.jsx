import { caseStudies } from '../data/business.js'
import { prefillEnquiry } from '../lib/lead.js'
import SectionHead from './SectionHead.jsx'
import { ArrowUpRight } from './Icons.jsx'

export default function CaseStudies() {
  return (
    <section id="case-studies">
      <div className="wrap">
        <SectionHead
          index="02"
          eyebrow="Case studies"
          title={<>Real problems,<br />shipped to production.</>}
          lead="How I approach architecture, automation and integration work. Delivered as part of my role at Febno Technologies."
        />
        <div className="cases">
          {caseStudies.map((c, i) => (
            <article key={c.id} className="glass case reveal" style={{ '--d': i % 2 }}>
              <header className="case-head">
                <div>
                  <ul className="tags">{c.tags.map((t) => <li className="tag" key={t}>{t}</li>)}</ul>
                  <h3>{c.title}</h3>
                  <p className="case-client">{c.client}{c.role && <> · <span>{c.role}</span></>}</p>
                  {c.status && (
                    <div className="case-status">
                      <span className="status-badge"><span className="status-dot" aria-hidden="true" />{c.status.label} · {c.status.progress}%</span>
                      <span className="status-bar" role="progressbar" aria-valuenow={c.status.progress} aria-valuemin={0} aria-valuemax={100} aria-label={`${c.status.progress}% complete`}>
                        <i style={{ width: `${c.status.progress}%` }} />
                      </span>
                    </div>
                  )}
                </div>
                <span className="case-no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              </header>

              <ol className="flow" aria-label="System flow">
                {c.flow.map((f) => <li key={f}>{f}</li>)}
              </ol>

              <div className="case-body">
                <div>
                  <p className="case-label">The challenge</p>
                  <p>{c.challenge}</p>
                </div>
                <div>
                  <p className="case-label">What I did</p>
                  <ul className="dash-list">{c.approach.map((a) => <li key={a}>{a}</li>)}</ul>
                </div>
              </div>

              <footer className="case-foot">
                <p className="case-outcome"><span className="case-label">Outcome</span>{c.outcome}</p>
                <div className="case-actions">
                  {c.url && (
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-link">
                      Visit live product <ArrowUpRight width="14" height="14" />
                    </a>
                  )}
                  <button type="button" className="btn secondary" onClick={() => prefillEnquiry({ message: `I read your "${c.title}" case study and have a similar problem: ` })}>
                    I have a similar problem
                  </button>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
