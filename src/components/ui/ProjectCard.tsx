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
    <div className="group flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-foreground/20 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <div className="flex gap-3 text-muted">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label={`${title} on GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label={`${title} demo`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-muted mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md bg-background border border-border text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
