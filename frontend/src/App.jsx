import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components'

const App = () => {
  return (
    <BrowserRouter>
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

      <div className='relative z-0'>
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App