import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { AppId, WindowPosition, WindowState } from '@/types';
import { WindowLayer } from '@/components/window/WindowLayer';
import {
  AbnaCommerceThumbnailArt,
  AboutMeDesktopIcon,
  AbnaPicksThumbnailArt,
  AsusFitsForUThumbnailArt,
  ExpressAnalyticsThumbnailArt,
  FigmaDesktopIcon,
  FolderDesktopIcon,
  GitHubDesktopIcon,
  GoogleAdsAnalyticsThumbnailArt,
  GoogleAdsDashboardThumbnailArt,
  FypMediaThumbnailArt,
  MusicDesktopIcon,
  ResumeDesktopIcon,
  ZenHomeThumbnailArt,
} from './DesktopIconArt';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

interface DesktopProps {
  windows: Record<AppId, WindowState>;
  onOpenWindow: (id: AppId) => void;
  onCloseWindow: (id: AppId) => void;
  onMinimizeWindow: (id: AppId) => void;
  onMaximizeWindow: (id: AppId) => void;
  onFocusWindow: (id: AppId) => void;
  onPositionChange: (id: AppId, pos: WindowPosition) => void;
  onMenuOpen: (menu: string) => void;
}

export interface DesktopIconItem {
  id: string;
  title: string;
  label: string;
  position: React.CSSProperties;
  icon: React.ComponentType;
  type: 'app' | 'project' | 'link';
  targetApp?: AppId;
  targetProjectId?: string;
  linkUrl?: string;
}

