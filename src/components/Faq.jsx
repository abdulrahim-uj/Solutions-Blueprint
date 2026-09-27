import { faqs } from '../data/business.js'
import SectionHead from './SectionHead.jsx'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function Faq() {
  return (
    <section id="faq">
      <div className="wrap faq-wrap">
        <SectionHead index="07" eyebrow="FAQ" title={<>Questions clients<br />usually ask.</>} />
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} className="glass faq reveal" style={{ '--d': i % 3 }} name="faq">
              <summary>{f.q}<span className="faq-icon" aria-hidden="true" /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </div>
    </section>
  )
}
