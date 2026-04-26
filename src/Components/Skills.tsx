import React from 'react'
import { Code2 } from 'lucide-react';
import { skills } from '../data';
const Skills = () => {
  return (
      <section className=" py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
            <Code2 className="text-blue-600" /> Technical Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((group) => (
              <div key={group.category} className="border-l-4 border-indigo-700/35 pl-4">
                <h3 className="font-semibold text-slate-500 uppercase text-sm tracking-widest mb-3">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map(item => (
                    <li key={item} className="text-slate-800 font-medium">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Skills