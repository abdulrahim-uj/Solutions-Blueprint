import { useState } from 'react'
import { contact, profile, whatsappLink } from '../data/profile.js'
import { ArrowUpRight, Check, Copy, GitHub, LinkedIn, Mail, WhatsApp } from './Icons.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${contact.email}`
    }
  }

  const channels = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, Icon: Mail },
    { label: 'WhatsApp', value: contact.whatsappDisplay, href: whatsappLink(), Icon: WhatsApp, external: true },
    { label: 'LinkedIn', value: 'in/abdulrahim-uj', href: contact.linkedin, Icon: LinkedIn, external: true },
    { label: 'GitHub', value: 'abdulrahim-uj', href: contact.github, Icon: GitHub, external: true },
  ]

  return (
    <section id="contact">
      <div className="wrap">
        <div className="glass contact reveal">
          <div className="contact-main">
            <p className="eyebrow">05 / Let&apos;s build</p>
            <h2>Have a difficult<br />problem?</h2>
            <p>
              Good. Those are usually the interesting ones. Whether it&apos;s a senior engineering role, a
              technical-lead position or an integration that has to work in production, let&apos;s talk
              about the product, the constraint and what needs to happen next.
            </p>
            <p className="availability"><span className="pulse" aria-hidden="true" /> {profile.availability}</p>
            <div className="hero-actions">
              <a className="btn primary" href={`mailto:${contact.email}?subject=${encodeURIComponent('Hello Abdul Rahim')}`}>
                Email me <ArrowUpRight />
              </a>
              <a className="btn secondary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsApp /> WhatsApp
              </a>
              <button type="button" className="btn ghost" onClick={copyEmail} aria-live="polite">
                {copied ? <><Check /> Copied</> : <><Copy /> Copy email</>}
              </button>
            </div>
          </div>

          <ul className="channels">
            {channels.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="channel-icon"><Icon /></span>
                  <span className="channel-text">
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </span>
                  <ArrowUpRight className="channel-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
