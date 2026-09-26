import { useEffect } from 'react'

/**
 * Fades elements marked with `.reveal` into view once, as they enter the viewport.
 * Uses a MutationObserver so elements rendered later (e.g. filtered project cards) are picked up too.
 */
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Reveal on entry, or if it was jumped past (anchor link / reload mid-page)
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    const observeAll = () =>
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el))
    observeAll()

    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })

    // Safety net for fast flings / slow devices: once scrolling settles, reveal anything
    // already on screen or scrolled past that the observer missed between frames.
    let timer = 0
    const sweep = () => {
      const limit = window.innerHeight
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add('is-visible')
          io.unobserve(el)
        }
      })
    }
    const onScroll = () => { clearTimeout(timer); timer = setTimeout(sweep, 140) }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      io.disconnect()
      mo.disconnect()
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
}
