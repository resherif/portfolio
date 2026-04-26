import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/ContactUs'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="py-10 text-center border-t border-slate-200 text-slate-400 text-sm">
        © 2026 Reham Sherif | Built with React & TypeScript
      </footer>

    </>
  )
}

export default App
