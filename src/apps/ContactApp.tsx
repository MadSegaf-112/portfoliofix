import React from 'react';
import { ExternalLink, FileText, Mail, MapPin } from 'lucide-react';
import { resumeData } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export const ContactApp: React.FC = () => {
  const { t, data } = useLanguage();
  const { profile } = data;

  return (
    <div className="content-panel contact-panel">
      <div className="contact-copy">
        <span className="eyebrow">{t('contact.title')}</span>
        <h1>{t('contact.subtitle')}</h1>
        <p className="intro">
          {profile.bio}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <a className="primary-button" href={`mailto:${profile.email}`}>
            {t('contact.send')} <Mail size={16} />
          </a>
          {profile.resumeUrl && (
            <a
              className="primary-button"
              style={{
                background: '#f8fafc',
                color: '#0f172a',
                border: '1px solid #cbd5e1',
              }}
              href={resumeData.file}
              download={resumeData.downloadName}
            >
              {t('about.downloadResume')} <FileText size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="contact-details">
        <div className="contact-info-stack">
          <a
            className="contact-line contact-link"
            href={`mailto:${profile.email}`}
          >
            <Mail size={18} />
            <span>{profile.email}</span>
          </a>
          <a
            className="contact-line contact-link"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} />
            <span>{profile.linkedin}</span>
          </a>
          <div className="contact-line">
            <MapPin size={18} />
            <span>{profile.location}</span>
          </div>
        </div>

        <div className="availability">
          <span className="status-pulse" /> {t('contact.subtitle')}
        </div>
      </div>
    </div>
  );
};
