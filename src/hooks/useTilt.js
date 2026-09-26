import { useEffect, useRef } from 'react'

/** 3D tilt + parallax driven by pointer position over the element (fine pointers only). */
export function useTilt(max = 7) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ok = window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!ok) return

    let frame = 0
    let pt = null
    const apply = () => {
      frame = 0
      if (!pt) {
        el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg')
        el.style.setProperty('--px', '0'); el.style.setProperty('--py', '0')
        return
      }
      const r = el.getBoundingClientRect()
      const x = (pt.x - r.left) / r.width - 0.5
      const y = (pt.y - r.top) / r.height - 0.5
      el.style.setProperty('--rx', `${(-y * max).toFixed(2)}deg`)
      el.style.setProperty('--ry', `${(x * max).toFixed(2)}deg`)
      el.style.setProperty('--px', x.toFixed(3))
      el.style.setProperty('--py', y.toFixed(3))
    }
    const onMove = (e) => { pt = { x: e.clientX, y: e.clientY }; if (!frame) frame = requestAnimationFrame(apply) }
    const onLeave = () => { pt = null; if (!frame) frame = requestAnimationFrame(apply) }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [max])

  return ref
}
