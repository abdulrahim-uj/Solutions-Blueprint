import { useEffect } from 'react'

/**
 * Cursor-following glow on any `.glass` card (fine pointers only).
 * One delegated listener for the whole page; sets --mx / --my on the hovered card.
 */
export function useSpotlight() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || reduce.matches) return

    let frame = 0
    let evt = null
    const apply = () => {
      frame = 0
      const card = evt?.target instanceof Element ? evt.target.closest('.glass') : null
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${evt.clientX - r.left}px`)
      card.style.setProperty('--my', `${evt.clientY - r.top}px`)
    }
    const onMove = (e) => { evt = e; if (!frame) frame = requestAnimationFrame(apply) }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
}
