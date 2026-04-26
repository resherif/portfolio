import { useState } from 'react'
import { ExternalLink } from 'lucide-react';
import { projects,categories} from '../data';
import Skills from './Skills';

const Projects = () => {
    const [active, setActive] = useState("all");
    const visible = projects.filter(
        (p) => active === "all" || p.projCategory === active
  )
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto " id="Projects">
        <div  className='flex justify-center items-center gap-6 ' >
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`p-4 bg-indigo-800/45 text-lg mb-10 rounded-2xl  ${active === cat.key ?"bg-blue-600 text-indigo-400" : "bg-gray-200 text-slate-900"}`}
            onClick={() => setActive(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((project) => (
            <div key={project.title} className="bg-indigo-800/20 p-6 rounded-xl shadow-sm  hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-tighter text-indigo-700 px-2 py-1 rounded">
                  {project.projCategory}
                </span>
              <a href={project.github} target="_blank" rel="noopener noreferrer">   <ExternalLink size={24} className="text-indigo-800"/></a>
                
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px]  text-slate-900  px-2 py-1 rounded-md font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
          </div>
         
      </section>
  )
}

export default Projects