import React from 'react';
import { Briefcase, Building2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const ExperienceApp: React.FC = () => {
  const { t, data } = useLanguage();
  const { experiences } = data;

  return (
    <div className="content-panel experience-panel">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">{t('experience.title')}</span>
          <h1>{t('experience.roles')}</h1>
        </div>
        <span className="project-count">{experiences.length} positions</span>
      </div>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <article key={exp.company} className="experience-card">
            <div className="experience-header">
              <div className="experience-title-group">
                <div className="experience-icon-wrap">
                  {index === 0 ? <Building2 size={18} /> : <Briefcase size={18} />}
                </div>
                <div>
                  <h2>{exp.company}</h2>
                  <span className="experience-role">{exp.role}</span>
                </div>
              </div>
            </div>

            <ul className="experience-highlights">
              {exp.highlights.map((highlight, hIdx) => (
                <li key={hIdx}>
                  <CheckCircle2 size={14} className="highlight-bullet" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};
