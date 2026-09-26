import { useMemo, useState } from 'react'
import { projectCategories, projects } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'
import { ArrowUpRight } from './Icons.jsx'

const host = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="work">
      <div className="wrap">
        <SectionHead
          index="03"
          eyebrow="Selected work"
          title={<>Ideas turned<br />into systems.</>}
          lead="Production systems I have architected, led or built — from multi-tenant commerce to the middleware that keeps ERPs, CRMs and devices in sync."
        />

        <div className="filters reveal" role="tablist" aria-label="Filter projects">
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={filter === c}
              className={`filter ${filter === c ? 'is-active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
              <span>{c === 'All' ? projects.length : projects.filter((p) => p.category === c).length}</span>
            </button>
          ))}
        </div>

        <div className="projects">
          {visible.map((p, i) => (
            <article className={`glass project reveal ${p.featured ? 'is-featured' : ''}`} key={p.name} data-accent={i % 4}>
              <div>
                <p className="projectno">{String(i + 1).padStart(2, '0')} — {p.kind.toUpperCase()}</p>
                <h3>{p.name}</h3>
                <p className="project-text">{p.description}</p>
              </div>
              <div>
                <ul className="tags">
                  {p.stack.map((t) => <li className="tag" key={t}>{t}</li>)}
                </ul>
                {p.url && (
                  <div className="project-links">
                    {[{ label: host(p.url), href: p.url }, ...(p.extraLinks ?? [])].map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label} <ArrowUpRight width="14" height="14" />
                      </a>
                    ))}
                  </div>
                )}
                {!p.url && <p className="private-note">Client system · private deployment</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
