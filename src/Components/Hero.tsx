import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa6";
import { Mail } from 'lucide-react';
import heroImg from '../assets/formal img.jpg';
const Hero = () => {
  return (
      <header className=" py-20 px-6 max-w-5xl mx-auto mt-10 text-center flex items-center justify-center">
          <div>
         <img src={heroImg} alt="Reham Sherif" className="rounded-4xl h-100 object-cover mb-4" />
              
          </div>
          <div>
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-4">
          Reham Sherif
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Software Engineer specializing in building robust web applications with 
          React and TypeScript. Transitioning business logic into elegant code.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/resherif"  target="_blank"
          rel="noreferrer" className="p-2 hover:text-blue-600 transition-colors"><FaGithub  size={24}/></a>
          <a  href="https://www.linkedin.com/in/reham-sherif-a6b631216"
          target="_blank"
          rel="noreferrer" className="p-2 hover:text-blue-600 transition-colors"><FaLinkedin size={24} /></a>
          <a href="rehamsherrif@gmail.com" className="p-2 hover:text-blue-600 transition-colors"><Mail size={24} /></a>
        </div>
          </div>
        
      </header>
  )
}

export default Hero