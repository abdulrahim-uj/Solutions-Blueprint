import { useEffect } from 'react'

/**
 * Global, render-free scroll effects. Writes CSS variables on <html> so styles
 * can react without re-rendering React:
 *   --scroll   0 → 1 page progress (progress bar, back-to-top ring)
 *   data-scrolled / data-nav-hidden attributes for the navbar
 */
export function useScrollFx() {
  useEffect(() => {
    const root = document.documentElement
    let lastY = window.scrollY
    let frame = 0

    const update = () => {
      frame = 0
      const y = window.scrollY
      const max = root.scrollHeight - window.innerHeight
      root.style.setProperty('--scroll', max > 0 ? (y / max).toFixed(4) : '0')
      root.toggleAttribute('data-scrolled', y > 8)
      root.toggleAttribute('data-show-top', y > window.innerHeight * 0.9)

      const delta = y - lastY
      if (Math.abs(delta) > 6) {
        // Hide on scroll down, reveal on scroll up; never hide near the top or with the menu open
        const hide = delta > 0 && y > 160 && !root.hasAttribute('data-menu-open')
        root.toggleAttribute('data-nav-hidden', hide)
        lastY = y
      }
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
}
