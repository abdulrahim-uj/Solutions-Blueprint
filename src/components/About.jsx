import { about, skillGroups, stats } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead
          index="01"
          eyebrow="Perspective"
          title={<>Engineering is<br />a thinking discipline.</>}
          lead="I care about the layer between business requirements and production software — where architecture, people and delivery meet."
        />
        <div className="about">
          <div className="glass about-card reveal">
            {about.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            <div className="numbers">
              {stats.map((s) => (
                <div className="number" key={s.label}>
                  <b>{s.value}</b>
                  <small>{s.label}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="glass about-card reveal" id="skills">
            <p className="eyebrow">The stack</p>
            <div className="skill-groups">
              {skillGroups.map((g) => (
                <div className="skill-group" key={g.title}>
                  <h3>{g.title}</h3>
                  <ul className="stack">
                    {g.items.map((s) => <li className="chip" key={s}>{s}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
