import { leadConfig } from '../data/business.js'
import { whatsappLink } from '../data/profile.js'

/** Event other sections use to pre-fill the enquiry form (e.g. a service card or the scorecard result). */
export const PREFILL_EVENT = 'enquiry:prefill'

export function prefillEnquiry({ service = '', message = '' } = {}) {
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: { service, message } }))
  document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** Where "Book a free call" goes: the scheduling page if configured, otherwise a WhatsApp chat. */
export function bookingHref(topic = '') {
  if (leadConfig.bookingUrl) return leadConfig.bookingUrl
  const about = topic ? ` about ${topic}` : ''
  return whatsappLink(`Hi Abdul Rahim, I'd like to book a free 30-minute discovery call${about}. When are you available?`)
}

/** Best-guess currency from the visitor's time zone (no network, no tracking). */
export function guessCurrency() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    if (tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta') return 'INR'
    if (/Asia\/(Dubai|Riyadh|Qatar|Kuwait|Bahrain|Muscat)/.test(tz)) return 'AED'
  } catch { /* ignore */ }
  return 'USD'
}
