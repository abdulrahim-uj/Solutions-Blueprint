import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView.js'

const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Animates the numeric part of a value like "9+" or "11" from 0 when it scrolls into view. */
export default function CountUp({ value, duration = 1400 }) {
  const match = String(value).match(/^(\D*)(\d+)(.*)$/)
  const hasNumber = Boolean(match)
  const target = hasNumber ? Number(match[2]) : 0
  const [ref, inView] = useInView({ threshold: 0.6 })
  const [n, setN] = useState(0)
  const [reduced] = useState(prefersReduced)

  useEffect(() => {
    if (!hasNumber || !inView || reduced) return
    let raf = 0
    const start = performance.now()
    const tick = (t) => {
      const k = Math.min(1, (t - start) / duration)
      setN(Math.round(target * (1 - Math.pow(1 - k, 3))))
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration, hasNumber, reduced])

  if (!hasNumber) return <span>{value}</span>
  const shown = reduced ? target : n
  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">{match[1]}{shown}{match[3]}</span>
    </span>
  )
}