export const Desktop: React.FC<DesktopProps> = ({
  windows,
  onOpenWindow,
  onCloseWindow,
  onMinimizeWindow,
  onMaximizeWindow,
  onFocusWindow,
  onPositionChange,
}) => {
  const { t } = useLanguage();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOpenProject = (projectId: string) => {
    onOpenWindow('projects');
    window.setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('select-portfolio-project', { detail: projectId })
      );
    }, 0);
  };

  // Centralized Desktop Items Configuration
  const desktopItems: DesktopIconItem[] = [
    // ================= TOP ROW =================
    {
      id: 'github',
      title: 'GitHub',
      label: 'GitHub',
      position: { top: '58px', left: '9%' },
      icon: GitHubDesktopIcon,
      type: 'link',
      linkUrl: 'https://github.com/MadSegaf-112',
    },
    {
      id: 'resume',
      title: t('desktop.resume'),
      label: t('desktop.resume'),
      position: { top: '48px', left: '50%', transform: 'translateX(-50%)' },
      icon: ResumeDesktopIcon,
      type: 'app',
      targetApp: 'resume',
    },
    {
      id: 'figma',
      title: 'Figma',
      label: 'Figma',
      position: { top: '58px', right: '9%' },
      icon: FigmaDesktopIcon,
      type: 'link',
      linkUrl: 'https://figma.com',
    },

    // ================= UPPER-MIDDLE ROW =================
    {
      id: 'abna-picks',
      title: 'ABNA PICKS',
      label: 'ABNA PICKS',
      position: { top: '115px', left: '18%' },
      icon: AbnaPicksThumbnailArt,
      type: 'project',
      targetProjectId: 'abna-picks',
    },
    {
      id: 'abna-commerce',
      title: 'ABNA Commerce',
      label: 'ABNA Commerce',
      position: { top: '115px', right: '18%' },
      icon: AbnaCommerceThumbnailArt,
      type: 'project',
      targetProjectId: 'abna-commerce',
    },
    {
      id: 'music',
      title: t('desktop.music'),
      label: t('desktop.music'),
      position: { top: '105px', left: '31%' },
      icon: MusicDesktopIcon,
      type: 'app',
      targetApp: 'about',
    },
    {
      id: 'google-ads-dashboard',
      title: 'Google Ads Dashboard',
      label: 'Google Ads\nDashboard',
      position: { top: '105px', right: '29%' },
      icon: GoogleAdsDashboardThumbnailArt,
      type: 'project',
      targetProjectId: 'google-ads-dashboard',
    },

    // ================= MIDDLE ROW =================
    {
      id: 'google-ads-analytics',
      title: 'Google Ads Analytics',
      label: 'Google Ads\nAnalytics',
      position: { top: '235px', left: '13%' },
      icon: GoogleAdsAnalyticsThumbnailArt,
      type: 'project',
      targetProjectId: 'google-ads-analysis',
    },
    {
      id: 'express-analytics-dashboard',
      title: 'Express Analytics Dashboard',
      label: 'Express Analytics\nDashboard',
      position: { top: '250px', left: '45%' },
      icon: ExpressAnalyticsThumbnailArt,
      type: 'project',
      targetProjectId: 'express-analytics-dashboard',
    },
    {
      id: 'asus-fits-for-u',
      title: 'ASUS Fits For U',
      label: 'ASUS Fits\nFor U',
      position: { top: '235px', right: '13%' },
      icon: AsusFitsForUThumbnailArt,
      type: 'project',
      targetProjectId: 'asus-fits-for-u',
    },

    // ================= LOWER-MIDDLE ROW =================
    {
      id: 'zenhome',
      title: 'ZenHome',
      label: 'ZenHome',
      position: { bottom: '205px', left: '24%' },
      icon: ZenHomeThumbnailArt,
      type: 'project',
      targetProjectId: 'zenhome',
    },
    {
      id: 'fyp-media',
      title: 'FYP Media',
      label: 'FYP Media',
      position: { top: '280px', right: '33%' },
      icon: FypMediaThumbnailArt,
      type: 'project',
      targetProjectId: 'fyp-media-news',
    },
    // ================= BOTTOM ROW =================
    {
      id: 'about-me',
      title: t('desktop.about'),
      label: t('desktop.about'),
      position: { bottom: '130px', left: '9%' },
      icon: AboutMeDesktopIcon,
      type: 'app',
      targetApp: 'about',
    },
    {
      id: 'resources',
      title: t('experience.roles'),
      label: t('experience.roles'),
      position: { bottom: '130px', right: '9%' },
      icon: FolderDesktopIcon,
      type: 'app',
      targetApp: 'experience',
    },
  ];

  const handleItemClick = (item: DesktopIconItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDraggingRef.current) return;
    setSelectedItemId(item.id);
    if (item.type === 'link' && item.linkUrl) {
      window.open(item.linkUrl, '_blank', 'noopener,noreferrer');
    } else if (item.type === 'project' && item.targetProjectId) {
      handleOpenProject(item.targetProjectId);
    } else if (item.type === 'app' && item.targetApp) {
      onOpenWindow(item.targetApp);
    }
  };

  return (
    <main className="desktop-area" onClick={() => setSelectedItemId(null)}>
      {/* Exact Reference Desktop Icons Array */}
      <div className="desktop-icons-container">
        {desktopItems.map((item) => {
          const IconComponent = item.icon;
          const isSelected = selectedItemId === item.id;
          const isAppOpen = item.type === 'app' && item.targetApp ? windows[item.targetApp]?.isOpen : false;

          return (
            <motion.div
              key={item.id}
              className="icon-position"
              style={!isMobile ? item.position : undefined}
              drag={!isMobile}
              dragMomentum={false}
              dragElastic={0.06}
              onDragStart={() => {
                isDraggingRef.current = true;
              }}
              onDragEnd={() => {
                setTimeout(() => {
                  isDraggingRef.current = false;
                }, 80);
              }}
            >
              <button
                type="button"
                className={`macx-desktop-item ${isSelected ? 'is-selected' : ''} ${isAppOpen ? 'is-app-open' : ''}`}
                onClick={(e) => handleItemClick(item, e)}
                title={item.title}
                aria-label={item.title}
              >
                <div className="desktop-icon-visual-wrap">
                  <IconComponent />
                  {isAppOpen && <span className="desktop-icon-open-dot" />}
                </div>
                <span className="desktop-item-label">{item.label}</span>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* macOS-Style Language Switcher (Bottom Left) */}
      <LanguageSwitcher />

      <WindowLayer
        windows={windows}
        onFocus={onFocusWindow}
        onClose={onCloseWindow}
        onMinimize={onMinimizeWindow}
        onMaximize={onMaximizeWindow}
        onPositionChange={onPositionChange}
        onOpenWindow={onOpenWindow}
      />
    </main>
  );
};
