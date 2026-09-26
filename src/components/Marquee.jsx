import { marqueeStack } from '../data/profile.js'

/** Infinite, pausable tech strip. The second copy is decorative only. */
export default function Marquee() {
  const row = (hidden) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {marqueeStack.map((t) => (
        <li key={t}><span className="marquee-dot" />{t}</li>
      ))}
    </ul>
  )
  return (
    <div className="marquee" aria-label="Core technologies">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
