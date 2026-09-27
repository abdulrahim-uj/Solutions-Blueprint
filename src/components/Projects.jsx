import { useMemo, useState } from 'react'
import { flushSync } from 'react-dom'
import { projectCategories, projects } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'
import { ArrowUpRight } from './Icons.jsx'

const host = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')
const countFor = (c) => (c === 'All' ? projects.length : projects.filter((p) => p.category === c).length)

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  const choose = (c) => {
    if (c === filter) return
    const apply = () => setFilter(c)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Smoothly morph the grid where the View Transitions API exists; plain update elsewhere.
    if (document.startViewTransition && !reduce) {
      document.startViewTransition(() => flushSync(apply))
    } else {
      apply()
    }
  }

  return (
    <section id="work">
      <div className="wrap">
        <SectionHead
          index="04"
          eyebrow="Selected work"
          title={<>Ideas turned<br />into systems.</>}
          lead="Production systems I have architected, led or built — from multi-tenant commerce and HR platforms to the middleware that keeps ERPs, CRMs and devices in sync."
        />

        <div className="filters-scroller reveal">
          <div className="filters" role="tablist" aria-label="Filter projects by category">
            {projectCategories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={filter === c}
                aria-controls="project-grid"
                className={`filter ${filter === c ? 'is-active' : ''}`}
                onClick={() => choose(c)}
              >
                {c}
                <span>{countFor(c)}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">{visible.length} projects shown</p>

        <div className="projects" id="project-grid">
          {visible.map((p, i) => (
            <article
              key={p.name}
              className={`glass project reveal ${p.featured ? 'is-featured' : ''}`}
              data-accent={i % 4}
              style={{ '--d': i % 3, viewTransitionName: `p-${slug(p.name)}` }}
            >
              <div>
                <div className="project-top">
                  <p className="projectno">{String(i + 1).padStart(2, '0')} — {p.kind.toUpperCase()}</p>
                  {p.featured && <span className="featured-badge">Featured</span>}
                </div>
                <h3>{p.name}</h3>
                <p className="project-text">{p.description}</p>
              </div>
              <div>
                <ul className="tags">
                  {p.stack.map((t) => <li className="tag" key={t}>{t}</li>)}
                </ul>
                {p.url ? (
                  <div className="project-links">
                    {[{ label: host(p.url), href: p.url }, ...(p.extraLinks ?? [])].map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label} <ArrowUpRight width="14" height="14" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="private-note"><span className="lock" aria-hidden="true">●</span> Client system · private deployment</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
