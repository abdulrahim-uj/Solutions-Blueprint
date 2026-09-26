import { capabilities } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

export default function Capabilities() {
  return (
    <section id="capabilities">
      <div className="wrap">
        <SectionHead
          index="04"
          eyebrow="Capabilities"
          title={<>Where I create<br />the most leverage.</>}
        />
        <div className="services">
          {capabilities.map((c, i) => (
            <div className="glass service reveal" key={c.title} style={{ '--d': i % 3 }}>
              <p className="num">{String(i + 1).padStart(2, '0')}</p>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
