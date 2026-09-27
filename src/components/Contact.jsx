import { useEffect, useRef, useState } from 'react'
import { contact, profile, whatsappLink } from '../data/profile.js'
import { budgetRanges, enquiryServices, leadConfig, timelines } from '../data/business.js'
import { bookingHref, PREFILL_EVENT } from '../lib/lead.js'
import { ArrowUpRight, Check, Copy, GitHub, LinkedIn, Mail, WhatsApp } from './Icons.jsx'

const EMPTY = { name: '', email: '', company: '', service: '', budget: '', timeline: '', message: '', botcheck: '' }

const brief = (f) =>
  [
    `Hi Abdul Rahim, I'd like to discuss a project.`,
    ``,
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    f.company && `Company: ${f.company}`,
    f.service && `Looking for: ${f.service}`,
    f.budget && `Budget: ${f.budget}`,
    f.timeline && `Timeline: ${f.timeline}`,
    ``,
    f.message,
  ].filter((l) => l !== false && l !== undefined && l !== null).join('\n')

export default function Contact() {
  const [tab, setTab] = useState('client')
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | opened | error
  const [copied, setCopied] = useState(false)
  const nameRef = useRef(null)

  // Other sections (service cards, scorecard, case studies) pre-fill the form.
  useEffect(() => {
    const onPrefill = (e) => {
      const { service, message } = e.detail || {}
      setTab('client')
      setStatus('idle')
      setForm((f) => ({ ...f, service: service || f.service, message: message || f.message }))
      setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 650)
    }
    window.addEventListener(PREFILL_EVENT, onPrefill)
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill)
  }, [])

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please add your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please add a valid email'
    if (form.message.trim().length < 15) e.message = 'A sentence or two about the problem helps me prepare'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(`Project enquiry${form.service ? ` — ${form.service}` : ''}`)}&body=${encodeURIComponent(brief(form))}`

  const onSubmit = async (e) => {
    e.preventDefault()
    if (form.botcheck || !validate()) return

    if (leadConfig.web3formsKey) {
      setStatus('sending')
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: leadConfig.web3formsKey,
            subject: `New enquiry: ${form.service || 'General'} — ${form.name}`,
            from_name: 'Portfolio enquiry',
            replyto: form.email,
            ...form,
          }),
        })
        const data = await res.json()
        if (!res.ok || !data.success) throw new Error(data.message || 'Failed')
        setStatus('sent')
      } catch {
        setStatus('error')
      }
      return
    }

    window.open(whatsappLink(brief(form)), '_blank', 'noopener')
    setStatus('opened')
  }

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
          <div className="contact-main" id="enquiry">
            <p className="eyebrow">08 / Let&apos;s talk</p>
            <h2>Have a difficult<br />problem?</h2>

            <div className="tabs" role="tablist" aria-label="Enquiry type">
              <button type="button" role="tab" aria-selected={tab === 'client'} className={tab === 'client' ? 'is-active' : ''} onClick={() => setTab('client')}>I need a consultant / trainer</button>
              <button type="button" role="tab" aria-selected={tab === 'hiring'} className={tab === 'hiring' ? 'is-active' : ''} onClick={() => setTab('hiring')}>I&apos;m hiring full-time</button>
            </div>

            {tab === 'client' && (status === 'sent' || status === 'opened') && (
              <div className="form-done pop" role="status">
                <span className="done-icon"><Check width="22" height="22" /></span>
                <h3>{status === 'sent' ? 'Thanks — your enquiry is in.' : 'WhatsApp opened with your brief.'}</h3>
                <p>
                  {status === 'sent'
                    ? 'I reply within 24 hours (IST) with next steps and a slot for a free 30-minute call.'
                    : 'Just press send in WhatsApp. Prefer email? Use the button below — your brief is already filled in.'}
                </p>
                <div className="hero-actions">
                  <a className="btn primary" href={bookingHref(form.service)} target="_blank" rel="noopener noreferrer">Book the free call now <ArrowUpRight /></a>
                  {status === 'opened' && <a className="btn secondary" href={mailtoHref}><Mail /> Send via email instead</a>}
                  <button type="button" className="btn ghost" onClick={() => { setForm(EMPTY); setStatus('idle') }}>New enquiry</button>
                </div>
              </div>
            )}

            {tab === 'client' && status !== 'sent' && status !== 'opened' && (
              <form className="enquiry" onSubmit={onSubmit} noValidate>
                <p className="form-intro">Tell me a little about the project. I reply within 24 hours with honest advice — even if that means I am not the right fit.</p>
                <div className="form-grid">
                  <label className={errors.name ? 'has-error' : ''}>
                    <span>Name *</span>
                    <input ref={nameRef} value={form.name} onChange={set('name')} autoComplete="name" required aria-invalid={!!errors.name} />
                    {errors.name && <em>{errors.name}</em>}
                  </label>
                  <label className={errors.email ? 'has-error' : ''}>
                    <span>Work email *</span>
                    <input type="email" value={form.email} onChange={set('email')} autoComplete="email" required aria-invalid={!!errors.email} />
                    {errors.email && <em>{errors.email}</em>}
                  </label>
                  <label>
                    <span>Company / product</span>
                    <input value={form.company} onChange={set('company')} autoComplete="organization" />
                  </label>
                  <label>
                    <span>I&apos;m looking for</span>
                    <select value={form.service} onChange={set('service')}>
                      <option value="">Choose a service…</option>
                      {enquiryServices.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </label>
                  <label>
                    <span>Budget</span>
                    <select value={form.budget} onChange={set('budget')}>
                      <option value="">Select a range…</option>
                      {budgetRanges.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </label>
                  <label>
                    <span>Timeline</span>
                    <select value={form.timeline} onChange={set('timeline')}>
                      <option value="">When do you need help?</option>
                      {timelines.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </label>
                  <label className={`span-2 ${errors.message ? 'has-error' : ''}`}>
                    <span>What&apos;s the problem? *</span>
                    <textarea rows={4} value={form.message} onChange={set('message')} placeholder="e.g. Our DRF API slows down past 2k users; checkout times out at peak…" aria-invalid={!!errors.message} />
                    {errors.message && <em>{errors.message}</em>}
                  </label>
                  <input type="text" className="hp" tabIndex={-1} autoComplete="off" value={form.botcheck} onChange={set('botcheck')} aria-hidden="true" />
                </div>
                {status === 'error' && (
                  <p className="form-error">Couldn&apos;t send just now. <a href={whatsappLink(brief(form))} target="_blank" rel="noopener noreferrer">Send via WhatsApp</a> or <a href={mailtoHref}>email</a> instead.</p>
                )}
                <div className="hero-actions form-actions">
                  <button type="submit" className="btn primary" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : leadConfig.web3formsKey ? 'Send enquiry' : 'Send enquiry via WhatsApp'} <ArrowUpRight />
                  </button>
                  <a className="btn secondary" href={bookingHref()} target="_blank" rel="noopener noreferrer">Or book a free 30-min call</a>
                </div>
                <p className="capacity"><span className="pulse" aria-hidden="true" /> {leadConfig.capacityNote}</p>
              </form>
            )}

            {tab === 'hiring' && (
              <div className="hiring pop">
                <p>
                  I&apos;m open to senior backend, technical lead and solution architect roles. {profile.availability}.
                  Happy to share my CV and walk you through the systems I&apos;ve architected.
                </p>
                <div className="hero-actions">
                  <a className="btn primary" href={`mailto:${contact.email}?subject=${encodeURIComponent('Role opportunity — CV request')}`}>Request my CV <ArrowUpRight /></a>
                  <a className="btn secondary" href={contact.linkedin} target="_blank" rel="noopener noreferrer"><LinkedIn /> View LinkedIn</a>
                  <a className="btn ghost" href="#experience">See experience</a>
                </div>
              </div>
            )}
          </div>

          <div className="contact-side">
            <ul className="channels">
              {channels.map(({ label, value, href, Icon, external }, i) => (
                <li key={label} className="reveal" style={{ '--d': i + 1 }}>
                  <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    <span className="channel-icon"><Icon /></span>
                    <span className="channel-text"><small>{label}</small><strong>{value}</strong></span>
                    <ArrowUpRight className="channel-arrow" />
                  </a>
                </li>
              ))}
            </ul>
            <button type="button" className="btn ghost copy-btn" onClick={copyEmail} aria-live="polite">
              {copied ? <><Check /> Email copied</> : <><Copy /> Copy email address</>}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
