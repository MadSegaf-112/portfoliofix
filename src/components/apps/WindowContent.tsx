import React from 'react';
import type { AppId } from '@/types';
import { AboutApp } from '@/apps/AboutApp';
import { ExperienceApp } from '@/apps/ExperienceApp';
import { ProjectsApp } from '@/apps/ProjectsApp';
import { GalleryApp } from '@/apps/GalleryApp';
import { ContactApp } from '@/apps/ContactApp';
import { ResumeApp } from '@/apps/ResumeApp';

interface WindowContentProps {
  activeWindow: AppId;
  onSelectWindow: (id: AppId) => void;
}

export const WindowContent: React.FC<WindowContentProps> = ({
  activeWindow,
  onSelectWindow,
}) => {
  switch (activeWindow) {
    case 'about':
      return <AboutApp onSelectWindow={onSelectWindow} />;
    case 'experience':
      return <ExperienceApp />;
    case 'projects':
      return <ProjectsApp />;
    case 'gallery':
    case 'skills':
      return <GalleryApp />;
    case 'contact':
      return <ContactApp />;
    case 'resume':
      return <ResumeApp />;
    default:
      return <AboutApp onSelectWindow={onSelectWindow} />;
  }
};
