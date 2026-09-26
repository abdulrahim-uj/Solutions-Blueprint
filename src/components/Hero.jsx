import { heroHighlights, profile, stats } from '../data/profile.js'
import { ArrowUpRight, MapPin } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-copy-col">
        <div className="pill reveal">
          <span className="pulse" aria-hidden="true" /> {profile.role}
        </div>
        <h1 className="reveal">
          Turning complex ideas into <span className="grad">real systems.</span>
        </h1>
        <p className="hero-copy reveal">{profile.intro}</p>
        <div className="hero-actions reveal">
          <a className="btn primary" href="#work">View selected work <ArrowUpRight /></a>
          <a className="btn secondary" href="#contact">Let&apos;s connect</a>
        </div>
        <dl className="mini reveal">
          {heroHighlights.map((h) => (
            <div key={h.title}>
              <dt>{h.title}</dt>
              <dd>{h.text}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="visual reveal" aria-hidden="true">
        <div className="orb">
          <div className="grid" />
          <pre className="code">
            <b>class</b> SolutionExpert:{'\n'}
            {'    '}<em>stack</em> = <i>&quot;python/django&quot;</i>{'\n'}
            {'    '}<em>focus</em> = <i>&quot;systems&quot;</i>{'\n'}
            {'    '}<em>mindset</em> = <i>&quot;ship it&quot;</i>
          </pre>
          <div className="avatar">
            <div className="avatar-ring">
              <img
                className="avatar-img"
                src={profile.photo}
                alt=""
                width="640"
                height="640"
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="badge"><b>{stats[0].value} yrs</b>engineering journey</div>
          <div className="float">
            <div>
              <small>Currently focused on</small>
              <strong>Architecture · Delivery · Developer growth</strong>
            </div>
            <span className="float-loc"><MapPin width="14" height="14" /> {profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
