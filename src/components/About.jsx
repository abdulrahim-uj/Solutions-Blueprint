import { about, skillGroups, stats } from '../data/profile.js'
import CountUp from './CountUp.jsx'
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
              {stats.map((s, i) => (
                <div className="number reveal" key={s.label} style={{ '--d': i + 1 }}>
                  <b><CountUp value={s.value} /></b>
                  <small>{s.label}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="glass about-card reveal" id="skills" style={{ '--d': 1 }}>
            <p className="eyebrow">The stack</p>
            <div className="skill-groups">
              {skillGroups.map((g, gi) => (
                <div className="skill-group reveal" key={g.title} style={{ '--d': Math.min(gi, 5) }}>
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
