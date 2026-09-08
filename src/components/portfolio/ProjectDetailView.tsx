import React from 'react';
import { ArrowLeft, Building2, CheckCircle2, Cpu, User } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack,
}) => {
  const getGradientClass = (category: string) => {
    switch (category) {
      case 'Data Analytics':
        return 'gradient-analytics';
      case 'Web Development':
      case 'Product Development':
        return 'gradient-web';
      case 'UI/UX & Product Design':
      case 'UI/UX Design / Product Design / Mobile Application':
      case 'Digital Product':
        return 'gradient-design';
      default:
        return 'gradient-default';
    }
  };

  return (
    <div className="project-detail-view">
      <div className="detail-top-bar">
        <button
          className="back-button"
          onClick={onBack}
          aria-label="Back to projects"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </button>
        <span className="project-tag">{project.category}</span>
      </div>

      <div className="detail-header-card">
        <div className={`detail-banner ${getGradientClass(project.category)}`}>
          <span className="detail-banner-letter">{project.title.slice(0, 1)}</span>
        </div>
        <div className="detail-header-info">
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.description}</p>

          {(project.role || project.organization) && (
            <div className="meta-badges">
              {project.organization && (
                <div className="meta-badge">
                  <Building2 size={14} />
                  <span>{project.organization}</span>
                </div>
              )}
              {project.role && (
                <div className="meta-badge">
                  <User size={14} />
                  <span>{project.role}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {project.highlights && project.highlights.length > 0 && (
        <div className="detail-section">
          <h3 className="section-title">Key Highlights & Outcomes</h3>
          <ul className="detail-highlights">
            {project.highlights.map((highlight, idx) => (
              <li key={idx}>
                <CheckCircle2 size={15} className="highlight-bullet" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="detail-section">
        <h3 className="section-title">
          <Cpu size={15} style={{ display: 'inline', marginRight: 6 }} />
          Technologies & Methods
        </h3>
        <div className="detail-tech-grid">
          {project.technologies.map((tech) => (
            <span key={tech} className="detail-tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
