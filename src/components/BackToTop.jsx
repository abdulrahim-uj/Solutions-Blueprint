import { bookingHref } from '../lib/lead.js'

/** Floating back-to-top button with a scroll-progress ring, plus a sticky "book a call" bar on phones. */
export default function BackToTop() {
  return (
    <>
      <a href="#enquiry" className="m-cta" aria-label="Book a free 30-minute call">
        <span className="pulse" aria-hidden="true" /> Book a free 30-min call
      </a>
      <a href={bookingHref()} className="sr-only" target="_blank" rel="noopener noreferrer">Book via WhatsApp</a>
      <a href="#top" className="to-top" aria-label="Back to top">
        <svg viewBox="0 0 44 44" aria-hidden="true">
          <circle className="to-top-track" cx="22" cy="22" r="20" pathLength="100" />
          <circle className="to-top-ring" cx="22" cy="22" r="20" pathLength="100" />
        </svg>
        <span aria-hidden="true">↑</span>
      </a>
    </>
  )
}
