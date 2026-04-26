import React from 'react';
import { GraduationCap, History } from 'lucide-react';

const education = [
  {
    title: "Academic Diploma in Software Engineering",
    sub: "Helwan University · Expected Sep 2026",
    primary: true,
  },
  {
    title: "Bachelor of Commerce",
    sub: "Ain Shams University",
    primary: false,
  },
];

const background = [
  "Strong C++ & OOP foundation with academic systems projects",
  "Self-driven path: C++ → React → PostgreSQL → Redux Toolkit → Node.js",
  "Expanding into full-stack MERN development",
];

export default function About() {
  return (
    <section id="About" className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Education & Background</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 text-blue-600">
              <GraduationCap size={24} /> Education
            </h3>
            {education.map((e) => (
              <div key={e.title} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all">
                <p className="font-bold text-slate-800">{e.title}</p>
                <p className="text-slate-500 text-sm mt-1">{e.sub}</p>
              </div>
            ))}
          </div>

          {/* Background Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 text-blue-600">
              <History size={24} /> Professional Journey
            </h3>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-full">
              <ul className="space-y-4">
                {background.map((b, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}