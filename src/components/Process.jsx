import { processSteps } from '../data/business.js'

export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="wrap">
        <p className="eyebrow reveal">How we work together</p>
        <ol className="process">
          {processSteps.map((s, i) => (
            <li key={s.title} className="glass step reveal" style={{ '--d': i }}>
              <span className="step-no">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
