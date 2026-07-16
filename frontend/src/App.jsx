import { MotionConfig } from 'framer-motion'
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Footer, ScrollProgress } from './components'

/**
 * Application root.
 *
 * Single-page layout: fixed navbar + hero (shared ambient background), then
 * the content sections in reading order. `MotionConfig reducedMotion="user"`
 * disables transform/layout animations for users who prefer reduced motion.
 *
 * The Contact section is intentionally disabled until its backend exists —
 * see Contact.jsx.
 */
const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <div className="noise-overlay" aria-hidden="true" />

      <div className='relative z-0 bg-primary-light dark:bg-primary transition-colors duration-300'>
        <div className='bg-hero-pattern-light dark:bg-hero-pattern bg-cover bg-no-repeat bg-center transition-all duration-300'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
      </div>

      <div className='relative z-0 bg-primary-light dark:bg-primary transition-colors duration-300'>
        {/* <Contact /> */}
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
