import { useEffect, useState } from 'react'

/** Cycles through words with a vertical slide; static for reduced-motion users. */
export default function RotatingWord({ words, interval = 2600 }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className="rotator" aria-label={words.join(', ')}>
      <span className="rotator-word" key={i} aria-hidden="true">{words[i]}</span>
    </span>
  )
}
