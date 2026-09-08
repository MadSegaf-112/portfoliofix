import React from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

interface MenuBarProps {
  time: string;
}

export const MenuBar: React.FC<MenuBarProps> = ({ time }) => {
  const { language } = useLanguage();

  const formattedDate = new Intl.DateTimeFormat(language === 'ID' ? 'id-ID' : 'en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(2026, 7, 21));

  return (
    <header className="macx-topbar">
      <div className="topbar-left">
        <span className="topbar-username">{profile.name}</span>
      </div>
      <div className="topbar-right">
        <div className="topbar-social-group">
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="topbar-social-btn"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={13} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="topbar-social-btn"
            aria-label="Email"
          >
            <Mail size={13} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="topbar-social-btn"
            aria-label="Twitter / X"
          >
            <Twitter size={13} />
          </a>
        </div>
        <span className="topbar-divider" />
        <span className="topbar-date">{formattedDate}</span>
        <span className="topbar-clock">{time}</span>
      </div>
    </header>
  );
};
