import { certifications, education, experience, languages, training, workAuthorisation } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead
          index="02"
          eyebrow="Journey"
          title={<>Code → ownership<br />→ direction.</>}
          lead="From PowerBuilder and SQL Server in Kochi and Dubai to leading Python / Django teams — promoted twice within 24 months at Febno."
        />
        <div className="exp-layout">
          <ol className="timeline">
            {experience.map((job) => (
              <li className={`item reveal ${job.muted ? 'is-muted' : ''}`} key={`${job.company}-${job.period}`}>
                <p className="date">{job.period}</p>
                <h3>{job.title}</h3>
                <p className="co">{job.company} · {job.location}</p>
                <p className="item-text">{job.summary}</p>
                <ul className="tags">
                  {job.tags.map((t) => <li className="tag" key={t}>{t}</li>)}
                </ul>
              </li>
            ))}
          </ol>

          <aside className="exp-side">
            <div className="glass side-card reveal">
              <p className="eyebrow">Alongside</p>
              <h3>{training.title}</h3>
              <p className="co">{training.company}</p>
              <p>{training.summary}</p>
            </div>

            <div className="glass side-card reveal">
              <p className="eyebrow">Education</p>
              {education.map((e) => (
                <div className="edu" key={e.title}>
                  <h3>{e.title}</h3>
                  <p className="co">{e.meta}</p>
                </div>
              ))}
              <p className="eyebrow cert-head">Certifications</p>
              <ul className="cert-list">
                {certifications.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>

            <div className="glass side-card reveal">
              <p className="eyebrow">Languages</p>
              <ul className="lang-list">
                {languages.map((l) => (
                  <li key={l.name}><span>{l.name}</span><small>{l.level}</small></li>
                ))}
              </ul>
            </div>

            <div className="glass side-card reveal">
              <p className="eyebrow">Work authorisation</p>
              <ul className="cert-list">
                {workAuthorisation.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
