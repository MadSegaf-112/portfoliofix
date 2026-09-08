import React from 'react';
import {
  ArrowRight,
  Award,
  BarChart2,
  BarChart3,
  BookOpen,
  Brain,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Crown,
  ExternalLink,
  FileText,
  HeartHandshake,
  Layers,
  Layout,
  LayoutDashboard,
  Lightbulb,
  Mail,
  Megaphone,
  MonitorSmartphone,
  Network,
  Rocket,
  Sparkles,
  Telescope,
} from 'lucide-react';
import type { AppId } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface AboutAppProps {
  onSelectWindow: (id: AppId) => void;
}

// Visual Placeholder Cover Art for Projects
const ProjectCoverPlaceholder: React.FC<{ type: string; title: string }> = ({
  type,
  title,
}) => {
  switch (type) {
    case 'analytics':
      return (
        <div className="project-placeholder-art bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950">
          <svg className="w-full h-full" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="blueBarGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="emeraldBarGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            <line x1="20" y1="30" x2="220" y2="30" stroke="#334155" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
            <line x1="20" y1="60" x2="220" y2="60" stroke="#334155" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
            <line x1="20" y1="90" x2="220" y2="90" stroke="#334155" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
            <line x1="20" y1="120" x2="220" y2="120" stroke="#475569" strokeWidth="1" opacity="0.6" />
            
            <rect x="35" y="70" width="16" height="50" rx="3" fill="url(#blueBarGrad)" opacity="0.85" />
            <rect x="65" y="45" width="16" height="75" rx="3" fill="url(#blueBarGrad)" />
            <rect x="95" y="80" width="16" height="40" rx="3" fill="url(#blueBarGrad)" opacity="0.75" />
            <rect x="125" y="38" width="16" height="82" rx="3" fill="url(#emeraldBarGrad)" />
            <rect x="155" y="55" width="16" height="65" rx="3" fill="url(#blueBarGrad)" opacity="0.9" />
            <rect x="185" y="30" width="16" height="90" rx="3" fill="url(#emeraldBarGrad)" />
            
            <path d="M 43 65 Q 103 40 133 32 T 193 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
            <circle cx="133" cy="32" r="3" fill="#fbbf24" />
            <circle cx="193" cy="24" r="3" fill="#fbbf24" />
            
            <rect x="25" y="10" width="68" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="0.8" />
            <text x="59" y="21" fill="#38bdf8" fontSize="8.5" fontWeight="600" textAnchor="middle">CTR +4.8%</text>
          </svg>
        </div>
      );

    case 'dashboard':
      return (
        <div className="project-placeholder-art bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
          <svg className="w-full h-full" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="18" y="16" width="90" height="50" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8" />
            <text x="28" y="32" fill="#94a3b8" fontSize="7.5" fontWeight="500">Conversions</text>
            <text x="28" y="52" fill="#f8fafc" fontSize="14" fontWeight="700">12,480</text>
            <rect x="76" y="40" width="24" height="12" rx="3" fill="#065f46" />
            <text x="88" y="49" fill="#34d399" fontSize="7" fontWeight="600" textAnchor="middle">+18%</text>
            
            <rect x="118" y="16" width="104" height="108" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8" />
            <circle cx="170" cy="58" r="26" stroke="#334155" strokeWidth="8" fill="none" />
            <circle cx="170" cy="58" r="26" stroke="#3b82f6" strokeWidth="8" strokeDasharray="95 180" strokeDashoffset="20" fill="none" />
            <circle cx="170" cy="58" r="26" stroke="#10b981" strokeWidth="8" strokeDasharray="45 180" strokeDashoffset="125" fill="none" />
            <circle cx="170" cy="58" r="26" stroke="#f59e0b" strokeWidth="8" strokeDasharray="30 180" strokeDashoffset="175" fill="none" />
            <text x="170" y="61" fill="#ffffff" fontSize="9" fontWeight="700" textAnchor="middle">KPI</text>
            
            <text x="132" y="100" fill="#94a3b8" fontSize="7.5">Search</text>
            <text x="168" y="100" fill="#94a3b8" fontSize="7.5">Display</text>
            <text x="202" y="100" fill="#94a3b8" fontSize="7.5">Video</text>
            <circle cx="127" cy="98" r="2.5" fill="#3b82f6" />
            <circle cx="163" cy="98" r="2.5" fill="#10b981" />
            <circle cx="197" cy="98" r="2.5" fill="#f59e0b" />

            <rect x="18" y="74" width="90" height="50" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8" />
            <text x="28" y="90" fill="#94a3b8" fontSize="7.5" fontWeight="500">ROAS Target</text>
            <path d="M 28 114 L 45 105 L 62 108 L 80 98 L 98 94" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'express':
      return (
        <div className="project-placeholder-art bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950">
          <svg className="w-full h-full" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="16" width="200" height="108" rx="8" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
            
            <rect x="20" y="16" width="200" height="24" rx="8" fill="#1e293b" />
            <circle cx="34" cy="28" r="3.5" fill="#ef4444" />
            <circle cx="44" cy="28" r="3.5" fill="#f59e0b" />
            <circle cx="54" cy="28" r="3.5" fill="#10b981" />
            <text x="120" y="32" fill="#94a3b8" fontSize="8" fontWeight="600" textAnchor="middle">EXPRESS ANALYTICS ENGINE</text>

            <path d="M 30 85 L 55 75 L 80 90 L 105 60 L 130 70 L 155 48 L 180 58 L 205 45" fill="none" stroke="#06b6d4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 30 85 L 55 75 L 80 90 L 105 60 L 130 70 L 155 48 L 180 58 L 205 45 L 205 110 L 30 110 Z" fill="url(#cyanAreaGrad)" opacity="0.15" />
            
            <defs>
              <linearGradient id="cyanAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
              </linearGradient>
            </defs>

            <circle cx="185" cy="28" r="3" fill="#22c55e" />
            <text x="198" y="31" fill="#22c55e" fontSize="7" fontWeight="600">LIVE</text>
            
            <text x="35" y="112" fill="#64748b" fontSize="7.5">Latency: 18ms</text>
            <text x="165" y="112" fill="#64748b" fontSize="7.5">Throughput: 99.8%</text>
          </svg>
        </div>
      );

    case 'mobile':
      return (
        <div className="project-placeholder-art bg-gradient-to-br from-amber-950 via-slate-900 to-stone-900">
          <svg className="w-full h-full" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="76" y="8" width="88" height="124" rx="12" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
            <rect x="106" y="14" width="28" height="3" rx="1.5" fill="#64748b" />
            
            <text x="86" y="30" fill="#f8fafc" fontSize="8" fontWeight="700">FYP NEWS</text>
            <rect x="142" y="24" width="14" height="7" rx="2" fill="#ea580c" />
            <text x="149" y="29.5" fill="#ffffff" fontSize="5" fontWeight="700" textAnchor="middle">HOT</text>
            
            <rect x="84" y="36" width="72" height="42" rx="5" fill="#1e293b" />
            <rect x="88" y="40" width="64" height="22" rx="3" fill="#334155" />
            <rect x="88" y="66" width="50" height="4" rx="2" fill="#f1f5f9" />
            <rect x="88" y="72" width="36" height="3" rx="1.5" fill="#94a3b8" />
            
            <rect x="84" y="82" width="72" height="18" rx="4" fill="#1e293b" />
            <rect x="88" y="86" width="16" height="10" rx="2" fill="#475569" />
            <rect x="108" y="87" width="44" height="3.5" rx="1.5" fill="#e2e8f0" />
            <rect x="108" y="93" width="30" height="2.5" rx="1" fill="#94a3b8" />

            <rect x="84" y="104" width="72" height="18" rx="4" fill="#1e293b" />
            <rect x="88" y="108" width="16" height="10" rx="2" fill="#475569" />
            <rect x="108" y="109" width="44" height="3.5" rx="1.5" fill="#e2e8f0" />
            <rect x="108" y="115" width="26" height="2.5" rx="1" fill="#94a3b8" />
          </svg>
        </div>
      );

    case 'home':
      return (
        <div className="project-placeholder-art bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900">
          <svg className="w-full h-full" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="zenWoodGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
            </defs>
            
            <path d="M 120 28 L 205 72 L 120 116 L 35 72 Z" fill="#1c1917" stroke="#44403c" strokeWidth="1" />
            <path d="M 120 38 L 195 76 L 120 110 L 45 76 Z" stroke="#57534e" strokeWidth="0.8" strokeDasharray="3 3" fill="none" />
            
            <path d="M 100 68 L 130 52 L 150 62 L 120 78 Z" fill="url(#zenWoodGrad)" opacity="0.9" />
            <path d="M 100 68 L 120 78 L 120 86 L 100 76 Z" fill="#92400e" />
            <path d="M 150 62 L 120 78 L 120 86 L 150 70 Z" fill="#78350f" />
            
            <path d="M 75 75 L 90 67 L 102 73 L 87 81 Z" fill="#e7e5e4" />
            <line x1="87" y1="81" x2="87" y2="89" stroke="#e7e5e4" strokeWidth="1.5" />
            <line x1="75" y1="75" x2="75" y2="83" stroke="#e7e5e4" strokeWidth="1.5" />

            <text x="120" y="20" fill="#fbbf24" fontSize="8" fontWeight="600" textAnchor="middle">ZENHOME 3D CANVAS</text>
            <circle cx="120" cy="50" r="2" fill="#38bdf8" />
            <line x1="120" y1="50" x2="155" y2="40" stroke="#38bdf8" strokeWidth="0.8" />
            <text x="175" y="42" fill="#38bdf8" fontSize="6.5">Living Area</text>
          </svg>
        </div>
      );

    case 'wellness':
      return (
        <div className="project-placeholder-art bg-gradient-to-br from-emerald-950 via-teal-950 to-indigo-950">
          <svg className="w-full h-full" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="zenAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#0d9488" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#115e59" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="120" cy="68" r="54" fill="url(#zenAura)" />
            <circle cx="120" cy="68" r="42" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
            <circle cx="120" cy="68" r="28" stroke="#5eead4" strokeWidth="1.2" opacity="0.6" />
            <circle cx="120" cy="68" r="14" fill="#0f766e" stroke="#99f6e4" strokeWidth="1.5" />
            
            <circle cx="120" cy="68" r="4" fill="#ffffff" />
            
            <path d="M 30 70 Q 75 55 120 70 T 210 70" fill="none" stroke="#a7f3d0" strokeWidth="1.2" opacity="0.7" />
            <path d="M 30 70 Q 75 85 120 70 T 210 70" fill="none" stroke="#a7f3d0" strokeWidth="0.8" opacity="0.4" />

            <text x="120" y="24" fill="#5eead4" fontSize="8" fontWeight="600" textAnchor="middle">TENANG SEJENAK</text>
            <text x="120" y="118" fill="#99f6e4" fontSize="7.5" fontWeight="500" textAnchor="middle">Mindful Breathing & Balance</text>
          </svg>
        </div>
      );

    default:
      return (
        <div className="project-placeholder-art bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
          <span className="text-slate-400 font-semibold text-xs">{title}</span>
        </div>
      );
  }
};

export const AboutApp: React.FC<AboutAppProps> = ({ onSelectWindow }) => {
  const { t, data } = useLanguage();
  const {
    profile,
    services = [],
    projects = [],
    valueProps: valuePropositions = [],
    journeyStages = [],
    currentActivities = [],
    experiences = [],
    organizations = [],
    proudMoments = [],
    personalInterests = [],
    portfolioStats = [],
  } = data || {};
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'analysis':
        return BarChart3;
      case 'dashboard':
        return LayoutDashboard;
      case 'product':
        return MonitorSmartphone;
      default:
        return BarChart3;
    }
  };

  const getValuePropIcon = (iconName: string) => {
    switch (iconName) {
      case 'analyze':
        return BarChart3;
      case 'understand':
        return Brain;
      case 'build':
        return Code2;
      default:
        return Sparkles;
    }
  };

  const getJourneyIcon = (iconName: string) => {
    switch (iconName) {
      case 'systems':
        return Layers;
      case 'design':
        return Layout;
      case 'business':
        return Network;
      case 'analytics':
        return BarChart2;
      case 'ai':
        return Sparkles;
      default:
        return Lightbulb;
    }
  };

  const getOrgIcon = (orgId: string) => {
    switch (orgId) {
      case 'hima-ilkom':
        return Megaphone;
      case 'duta-fmipa':
        return Crown;
      case 'ppk-ormawa':
        return HeartHandshake;
      case 'al-husna':
        return BookOpen;
      default:
        return Award;
    }
  };

  const getActivityIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain':
        return BrainCircuit;
      case 'rocket':
        return Rocket;
      case 'telescope':
        return Telescope;
      case 'briefcase':
        return BriefcaseBusiness;
      default:
        return Sparkles;
    }
  };

  return (
    <div className="macx-about-container">
      {/* 1. Top Profile Intro Section (Personal Photo + Info) */}
      <div className="macx-about-header">
        <div className="macx-profile-photo-wrap">
          <img
            src="/images/MuhammadAssegaf.jpg"
            alt={profile.name}
            className="macx-profile-photo-img"
            loading="eager"
          />
        </div>

        <div className="macx-profile-intro">
          <h1 className="macx-profile-name">{profile.name}</h1>
          <h2 className="macx-profile-headline">{profile.role}</h2>
          <p className="macx-profile-bio">{profile.bio}</p>

          <div className="macx-status-row">
            <span className="macx-status-badge">
              <span className="macx-green-dot" />
              Available for opportunities
            </span>
          </div>

          <div className="macx-intro-divider" />

          <div className="macx-contact-handles">
            <a
              href={`mailto:${profile.email}`}
              className="macx-handle-link"
              title={`Email ${profile.email}`}
            >
              <Mail size={14} />
              <span>{profile.email}</span>
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="macx-handle-link"
              title="LinkedIn Profile"
            >
              <ExternalLink size={14} />
              <span>{profile.linkedin}</span>
            </a>
            {profile.resumeUrl && (
              <button
                type="button"
                onClick={() => onSelectWindow('resume')}
                className="macx-handle-link"
                title="Preview & Download CV (PDF)"
              >
                <FileText size={14} />
                <span>Resume (PDF)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. Services Section (3 Columns on Desktop) */}
      <div className="macx-section">
        <h2 className="macx-section-heading">{t('about.services')}</h2>
        <div className="macx-services-grid">
          {services.map((service) => {
            const IconComponent = getServiceIcon(service.iconName);
            return (
              <div key={service.id} className="macx-service-card">
                <div className="macx-service-icon-box">
                  <IconComponent size={20} className="text-slate-700" />
                </div>
                <h3 className="macx-service-title">{service.title}</h3>
                <p className="macx-service-desc">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. What I Bring to the Table (Analyze -> Understand -> Build Flow) */}
      <div className="macx-section">
        <div className="macx-section-header-block">
          <h2 className="macx-section-heading">{t('about.whatIDo')}</h2>
          <span className="macx-section-subheading">A problem-solving methodology bridging data, systems, and product execution.</span>
        </div>

        <div className="macx-value-flow-grid">
          {valuePropositions.map((item, index) => {
            const IconComp = getValuePropIcon(item.iconName);
            return (
              <React.Fragment key={item.id}>
                <div className="macx-value-card">
                  <div className="macx-value-card-header">
                    <div className="macx-value-icon-box">
                      <IconComp size={18} className="text-slate-800" />
                    </div>
                    <span className="macx-value-step">0{item.step}</span>
                  </div>
                  <h3 className="macx-value-title">{item.title}</h3>
                  <p className="macx-value-desc">{item.description}</p>
                </div>
                {index < valuePropositions.length - 1 && (
                  <div className="macx-value-arrow" aria-hidden="true">
                    <ArrowRight size={16} className="arrow-horizontal" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* 4. Selected Projects Section (3 Columns Visual Card Grid) */}
      <div className="macx-section">
        <div className="macx-section-header-row">
          <div>
            <h2 className="macx-section-heading">{t('projects.title')}</h2>
            <span className="macx-section-subheading">Authentic analytical dashboards, tools, and digital product designs.</span>
          </div>
          <button
            type="button"
            className="macx-section-action-link"
            onClick={() => onSelectWindow('projects')}
          >
            <span>{t('about.viewProjects')}</span>
            <ExternalLink size={12} />
          </button>
        </div>
        <div className="macx-projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="macx-project-card"
              onClick={() => {
                onSelectWindow('projects');
                window.dispatchEvent(
                  new CustomEvent('select-portfolio-project', { detail: project.id })
                );
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectWindow('projects');
                  window.dispatchEvent(
                    new CustomEvent('select-portfolio-project', { detail: project.id })
                  );
                }
              }}
            >
              <div className="macx-project-cover-wrap">
                {project.coverImage ? (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="macx-project-cover-img"
                  />
                ) : (
                  <ProjectCoverPlaceholder
                    type={project.coverPlaceholder || 'analytics'}
                    title={project.title}
                  />
                )}
              </div>
              <div className="macx-project-info">
                <h3 className="macx-project-title" title={project.title}>
                  {project.title}
                </h3>
                <span className="macx-project-category">{project.category}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 5. My Journey Section (Connected Career Progression) */}
      <div className="macx-section">
        <div className="macx-section-header-block">
          <h2 className="macx-section-heading">{t('about.myJourney')}</h2>
          <span className="macx-section-subheading">
            A journey from understanding digital experiences to solving problems through data and technology.
          </span>
        </div>

        <div className="macx-journey-flow">
          {journeyStages.map((stage, idx) => {
            const StageIcon = getJourneyIcon(stage.iconName);
            return (
              <div key={stage.id} className="macx-journey-stage-item">
                <div className="macx-journey-node">
                  <div className="macx-journey-icon-wrap">
                    <StageIcon size={16} className="text-blue-600" />
                  </div>
                  {idx < journeyStages.length - 1 && (
                    <div className="macx-journey-connector" />
                  )}
                </div>
                <div className="macx-journey-content">
                  <h3 className="macx-journey-title">{stage.stage}</h3>
                  <p className="macx-journey-desc">{stage.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. By the Numbers (Compact Authentic Portfolio Statistics) */}
      <div className="macx-section">
        <div className="macx-section-header-block">
          <h2 className="macx-section-heading">{t('about.stats')}</h2>
          <span className="macx-section-subheading">A snapshot of portfolio artifacts, application components, and leadership roles.</span>
        </div>

        <div className="macx-stats-grid">
          {portfolioStats.map((stat) => (
            <div key={stat.id} className="macx-stat-card">
              <span className="macx-stat-val">{stat.value}</span>
              <span className="macx-stat-label">{stat.label}</span>
              {stat.caption && (
                <span className="macx-stat-caption">{stat.caption}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 7. Experience Section (Clean Editorial List) */}
      <div className="macx-section">
        <div className="macx-section-header-row">
          <div>
            <h2 className="macx-section-heading">{t('desktop.experience')}</h2>
            <span className="macx-section-subheading">Industry internships, product teams, and client consulting engagements.</span>
          </div>
          <button
            type="button"
            className="macx-section-action-link"
            onClick={() => onSelectWindow('experience')}
          >
            <span>{t('experience.roles')}</span>
            <ExternalLink size={12} />
          </button>
        </div>

        <div className="macx-experience-list">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="macx-experience-item">
              <div className="macx-experience-header-line">
                <h3 className="macx-experience-company">{exp.company}</h3>
                {exp.period && (
                  <span className="macx-experience-period">{exp.period}</span>
                )}
              </div>
              <span className="macx-experience-role">{exp.role}</span>
              {exp.description && (
                <p className="macx-experience-desc">{exp.description}</p>
              )}
              {index < experiences.length - 1 && (
                <div className="macx-experience-divider" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 8. Organization & Leadership Section (2-Column Editorial Grid) */}
      <div className="macx-section">
        <div className="macx-section-header-block">
          <h2 className="macx-section-heading">{t('experience.organizations')}</h2>
          <span className="macx-section-subheading">Student governance, departmental media divisions, and community development programs.</span>
        </div>

        <div className="macx-org-grid">
          {organizations.map((org) => {
            const OrgIcon = getOrgIcon(org.id);
            return (
              <div key={org.id} className="macx-org-card">
                <div className="macx-org-card-top">
                  <div className="macx-org-avatar">
                    <OrgIcon size={16} className="text-slate-700" />
                  </div>
                  {org.period && (
                    <span className="macx-org-period">{org.period}</span>
                  )}
                </div>
                <div className="macx-org-body">
                  <h3 className="macx-org-name">{org.organization}</h3>
                  <span className="macx-org-role">{org.role}</span>
                  <p className="macx-org-desc">{org.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 9. Proud Moments Section (Curated Highlight Cards) */}
      <div className="macx-section">
        <div className="macx-section-header-block">
          <h2 className="macx-section-heading">{t('about.proudMoments')}</h2>
          <span className="macx-section-subheading">
            Experiences that helped shape how I communicate, lead, and collaborate with teams.
          </span>
        </div>

        <div className="macx-proud-grid">
          {proudMoments.map((item) => (
            <div
              key={item.id}
              className={`macx-proud-card macx-proud-card-${item.accentColor || 'blue'}`}
            >
              <div className="macx-proud-card-header">
                <div className="macx-proud-badge">
                  <Sparkles size={13} className="text-amber-500" />
                  <span>Featured Highlight</span>
                </div>
                {item.period && (
                  <span className="macx-proud-period">{item.period}</span>
                )}
              </div>
              <h3 className="macx-proud-title">{item.title}</h3>
              {item.organization && (
                <span className="macx-proud-org">{item.organization}</span>
              )}
              <p className="macx-proud-desc">{item.description}</p>
              {item.mentionItems && item.mentionItems.length > 0 && (
                <div className="macx-proud-mentions">
                  {item.mentionItems.map((mention, mIdx) => (
                    <span key={mIdx} className="macx-proud-mention-pill">
                      <CheckCircle2 size={11} className="text-blue-500" />
                      <span>{mention}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 10. Currently Section (Grounded Learning, Building, Exploring) */}
      <div className="macx-section">
        <div className="macx-section-header-block">
          <h2 className="macx-section-heading">{t('about.currently')}</h2>
          <span className="macx-section-subheading">
            What I'm learning, exploring, and building right now.
          </span>
        </div>

        <div className="macx-currently-grid">
          {currentActivities.map((act) => {
            const ActIcon = getActivityIcon(act.iconName);
            return (
              <div
                key={act.id}
                className={`macx-currently-card ${
                  act.isFeatured ? 'macx-currently-featured' : ''
                }`}
              >
                <div className="macx-currently-top">
                  <div className="macx-currently-icon-box">
                    <ActIcon size={16} />
                  </div>
                  <span className="macx-currently-category">{act.category}</span>
                </div>
                <div className="macx-currently-body">
                  <h3 className="macx-currently-title">{act.title}</h3>
                  <p className="macx-currently-desc">{act.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 11. Beyond Work (Compact Personal Interests) */}
      <div className="macx-section">
        <div className="macx-section-header-block">
          <h2 className="macx-section-heading">{t('about.interests')}</h2>
          <span className="macx-section-subheading">
            When I'm not exploring data models or building web products...
          </span>
        </div>

        <div className="macx-interests-grid">
          {personalInterests.map((interest) => (
            <div key={interest.id} className="macx-interest-card">
              <span className="macx-interest-emoji" aria-hidden="true">
                {interest.emoji}
              </span>
              <div className="macx-interest-text">
                <h3 className="macx-interest-title">{interest.title}</h3>
                <p className="macx-interest-desc">{interest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
