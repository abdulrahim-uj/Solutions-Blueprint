/** Floating back-to-top button with a scroll-progress ring (driven by the --scroll CSS variable). */
export default function BackToTop() {
  return (
    <a href="#top" className="to-top" aria-label="Back to top">
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <circle className="to-top-track" cx="22" cy="22" r="20" pathLength="100" />
        <circle className="to-top-ring" cx="22" cy="22" r="20" pathLength="100" />
      </svg>
      <span aria-hidden="true">↑</span>
    </a>
  )
}
