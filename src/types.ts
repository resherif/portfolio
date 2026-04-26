export interface Project {
  title: string;
  description: string;
  tags: string[];
    link?: string;
    github: string; 
   projCategory: 'FullStack' | 'Frontend' | 'System Design';
}

export interface SkillGroup {
  category: string;
  items: string[];
}
