'use client';

import { Github, ExternalLink } from 'lucide-react';


interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

export default function ProjectCard({ title, description, tags, links }: ProjectCardProps) {
  return (
    <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-6 relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <div className="flex gap-3 text-slate-400">
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
            {links.demo && (
              <a href={links.demo} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-cyan-200 border border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
