import type { Project, SkillGroup } from './types'

export const projects: Project[] = [
  {
    title: "ATS Recruitment System",
    description: "A full-stack platform for managing candidates. Built with a custom Node.js backend and PostgreSQL.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redux"],
        projCategory: "FullStack",
    github: "https://resherif.github.io/ATS/",
    },
    {
      
    title: "E-Commerce Platform",
    description:
      "Storefront app with real-time product filtering, persistent cart via localStorage, custom auth validation, and mobile-first Tailwind UI. Migrated from JS to TypeScript with strict data modeling.",
    tags: ["React", "TypeScript", "Context API", "Tailwind CSS", "localStorage", "React Router"],
    projCategory: "Frontend",
    github: "https://e-commercee-website.netlify.app/",
  },
  {
    title: "Admin Analytics Dashboard",
    description: "High-performance dashboard featuring data visualization with Recharts and optimized state management.",
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "Recharts"],
      projCategory: "Frontend",
   github: "https://resherif.github.io/react-ts-admin-dashboard/",
    },
    {
      title: "Weather App",
    description:
      "Real-time weather lookup using a public API. Displays temperature, conditions, and location data with a clean, minimal interface.",
    tags: ["JavaScript", "REST API", "CSS"],
    projCategory: "Frontend",
    github: "https://resherif.github.io/Weather-app/",
    },
    {
      title: "Recipe Finder",
    description:
      "Search and browse recipes by ingredient or name. Integrates with a recipe API to fetch and display detailed cooking instructions.",
    tags: ["JavaScript", "CSS", "API Integration"],
    projCategory: "Frontend",
    github: "https://resherif.github.io/recipe-finder/",
    },
    {
      title: "Library Management System",
    description:
      "C++ console application for managing books, members, and borrowing records. Applies data structures and encapsulation for efficient record-keeping.",
    tags: ["C++", "OOP", "Data Structures", "File I/O","Design Patterns"],
    projCategory: "System Design",
    github: "https://github.com/resherif/LibraryManagementSystem",
  },
  {
    title: "Hospital Management Systems",
    description: "Hospital  management system focusing on OOP and Data Structures.",
    tags: ["C++", "OOP", "DSA","File I/O","Design Patterns"],
      projCategory: "System Design",
      github: "https://github.com/resherif/Hospital-management-system",
    }
  
];
export const categories = [
  { key: "all", label: "All" },
  { key: "FullStack", label: "FullStack" },
  { key: "Frontend", label: "Frontend" },
  { key: "System Design", label: "System Design" },
];

export const skills: SkillGroup[] = [
  { category: "Frontend", items: ["React", "TypeScript", "Redux Toolkit", "Tailwind"] },
  { category: "Core CS", items: ["DSA", "OOP", "Design Patterns", "Software Testing"] },
  { category: "Tools & Backend", items: ["Node.js", "PostgreSQL", "Git", "Vite"] }
];