import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Folder,
  Layers,
  Sparkles,
} from 'lucide-react';
import type { Project } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

export const ProjectsApp: React.FC = () => {
  const { t, data } = useLanguage();
  const projects = data?.projects || [];
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || 'asus-fits-for-u');
  const [mobileShowDetail, setMobileShowDetail] = useState<boolean>(false);

  const selectedProject: Project =
    projects.find((p) => p.id === selectedProjectId) || projects[0];

  React.useEffect(() => {
    const handleOpenProject = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedProjectId(customEvent.detail);
        setMobileShowDetail(true);
      }
    };
    window.addEventListener('select-portfolio-project', handleOpenProject);
    return () => {
      window.removeEventListener('select-portfolio-project', handleOpenProject);
    };
  }, []);

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
    setMobileShowDetail(true);
  };

  const visitUrl = selectedProject.visitUrl || selectedProject.externalUrl || selectedProject.links?.live;

  return (
    <div className={`macx-finder-layout ${mobileShowDetail ? 'mobile-detail-active' : 'mobile-list-active'}`}>
      {/* Finder Left Sidebar / Mobile List View */}
      <aside className="macx-finder-sidebar">
        <div className="sidebar-group-title">{t('desktop.projects')} ({projects.length})</div>
        <nav className="sidebar-nav">
          {projects.map((p) => {
            const isSelected = p.id === selectedProjectId;
            return (
              <button
                key={p.id}
                className={`sidebar-item ${isSelected ? 'active' : ''}`}
                onClick={() => handleSelectProject(p.id)}
              >
                <Folder size={16} className="sidebar-folder-icon" />
                <div className="sidebar-item-text">
                  <span className="sidebar-item-label">{p.title}</span>
                  <span className="sidebar-item-category">{p.category}</span>
                </div>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Finder Main Content / Breadcrumb & Project Canvas */}
      <section className="macx-finder-main">
        {/* Breadcrumb Header */}
        <div className="finder-breadcrumb-bar">
          <div className="breadcrumb-trail">
            {/* Mobile Back button */}
            <button
              className="finder-mobile-back-btn"
              onClick={() => setMobileShowDetail(false)}
              aria-label="Back to projects list"
            >
              <ArrowLeft size={14} />
              <span>{t('desktop.projects')}</span>
            </button>

            <span className="bc-dim bc-desktop-only">User</span>
            <span className="bc-sep bc-desktop-only">/</span>
            <span className="bc-dim bc-desktop-only">{t('desktop.projects')}</span>
            <span className="bc-sep bc-desktop-only">/</span>
            <span className="bc-active">{selectedProject.title}</span>
          </div>

          <div className="finder-actions">
            {visitUrl && (
              <a
                className="visit-site-btn"
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit project article or live site"
              >
                <span>{t('projects.visit')} ↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Detail Canvas */}
        <div className="finder-project-canvas">
          {/* Main Title & Lead Description */}
          <header className="project-detail-header-block">
            <h1 className="project-detail-main-title">{selectedProject.title}</h1>
            {selectedProject.subtitle && (
              <p className="project-detail-subtitle" style={{ fontSize: '13px', fontWeight: 600, color: '#2563eb', margin: '2px 0 6px 0' }}>
                {selectedProject.subtitle}
              </p>
            )}
            <p className="project-lead-desc">{selectedProject.description}</p>
          </header>

          {/* 2-Column Metadata Grid */}
          <div className="project-meta-grid">
            <div className="meta-box">
              <span className="meta-label">{t('projects.category')}</span>
              <span className="meta-value">{selectedProject.category}</span>
            </div>
            <div className="meta-box">
              <span className="meta-label">{t('projects.techStack')}</span>
              <span className="meta-value">
                {selectedProject.tools ? selectedProject.tools.join(' · ') : (selectedProject.technologies[0] || 'Figma')}
              </span>
            </div>
          </div>

          {/* Subtle Technology List */}
          {selectedProject.technologies && selectedProject.technologies.length > 0 && (
            <div className="project-tech-subline">
              <span>{selectedProject.technologies.join(' · ')}</span>
            </div>
          )}

          {/* Real Project Cover Image */}
          {(selectedProject.coverImage || selectedProject.image) && (
            <div className="project-detail-cover-box">
              <img
                src={selectedProject.coverImage || selectedProject.image}
                alt={selectedProject.title}
                className="project-detail-cover-img"
              />
            </div>
          )}

          {/* Case Study Content Flow */}
          {selectedProject.caseStudy ? (
            <div className="project-case-study-flow">
              {/* 1. Overview */}
              {selectedProject.caseStudy.overview && (
                <section className="project-study-section">
                  <div className="project-study-header">
                    <h2 className="project-study-heading">{selectedProject.caseStudy.overview.heading || 'Overview'}</h2>
                    {selectedProject.caseStudy.overview.subheading && (
                      <span className="project-study-subheading">{selectedProject.caseStudy.overview.subheading}</span>
                    )}
                  </div>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.overview.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>

                  {/* Visual Workflow Steps (if provided) */}
                  {selectedProject.caseStudy.overview.workflowSteps && (
                    <div className="project-flow-steps-wrap">
                      <div className="project-flow-steps">
                        {selectedProject.caseStudy.overview.workflowSteps.map((step, sIdx, arr) => (
                          <React.Fragment key={step}>
                            <span className="project-flow-pill">{step}</span>
                            {sIdx < arr.length - 1 && (
                              <ArrowRight size={13} className="text-slate-400 flex-shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* 2. The Problem (UI/UX Case Study) */}
              {selectedProject.caseStudy.problem && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.problem.heading || 'The Problem'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.problem.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                  {selectedProject.caseStudy.problem.questions && selectedProject.caseStudy.problem.questions.length > 0 && (
                    <div className="project-challenge-grid">
                      {selectedProject.caseStudy.problem.questions.map((q, idx) => (
                        <div key={idx} className="project-challenge-card">
                          <div className="challenge-card-dot" style={{ background: '#e11d48' }} />
                          <div className="challenge-card-text">
                            <p className="challenge-card-desc" style={{ color: '#0f172a', fontWeight: 500 }}>{q}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* 3. Design Goal */}
              {selectedProject.caseStudy.designGoal && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.designGoal.heading || 'Design Goal'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.designGoal.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                  {selectedProject.caseStudy.designGoal.journeySteps && (
                    <div className="project-flow-steps-wrap">
                      <div className="project-flow-steps">
                        {selectedProject.caseStudy.designGoal.journeySteps.map((step, sIdx, arr) => (
                          <React.Fragment key={step}>
                            <span className="project-flow-pill">{step}</span>
                            {sIdx < arr.length - 1 && (
                              <ArrowRight size={13} className="text-slate-400 flex-shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* 4. User Journey (From Inspiration to Home) */}
              {selectedProject.caseStudy.userJourney && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.userJourney.heading || 'From Inspiration to Home'}</h2>
                  <div className="project-process-grid">
                    {selectedProject.caseStudy.userJourney.steps.map((step) => (
                      <div key={step.step} className="project-process-card">
                        <div className="process-card-badge">{step.step}</div>
                        <h4 className="process-card-title">{step.title}</h4>
                        <p className="process-card-desc">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 5. Target Experience / Designing for Mobile-First */}
              {selectedProject.caseStudy.targetExperience && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.targetExperience.heading || 'Designing for a Mobile-First Audience'}</h2>
                  {selectedProject.caseStudy.targetExperience.intro && (
                    <div className="project-study-content">
                      {selectedProject.caseStudy.targetExperience.intro.split('\n\n').map((para, i) => (
                        <p key={i} className="project-study-paragraph">{para}</p>
                      ))}
                    </div>
                  )}
                  {selectedProject.caseStudy.targetExperience.items && (
                    <div className="project-challenge-grid">
                      {selectedProject.caseStudy.targetExperience.items.map((item, idx) => (
                        <div key={idx} className="project-challenge-card">
                          <div className="challenge-card-dot" style={{ background: '#3b82f6' }} />
                          <div className="challenge-card-text">
                            <h4 className="challenge-card-title">{item.title}</h4>
                            <p className="challenge-card-desc">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* 6. Design Process (From Idea to Interface) */}
              {selectedProject.caseStudy.designProcess && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.designProcess.heading || 'From Idea to Interface'}</h2>
                  <div className="project-process-grid">
                    {selectedProject.caseStudy.designProcess.steps.map((step) => (
                      <div key={step.step} className="project-process-card">
                        <div className="process-card-badge">{step.step}</div>
                        <h4 className="process-card-title">{step.title}</h4>
                        <p className="process-card-desc">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 7. Information Architecture */}
              {selectedProject.caseStudy.informationArchitecture && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.informationArchitecture.heading || 'Structuring the Experience'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.informationArchitecture.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                  {selectedProject.caseStudy.informationArchitecture.moments && (
                    <div className="project-challenge-grid">
                      {selectedProject.caseStudy.informationArchitecture.moments.map((m, mIdx) => (
                        <div key={mIdx} className="project-challenge-card">
                          <div className="challenge-card-dot" style={{ background: '#8b5cf6' }} />
                          <div className="challenge-card-text">
                            <h4 className="challenge-card-title">{m.title}</h4>
                            <p className="challenge-card-desc">{m.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {selectedProject.caseStudy.informationArchitecture.concludingNote && (
                    <div className="project-process-note">
                      <p>{selectedProject.caseStudy.informationArchitecture.concludingNote}</p>
                    </div>
                  )}
                </section>
              )}

              {/* 8. Furniture Discovery (Shopping Experience with Image) */}
              {selectedProject.caseStudy.shoppingExperience && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.shoppingExperience.heading || 'Furniture Discovery'}</h2>
                  {selectedProject.caseStudy.shoppingExperience.image && (
                    <div className="project-feature-img-wrap" style={{ marginBottom: '14px' }}>
                      <img
                        src={selectedProject.caseStudy.shoppingExperience.image}
                        alt={selectedProject.caseStudy.shoppingExperience.imageAlt || 'Furniture Discovery'}
                        className="project-feature-img"
                      />
                    </div>
                  )}
                  <div className="project-study-content">
                    {selectedProject.caseStudy.shoppingExperience.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* 9. Beyond Individual Products (Visualization Experience with Image) */}
              {selectedProject.caseStudy.visualizationExperience && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.visualizationExperience.heading || 'Beyond Individual Products'}</h2>
                  {selectedProject.caseStudy.visualizationExperience.image && (
                    <div className="project-feature-img-wrap" style={{ marginBottom: '14px' }}>
                      <img
                        src={selectedProject.caseStudy.visualizationExperience.image}
                        alt={selectedProject.caseStudy.visualizationExperience.imageAlt || 'Beyond Individual Products'}
                        className="project-feature-img"
                      />
                    </div>
                  )}
                  <div className="project-study-content">
                    {selectedProject.caseStudy.visualizationExperience.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* 10. Designing the Space (Interior Design Experience with Image) */}
              {selectedProject.caseStudy.designExperience && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.designExperience.heading || 'Designing the Space'}</h2>
                  {selectedProject.caseStudy.designExperience.image && (
                    <div className="project-feature-img-wrap" style={{ marginBottom: '14px' }}>
                      <img
                        src={selectedProject.caseStudy.designExperience.image}
                        alt={selectedProject.caseStudy.designExperience.imageAlt || 'Designing the Space'}
                        className="project-feature-img"
                      />
                    </div>
                  )}
                  <div className="project-study-content">
                    {selectedProject.caseStudy.designExperience.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* AI Advisor Experience (with image) */}
              {selectedProject.caseStudy.aiAdvisorExperience && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.aiAdvisorExperience.heading || 'AI as a Product Advisor'}</h2>
                  {selectedProject.caseStudy.aiAdvisorExperience.image && (
                    <div className="project-feature-img-wrap" style={{ marginBottom: '14px' }}>
                      <img
                        src={selectedProject.caseStudy.aiAdvisorExperience.image}
                        alt={selectedProject.caseStudy.aiAdvisorExperience.imageAlt || 'AI Advisor Experience'}
                        className="project-feature-img"
                      />
                    </div>
                  )}
                  <div className="project-study-content">
                    {selectedProject.caseStudy.aiAdvisorExperience.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* Product Discovery Experience (with image) */}
              {selectedProject.caseStudy.productDiscoveryExperience && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.productDiscoveryExperience.heading || 'Turning Needs into Recommendations'}</h2>
                  {selectedProject.caseStudy.productDiscoveryExperience.image && (
                    <div className="project-feature-img-wrap" style={{ marginBottom: '14px' }}>
                      <img
                        src={selectedProject.caseStudy.productDiscoveryExperience.image}
                        alt={selectedProject.caseStudy.productDiscoveryExperience.imageAlt || 'Turning Needs into Recommendations'}
                        className="project-feature-img"
                      />
                    </div>
                  )}
                  <div className="project-study-content">
                    {selectedProject.caseStudy.productDiscoveryExperience.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* Development Process (From Product Idea to Working Application) */}
              {selectedProject.caseStudy.developmentProcess && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.developmentProcess.heading || 'From Product Idea to Working Application'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.developmentProcess.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                  {selectedProject.caseStudy.developmentProcess.disciplines && (
                    <div className="project-challenge-grid">
                      {selectedProject.caseStudy.developmentProcess.disciplines.map((item, idx) => (
                        <div key={idx} className="project-challenge-card">
                          <div className="challenge-card-dot" style={{ background: '#2563eb' }} />
                          <div className="challenge-card-text">
                            <h4 className="challenge-card-title">{item.title}</h4>
                            <p className="challenge-card-desc">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* Vibe Coding */}
              {selectedProject.caseStudy.vibeCoding && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.vibeCoding.heading || 'Building Through Vibe Coding'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.vibeCoding.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                  {selectedProject.caseStudy.vibeCoding.workflowSteps && (
                    <div className="project-flow-steps-wrap">
                      <div className="project-flow-steps">
                        {selectedProject.caseStudy.vibeCoding.workflowSteps.map((step, sIdx, arr) => (
                          <React.Fragment key={step}>
                            <span className="project-flow-pill">{step}</span>
                            {sIdx < arr.length - 1 && (
                              <ArrowRight size={13} className="text-slate-400 flex-shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedProject.caseStudy.vibeCoding.concludingNote && (
                    <div className="project-study-content" style={{ marginTop: '12px' }}>
                      {selectedProject.caseStudy.vibeCoding.concludingNote.split('\n\n').map((para, i) => (
                        <p key={i} className="project-study-paragraph">{para}</p>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* Technical Architecture / The Product Behind the Interface */}
              {selectedProject.caseStudy.technicalArchitecture && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.technicalArchitecture.heading || 'The Product Behind the Interface'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.technicalArchitecture.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                  {selectedProject.caseStudy.technicalArchitecture.tags && (
                    <div className="project-challenge-grid">
                      {selectedProject.caseStudy.technicalArchitecture.tags.map((group, idx) => (
                        <div key={idx} className="project-challenge-card">
                          <div className="challenge-card-dot" style={{ background: '#0ea5e9' }} />
                          <div className="challenge-card-text">
                            <h4 className="challenge-card-title">{group.category}</h4>
                            <p className="challenge-card-desc" style={{ fontWeight: 500, color: '#0f172a' }}>
                              {group.items.join(' · ')}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* 11. Feature Showcases (Image Storytelling) */}
              {selectedProject.caseStudy.featureShowcases && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.featureShowcases.heading || 'The Product Experience'}</h2>
                  {selectedProject.caseStudy.featureShowcases.intro && (
                    <p className="project-study-intro">{selectedProject.caseStudy.featureShowcases.intro}</p>
                  )}
                  <div className="project-features-list">
                    {selectedProject.caseStudy.featureShowcases.features.map((feat, fIdx) => (
                      <div key={fIdx} className="project-feature-card">
                        <div className="project-feature-text">
                          <h4 className="project-feature-title">{feat.title}</h4>
                          <p className="project-feature-desc">{feat.description}</p>
                        </div>
                        {(feat.image || feat.video) && (
                          <div className="project-feature-img-wrap">
                            {feat.video ? (
                              <video
                                controls
                                playsInline
                                preload="metadata"
                                poster={feat.image}
                                className="project-feature-img"
                              >
                                <source src={feat.video} type="video/mp4" />
                              </video>
                            ) : (
                              <img src={feat.image} alt={feat.imageAlt || feat.title} className="project-feature-img" />
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 12. Key Design Decisions */}
              {selectedProject.caseStudy.designDecisions && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.designDecisions.heading || 'Key Design Decisions'}</h2>
                  <div className="project-challenge-grid">
                    {selectedProject.caseStudy.designDecisions.items.map((item, idx) => (
                      <div key={idx} className="project-challenge-card">
                        <div className="challenge-card-dot" style={{ background: '#0284c7' }} />
                        <div className="challenge-card-text">
                          <h4 className="challenge-card-title">{item.title}</h4>
                          <p className="challenge-card-desc">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 13. Visual Direction */}
              {selectedProject.caseStudy.visualDirection && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.visualDirection.heading || 'Visual Direction'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.visualDirection.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* 14. The Final Experience */}
              {selectedProject.caseStudy.finalExperience && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.finalExperience.heading || 'The Final Experience'}</h2>
                  {selectedProject.caseStudy.finalExperience.image && (
                    <div className="project-feature-img-wrap" style={{ marginBottom: '14px' }}>
                      <img
                        src={selectedProject.caseStudy.finalExperience.image}
                        alt={selectedProject.caseStudy.finalExperience.imageAlt || 'The Final Experience'}
                        className="project-feature-img"
                      />
                    </div>
                  )}
                  <div className="project-study-content">
                    {selectedProject.caseStudy.finalExperience.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* 15. The Challenge (Data Case Studies) */}
              {selectedProject.caseStudy.challenge && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.challenge.heading || 'The Challenge'}</h2>
                  {selectedProject.caseStudy.challenge.intro && (
                    <p className="project-study-intro">{selectedProject.caseStudy.challenge.intro}</p>
                  )}
                  {selectedProject.caseStudy.challenge.content && (
                    <div className="project-study-content">
                      {selectedProject.caseStudy.challenge.content.split('\n\n').map((para, i) => (
                        <p key={i} className="project-study-paragraph">{para}</p>
                      ))}
                    </div>
                  )}
                  {selectedProject.caseStudy.challenge.items && selectedProject.caseStudy.challenge.items.length > 0 && (
                    <div className="project-challenge-grid">
                      {selectedProject.caseStudy.challenge.items.map((item, idx) => (
                        <div key={idx} className="project-challenge-card">
                          <div className="challenge-card-dot" />
                          <div className="challenge-card-text">
                            <h4 className="challenge-card-title">{item.title}</h4>
                            <p className="challenge-card-desc">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* 16. Data Foundation — Python & Synthetic Data */}
              {selectedProject.caseStudy.dataFoundation && (
                <section className="project-study-section">
                  <div className="project-study-header">
                    <h2 className="project-study-heading">{selectedProject.caseStudy.dataFoundation.heading || 'Building the Data Foundation'}</h2>
                    {selectedProject.caseStudy.dataFoundation.subheading && (
                      <span className="project-study-subheading">{selectedProject.caseStudy.dataFoundation.subheading}</span>
                    )}
                  </div>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.dataFoundation.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* 17. Data Engineering — MySQL */}
              {selectedProject.caseStudy.dataEngineering && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.dataEngineering.heading || 'Engineering the Data Warehouse'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.dataEngineering.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                  {selectedProject.caseStudy.dataEngineering.formula && (
                    <div className="project-formula-card">
                      <div className="formula-label">{selectedProject.caseStudy.dataEngineering.formula.label}</div>
                      <div className="formula-code">{selectedProject.caseStudy.dataEngineering.formula.formula}</div>
                      {selectedProject.caseStudy.dataEngineering.formula.explanation && (
                        <p className="formula-explanation">{selectedProject.caseStudy.dataEngineering.formula.explanation}</p>
                      )}
                    </div>
                  )}
                </section>
              )}

              {/* 18. Data Pipeline / Live Connection */}
              {selectedProject.caseStudy.pipeline && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.pipeline.heading || 'From Database to Live Dashboard'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.pipeline.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                  {selectedProject.caseStudy.pipeline.flow && (
                    <div className="project-flow-steps-wrap">
                      <div className="project-flow-steps">
                        {selectedProject.caseStudy.pipeline.flow.map((node, nIdx, arr) => (
                          <React.Fragment key={node}>
                            <span className="project-flow-pill">{node}</span>
                            {nIdx < arr.length - 1 && (
                              <ArrowRight size={13} className="text-slate-400 flex-shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* 19. Data Preparation */}
              {selectedProject.caseStudy.dataPreparation && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.dataPreparation.heading || 'Data Preparation'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.dataPreparation.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* 20. Metric Development */}
              {selectedProject.caseStudy.metricDevelopment && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.metricDevelopment.heading || 'Metric Development'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.metricDevelopment.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* 21. Dashboard Design */}
              {selectedProject.caseStudy.dashboardDesign && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.dashboardDesign.heading || 'Dashboard Design'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.dashboardDesign.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                  {selectedProject.caseStudy.dashboardDesign.principles && (
                    <div className="project-challenge-grid">
                      {selectedProject.caseStudy.dashboardDesign.principles.map((pr, pIdx) => (
                        <div key={pIdx} className="project-challenge-card">
                          <div className="challenge-card-dot" style={{ background: '#3b82f6' }} />
                          <div className="challenge-card-text">
                            <h4 className="challenge-card-title">{pr.title}</h4>
                            <p className="challenge-card-desc">{pr.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {selectedProject.caseStudy.dashboardDesign.additionalNote && (
                    <div className="project-process-note">
                      <p>{selectedProject.caseStudy.dashboardDesign.additionalNote}</p>
                    </div>
                  )}
                </section>
              )}

              {/* 22. The Final Dashboard */}
              {selectedProject.caseStudy.finalDashboard && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.finalDashboard.heading || 'The Final Dashboard'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.finalDashboard.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                  {selectedProject.caseStudy.finalDashboard.visualizations && (
                    <div className="project-challenge-grid">
                      {selectedProject.caseStudy.finalDashboard.visualizations.map((vis, vIdx) => (
                        <div key={vIdx} className="project-challenge-card">
                          <div className="challenge-card-dot" style={{ background: '#10b981' }} />
                          <div className="challenge-card-text">
                            <h4 className="challenge-card-title">{vis.title}</h4>
                            <p className="challenge-card-desc">{vis.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {selectedProject.caseStudy.finalDashboard.additionalNote && (
                    <div className="project-process-note">
                      <p>{selectedProject.caseStudy.finalDashboard.additionalNote}</p>
                    </div>
                  )}
                </section>
              )}

              {/* 23. Performance Snapshot */}
              {selectedProject.caseStudy.performanceSnapshot && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.performanceSnapshot.heading || 'Performance Snapshot'}</h2>
                  {selectedProject.caseStudy.performanceSnapshot.metrics && (
                    <div className="project-insights-grid">
                      {selectedProject.caseStudy.performanceSnapshot.metrics.map((ins, idx) => (
                        <div key={idx} className="project-insight-card">
                          <div className="insight-card-val">{ins.value}</div>
                          <h4 className="insight-card-label">{ins.label}</h4>
                          <p className="insight-card-desc">{ins.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {selectedProject.caseStudy.performanceSnapshot.content && (
                    <div className="project-study-content" style={{ marginTop: '8px' }}>
                      {selectedProject.caseStudy.performanceSnapshot.content.split('\n\n').map((para, i) => (
                        <p key={i} className="project-study-paragraph">{para}</p>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* 24. Sales Trend */}
              {selectedProject.caseStudy.salesTrend && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.salesTrend.heading || 'Sales Trend'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.salesTrend.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* 25. Device Performance */}
              {selectedProject.caseStudy.devicePerformance && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.devicePerformance.heading || 'Device Performance'}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.devicePerformance.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                </section>
              )}

              {/* 26. The Cleaning Process Steps (if present) */}
              {selectedProject.caseStudy.processSteps && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.processSteps.heading || 'The Cleaning Process'}</h2>
                  <div className="project-process-grid">
                    {selectedProject.caseStudy.processSteps.steps.map((step) => (
                      <div key={step.step} className="project-process-card">
                        <div className="process-card-badge">{step.step}</div>
                        <h4 className="process-card-title">{step.title}</h4>
                        <p className="process-card-desc">{step.description}</p>
                      </div>
                    ))}
                  </div>
                  {selectedProject.caseStudy.processSteps.additionalNote && (
                    <div className="project-process-note">
                      <p>{selectedProject.caseStudy.processSteps.additionalNote}</p>
                    </div>
                  )}
                </section>
              )}

              {/* 27. Before -> After (if present) */}
              {selectedProject.caseStudy.beforeAfter && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">Before → After</h2>
                  <div className="project-before-after-grid">
                    <div className="before-after-card before-card">
                      <div className="before-after-header">
                        <span className="before-after-badge badge-before">BEFORE</span>
                        <h4 className="before-after-title">{selectedProject.caseStudy.beforeAfter.before.title}</h4>
                      </div>
                      <ul className="before-after-list">
                        {selectedProject.caseStudy.beforeAfter.before.items.map((item, idx) => (
                          <li key={idx}>
                            <span className="bullet-before" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="before-after-card after-card">
                      <div className="before-after-header">
                        <span className="before-after-badge badge-after">AFTER</span>
                        <h4 className="before-after-title">{selectedProject.caseStudy.beforeAfter.after.title}</h4>
                      </div>
                      <ul className="before-after-list">
                        {selectedProject.caseStudy.beforeAfter.after.items.map((item, idx) => (
                          <li key={idx}>
                            <span className="bullet-after" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              )}

              {/* 28. Key Insights (if present) */}
              {selectedProject.caseStudy.insights && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.insights.heading || 'Key Insights'}</h2>
                  <div className="project-insights-grid">
                    {selectedProject.caseStudy.insights.items.map((ins, idx) => (
                      <div key={idx} className="project-insight-card">
                        {ins.number && <span className="insight-card-number">{ins.number}</span>}
                        <div className="insight-card-val">{ins.value}</div>
                        <h4 className="insight-card-label">{ins.label}</h4>
                        <p className="insight-card-desc">{ins.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 29. Additional Custom Structured Sections (e.g. Key Business Insights) */}
              {selectedProject.caseStudy.sections && selectedProject.caseStudy.sections.map((sec, sIdx) => (
                <section key={sIdx} className="project-study-section">
                  <h2 className="project-study-heading">{sec.heading}</h2>
                  {sec.intro && <p className="project-study-intro">{sec.intro}</p>}
                  {sec.content && (
                    <div className="project-study-content">
                      {sec.content.split('\n\n').map((para, i) => (
                        <p key={i} className="project-study-paragraph">{para}</p>
                      ))}
                    </div>
                  )}
                  {sec.items && (
                    <div className="project-challenge-grid">
                      {sec.items.map((item, idx) => (
                        <div key={idx} className="project-challenge-card">
                          <div className="challenge-card-dot" style={{ background: '#2563eb' }} />
                          <div className="challenge-card-text">
                            {item.title && <h4 className="challenge-card-title">{item.title}</h4>}
                            <p className="challenge-card-desc">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {/* Role Overview (My Role) */}
              {selectedProject.caseStudy.roleOverview && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.roleOverview.heading || 'My Role'}</h2>
                  {selectedProject.caseStudy.roleOverview.content && (
                    <div className="project-study-content">
                      {selectedProject.caseStudy.roleOverview.content.split('\n\n').map((para, i) => (
                        <p key={i} className="project-study-paragraph">{para}</p>
                      ))}
                    </div>
                  )}
                  {selectedProject.caseStudy.roleOverview.responsibilities && (
                    <div className="project-challenge-grid">
                      {selectedProject.caseStudy.roleOverview.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="project-challenge-card">
                          <div className="challenge-card-dot" style={{ background: '#10b981' }} />
                          <div className="challenge-card-text">
                            <p className="challenge-card-desc" style={{ color: '#0f172a', fontWeight: 500 }}>{resp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {selectedProject.caseStudy.roleOverview.concludingNote && (
                    <div className="project-study-content" style={{ marginTop: '12px' }}>
                      {selectedProject.caseStudy.roleOverview.concludingNote.split('\n\n').map((para, i) => (
                        <p key={i} className="project-study-paragraph">{para}</p>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* 30. Project Highlights */}
              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">Project Highlights</h2>
                  <div className="project-highlights-card">
                    <ul className="project-points-list">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i}>
                          <Layers size={14} className="point-icon" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {/* 31. Tools & Technologies */}
              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">Tools & Technologies</h2>
                  <div className="showcase-tech-tags">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="showcase-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* 32. Final Takeaway / Conclusion */}
              {selectedProject.caseStudy.conclusion && (
                <section className="project-study-section">
                  <h2 className="project-study-heading">{selectedProject.caseStudy.conclusion.heading}</h2>
                  <div className="project-study-content">
                    {selectedProject.caseStudy.conclusion.content.split('\n\n').map((para, i) => (
                      <p key={i} className="project-study-paragraph">{para}</p>
                    ))}
                  </div>
                </section>
              )}
            </div>
          ) : (
            <>
              {/* Fallback for projects without detailed case study */}
              {!selectedProject.coverImage && !selectedProject.image && (
                <div className="project-showcase-card">
                  <div className="showcase-banner-top">
                    <span className="showcase-badge">
                      <Sparkles size={13} />
                      {selectedProject.category}
                    </span>
                  </div>
                  <div className="showcase-card-body">
                    <h2>{selectedProject.title}</h2>
                    <div className="showcase-tech-tags">
                      {selectedProject.technologies.map((t) => (
                        <span key={t} className="showcase-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div className="project-section-block">
                  <h3>Key Highlights & Features</h3>
                  <ul className="project-points-list">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i}>
                        <Layers size={14} className="point-icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};
