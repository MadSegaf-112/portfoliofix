import React, { useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
  type MotionValue,
} from 'framer-motion';
import {
  DockFinderIcon,
  DockMailIcon,
  DockMoviesIcon,
  DockNotesIcon,
  DockPhotosIcon,
} from './DockIconArt';
import type { AppId, WindowState } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface DockProps {
  windows: Record<AppId, WindowState>;
  activeWindowId: AppId | null;
  onToggleWindow: (id: AppId) => void;
}

interface DockItemConfig {
  id: AppId;
  title: string;
  ariaLabel: string;
  icon: React.ComponentType;
  fallbackCheck?: AppId;
}

const DOCK_ITEMS: DockItemConfig[] = [
  {
    id: 'projects',
    title: 'Finder',
    ariaLabel: 'Open Projects (Finder)',
    icon: DockFinderIcon,
  },
  {
    id: 'experience',
    title: 'Notes',
    ariaLabel: 'Open Experience (Notes)',
    icon: DockNotesIcon,
  },
  {
    id: 'gallery',
    title: 'Gallery',
    ariaLabel: 'Open Gallery',
    icon: DockPhotosIcon,
    fallbackCheck: 'skills',
  },
  {
    id: 'about',
    title: 'Movies',
    ariaLabel: 'Open About Me (Movies)',
    icon: DockMoviesIcon,
  },
  {
    id: 'contact',
    title: 'Mail',
    ariaLabel: 'Open Contact (Mail)',
    icon: DockMailIcon,
  },
];

interface DockItemProps {
  mouseX: MotionValue<number>;
  item: DockItemConfig;
  isOpen: boolean;
  isActive: boolean;
  isHovered: boolean;
  onToggleWindow: (id: AppId) => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const DockItem: React.FC<DockItemProps> = ({
  mouseX,
  item,
  isOpen,
  isActive,
  isHovered,
  onToggleWindow,
  onHoverStart,
  onHoverEnd,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const IconComponent = item.icon;

  // Track exact horizontal distance between cursor and this icon's center
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - (bounds.x + bounds.width / 2);
  });

  // Continuous macOS Gaussian magnification wave:
  // Center (0px): scale 1.40 (icon grows from 50px to 70px)
  // Immediate neighbors (~55px): scale ~1.21 (grows to ~60.5px)
  // Secondary neighbors (~105px): scale ~1.08 (grows to ~54px)
  // Distant icons (>=160px): scale 1.00 (50px base size)
  const scaleSync = useTransform(
    distance,
    [-170, -115, -60, 0, 60, 115, 170],
    [1.0, 1.07, 1.21, 1.40, 1.21, 1.07, 1.0]
  );

  const scale = useSpring(scaleSync, {
    mass: 0.1,
    stiffness: 380,
    damping: 24,
  });

  return (
    <div
      ref={ref}
      className="macx-dock-item-wrapper"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      {/* Precision macOS Dark Floating Tooltip with Pointer Arrow */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="macx-dock-tooltip"
            initial={{ opacity: 0, y: 5, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 3, scale: 0.95 }}
            transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>{item.title}</span>
            <div className="dock-tooltip-arrow" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        style={{
          scale,
          transformOrigin: 'bottom center',
        }}
        whileTap={{ scale: 0.94 }}
        className={`macx-dock-item ${isActive ? 'active' : ''}`}
        onClick={() => onToggleWindow(item.id)}
        aria-label={item.ariaLabel}
      >
        <div className="dock-icon-art">
          <IconComponent />
        </div>
      </motion.button>

      {isOpen && <span className="dock-dot" />}
    </div>
  );
};

export const Dock: React.FC<DockProps> = ({
  windows,
  activeWindowId,
  onToggleWindow,
}) => {
  const { t } = useLanguage();
  const mouseX = useMotionValue(Infinity);
  const [hoveredAppId, setHoveredAppId] = useState<AppId | null>(null);

  return (
    <footer className="macx-dock-wrap">
      <nav
        className="macx-dock"
        aria-label="Applications Dock"
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => {
          mouseX.set(Infinity);
          setHoveredAppId(null);
        }}
      >
        {DOCK_ITEMS.map((item) => {
          const isPrimaryOpen = windows[item.id]?.isOpen;
          const isFallbackOpen = item.fallbackCheck ? windows[item.fallbackCheck]?.isOpen : false;
          const isOpen = isPrimaryOpen || isFallbackOpen;
          const localizedTitle =
            item.id === 'gallery'
              ? t('dock.gallery')
              : item.id === 'contact'
              ? t('dock.mail')
              : item.id === 'experience'
              ? t('dock.notes')
              : item.title;

          return (
            <DockItem
              key={item.id}
              mouseX={mouseX}
              item={{ ...item, title: localizedTitle }}
              isOpen={Boolean(isOpen)}
              isActive={activeWindowId === item.id || (item.fallbackCheck ? activeWindowId === item.fallbackCheck : false)}
              isHovered={hoveredAppId === item.id}
              onToggleWindow={onToggleWindow}
              onHoverStart={() => setHoveredAppId(item.id)}
              onHoverEnd={() => setHoveredAppId(null)}
            />
          );
        })}
      </nav>
    </footer>
  );
};
