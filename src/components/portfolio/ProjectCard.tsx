import React from 'react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getGradientClass = (category: string) => {
    switch (category) {
      case 'Data Analytics':
        return 'gradient-analytics';
      case 'Web Development':
        return 'gradient-web';
      case 'UI/UX & Product Design':
        return 'gradient-design';
      default:
        return 'gradient-default';
    }
  };

  return (
    <article
      className="project-card project-card-interactive"
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      <div className={`project-thumb ${getGradientClass(project.category)}`}>
        <span>{project.title.slice(0, 1)}</span>
      </div>
      <div>
        <span className="project-tag">{project.category}</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="project-card-tech">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-badge-more">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
