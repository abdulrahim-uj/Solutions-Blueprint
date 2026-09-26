import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile.js'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import { Close, Menu } from './Icons.jsx'

const ids = navLinks.map((l) => l.id)

export default function Nav() {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(ids)

  useEffect(() => {
    const root = document.documentElement
    root.toggleAttribute('data-menu-open', open)
    if (open) root.removeAttribute('data-nav-hidden')
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 900 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
    <nav className="nav" aria-label="Primary">
      <div className="wrap nav-inner">
        <a className="brand" href="#top" onClick={close} aria-label={`${profile.name} — home`}>
          {profile.initials}<span>.</span>
        </a>

        <div className="nav-links">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'is-active' : ''} aria-current={active === l.id ? 'true' : undefined}>
              {l.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>

        <button
          type="button"
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
      <div className="nav-progress" aria-hidden="true" />
    </nav>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} inert={!open} aria-hidden={!open}>
        <div className="mobile-menu-links">
          {navLinks.map((l, i) => (
            <a key={l.id} href={`#${l.id}`} onClick={close} style={{ '--i': i }} className={active === l.id ? 'is-active' : ''}>
              <span>0{i + 1}</span>{l.label}
            </a>
          ))}
        </div>
        <a className="btn primary mobile-menu-cta" href="#contact" onClick={close} style={{ '--i': navLinks.length }}>
          Start a conversation ↗
        </a>
      </div>
    </>
  )
}
