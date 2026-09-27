import { heroHighlights, heroRoles, profile, stats } from '../data/profile.js'
import { useTilt } from '../hooks/useTilt.js'
import { ArrowUpRight, MapPin } from './Icons.jsx'
import RotatingWord from './RotatingWord.jsx'

export default function Hero() {
  const tiltRef = useTilt(6)

  return (
    <section className="hero wrap" id="top">
      <div className="hero-copy-col">
        <div className="pill enter" style={{ '--d': 0 }}>
          <span className="pulse" aria-hidden="true" /> <RotatingWord words={heroRoles} />
        </div>
        <h1 className="enter" style={{ '--d': 1 }}>
          Turning complex ideas into <span className="grad">real systems.</span>
        </h1>
        <p className="hero-copy enter" style={{ '--d': 2 }}>{profile.intro}</p>
        <div className="hero-actions enter" style={{ '--d': 3 }}>
          <a className="btn primary" href="#enquiry">Book a free 30-min call <ArrowUpRight /></a>
          <a className="btn secondary" href="#case-studies">See case studies</a>
          <a className="btn ghost hero-tool" href="#scorecard">Free: rate your Django backend</a>
        </div>
        <dl className="mini enter" style={{ '--d': 4 }}>
          {heroHighlights.map((h) => (
            <div key={h.title}>
              <dt>{h.title}</dt>
              <dd>{h.text}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="visual enter" style={{ '--d': 2 }} aria-hidden="true" ref={tiltRef}>
        <div className="orb">
          <div className="grid" />
          <pre className="code">
            <b>class</b> SolutionExpert:{'\n'}
            {'    '}<em>stack</em> = <i>&quot;python/django&quot;</i>{'\n'}
            {'    '}<em>focus</em> = <i>&quot;systems&quot;</i>{'\n'}
            {'    '}<em>mindset</em> = <i>&quot;ship it&quot;</i><span className="caret" />
          </pre>
          <div className="avatar">
            <div className="avatar-ring">
              <img className="avatar-img" src={profile.photo} alt="" width="640" height="640" fetchPriority="high" decoding="async" />
            </div>
          </div>
          <div className="badge float-a"><b>{stats[0].value} yrs</b>engineering journey</div>
          <div className="badge badge-b float-b"><b>{stats[2].value} devs</b>team led</div>
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
