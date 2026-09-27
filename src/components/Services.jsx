import { useState } from 'react'
import { currencies, formatPrice, leadConfig, retainers, services, training } from '../data/business.js'
import { guessCurrency, prefillEnquiry } from '../lib/lead.js'
import SectionHead from './SectionHead.jsx'
import { ArrowUpRight, Check } from './Icons.jsx'

const readSaved = () => {
  try { return localStorage.getItem('currency') || guessCurrency() } catch { return guessCurrency() }
}

export default function Services() {
  const [cur, setCur] = useState(readSaved)
  const choose = (c) => {
    setCur(c)
    try { localStorage.setItem('currency', c) } catch { /* private mode */ }
  }

  return (
    <section id="services">
      <div className="wrap">
        <SectionHead
          index="01"
          eyebrow="Services"
          title={<>Senior backend help,<br />without a full-time hire.</>}
          lead="Fixed-scope engagements with clear prices, monthly retainers for ongoing leadership, and training for your developers. Every engagement starts with a free 30-minute call."
        />

        <div className="currency-bar reveal">
          <span className="currency-label">Show prices in</span>
          <div className="segmented" role="radiogroup" aria-label="Currency">
            {currencies.map((c) => (
              <button
                key={c.code}
                type="button"
                role="radio"
                aria-checked={cur === c.code}
                className={cur === c.code ? 'is-active' : ''}
                onClick={() => choose(c.code)}
                title={c.region}
              >
                {c.label}
              </button>
            ))}
          </div>
          <span className="capacity"><span className="pulse" aria-hidden="true" /> {leadConfig.capacityNote}</span>
        </div>

        <h3 className="sub-head reveal">Fixed-scope engagements</h3>
        <div className="offer-grid">
          {services.map((s, i) => (
            <article key={s.id} className={`glass offer reveal ${s.featured ? 'is-featured' : ''}`} style={{ '--d': i }}>
              {s.featured && <span className="ribbon">Most requested</span>}
              <h4>{s.name}</h4>
              <p className="offer-tagline">{s.tagline}</p>
              <p className="price">
                {s.unit === 'from' && <small>from </small>}
                <b>{formatPrice(s.price, cur)}</b>
                <small> · {s.duration}</small>
              </p>
              <p className="offer-for"><span>Best for</span> {s.for}</p>
              <ul className="check-list">
                {s.includes.map((x) => <li key={x}><Check width="15" height="15" />{x}</li>)}
              </ul>
              <button type="button" className={`btn ${s.featured ? 'primary' : 'secondary'} offer-cta`} onClick={() => prefillEnquiry({ service: s.name })}>
                {s.cta} <ArrowUpRight />
              </button>
            </article>
          ))}
        </div>

        <h3 className="sub-head reveal">Monthly retainers <span>— ongoing senior support, cancel anytime with 30 days notice</span></h3>
        <div className="offer-grid">
          {retainers.map((r, i) => (
            <article key={r.id} className={`glass offer reveal ${r.featured ? 'is-featured' : ''}`} style={{ '--d': i }}>
              {r.featured && <span className="ribbon">Best value</span>}
              <h4>{r.name}</h4>
              <p className="price"><b>{formatPrice(r.price, cur)}</b><small> {r.per}</small></p>
              <p className="offer-for"><span>Best for</span> {r.for}</p>
              <ul className="check-list">
                {r.includes.map((x) => <li key={x}><Check width="15" height="15" />{x}</li>)}
              </ul>
              <button
                type="button"
                className={`btn ${r.featured ? 'primary' : 'secondary'} offer-cta`}
                onClick={() => prefillEnquiry({ service: r.id === 'agency' ? 'White-label backend partner (agency)' : 'Monthly retainer (Advisor / Fractional Tech Lead)', message: `Interested in the ${r.name} retainer.` })}
              >
                Discuss {r.name} <ArrowUpRight />
              </button>
            </article>
          ))}
        </div>

        <h3 className="sub-head reveal">Developer training <span>— from someone who trains developers every week</span></h3>
        <div className="training-grid">
          {training.map((t, i) => (
            <article
              key={t.id}
              className="glass training reveal"
              style={{ '--d': i }}
            >
              <div className="training-top">
                <h4>{t.name}</h4>
                <p className="price small"><b>{formatPrice(t.price, cur)}</b><small> {t.per}</small></p>
              </div>
              <p className="training-text">{t.text}</p>
              <button
                type="button"
                className="training-link"
                onClick={() => prefillEnquiry({ service: 'Developer training / mentoring', message: `Interested in: ${t.name}.` })}
              >
                Enquire about {t.name.toLowerCase()} <ArrowUpRight width="14" height="14" />
              </button>
            </article>
          ))}
        </div>
        <p className="price-note reveal">Prices exclude taxes. Final quotes depend on scope and are confirmed in writing after the discovery call.</p>
      </div>
    </section>
  )
}
