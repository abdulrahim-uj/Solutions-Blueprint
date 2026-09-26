import { useEffect, useRef } from 'react'

/** Sets --p (0 → 1) on the element as it scrolls past the viewport's upper-middle — used to "draw" the timeline. */
export function useTimelineProgress() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0
    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const anchor = window.innerHeight * 0.62
      const p = Math.min(1, Math.max(0, (anchor - r.top) / r.height))
      el.style.setProperty('--p', p.toFixed(4))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return ref
}
