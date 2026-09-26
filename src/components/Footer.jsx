import { contact, profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="wrap footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <div className="social">
        <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={`mailto:${contact.email}`}>Email</a>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
