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
        <div >
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={` ${active === cat.key ?"bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setActive(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((project) => (
            <div key={project.title} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-tighter bg-blue-50 px-2 py-1 rounded">
                  {project.projCategory}
                </span>
              <a href={project.github} target="_blank" rel="noopener noreferrer">   <ExternalLink size={18} className="text-slate-400"/></a>
                
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
          </div>
          <Skills />
      </section>
  )
}

export default Projects