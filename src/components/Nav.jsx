import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile.js'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import { Close, Menu } from './Icons.jsx'

const ids = navLinks.map((l) => l.id)

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Primary">
      <div className="wrap nav-inner">
        <a className="brand" href="#top" onClick={close} aria-label={`${profile.name} — home`}>
          {profile.initials}<span>.</span>
        </a>

        <div className="nav-links">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'is-active' : ''}>
              {l.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">Start a conversation ↗</a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        {navLinks.map((l, i) => (
          <a key={l.id} href={`#${l.id}`} onClick={close} style={{ '--i': i }}>
            <span>0{i + 1}</span>{l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
