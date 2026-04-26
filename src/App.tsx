import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/ContactUs'  
import Skills from './Components/Skills'

function App() {
 

  return (
    <div className='bg-indigo-700/45'>
      <Navbar />
      <Hero />
      <About/>
      <Projects />
       <Skills />
      <Contact/>
      <footer className="py-10 text-center border-t border-slate-200 text-slate-900 text-sm">
        © 2026 Reham Sherif | Built with React & TypeScript
      </footer>

    </div>
  )
}

export default App
