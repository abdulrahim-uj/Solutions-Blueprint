import { experience, training } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead
          index="02"
          eyebrow="Journey"
          title={<>Code → ownership<br />→ direction.</>}
          lead="From PowerBuilder and SQL Server in Kochi and Dubai to leading Python / Django teams — each step added a layer of responsibility."
        />
        <div className="exp-layout">
          <ol className="timeline">
            {experience.map((job) => (
              <li className="item reveal" key={`${job.company}-${job.period}`}>
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
              <h3>Bachelor of Computer Applications</h3>
              <p className="co">Bharathiar University · 2011</p>
              <p className="eyebrow cert-head">Certifications</p>
              <ul className="cert-list">
                <li>Certified Penetration Tester — Redteam Hacker Academy (2022)</li>
                <li>Python Master Course — Inmakes Infotech (2022)</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
