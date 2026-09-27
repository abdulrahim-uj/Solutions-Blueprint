import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Services from './components/Services.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Scorecard from './components/Scorecard.jsx'
import Process from './components/Process.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import { useReveal } from './hooks/useReveal.js'
import { useScrollFx } from './hooks/useScrollFx.js'
import { useSpotlight } from './hooks/useSpotlight.js'

export default function App() {
  useReveal()
  useScrollFx()
  useSpotlight()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="bg-aurora" aria-hidden="true"><span /><span /><span /></div>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <CaseStudies />
        <Scorecard />
        <Process />
        <Projects />
        <About />
        <Experience />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
