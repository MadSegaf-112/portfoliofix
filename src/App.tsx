import { useEffect, useState } from 'react';
import { MenuBar } from '@/components/desktop/MenuBar';
import { Desktop } from '@/components/desktop/Desktop';
import { Dock } from '@/components/desktop/Dock';
import { HelloOverlay } from '@/components/desktop/HelloOverlay';
import { useWindowManager } from '@/hooks/useWindowManager';
import { LanguageProvider } from '@/context/LanguageContext';
import wallpaperUrl from '@/assets/wallpaper/wallpaper.png';

function AppContent() {
  const {
    windows,
    activeWindowId,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    bringToFront,
    toggleWindow,
    updatePosition,
  } = useWindowManager();

  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () =>
      setTime(
        new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: '2-digit',
        }).format(new Date())
      );
    updateTime();
    const timer = window.setInterval(updateTime, 30000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="os-shell"
      style={{ '--wallpaper': `url(${wallpaperUrl})` } as React.CSSProperties}
    >
      <div className="wallpaper" />
      <HelloOverlay />
      <MenuBar time={time} />
      <Desktop
        windows={windows}
        onOpenWindow={openWindow}
        onCloseWindow={closeWindow}
        onMinimizeWindow={minimizeWindow}
        onMaximizeWindow={maximizeWindow}
        onFocusWindow={bringToFront}
        onPositionChange={updatePosition}
        onMenuOpen={() => {}}
      />
      <Dock
        windows={windows}
        activeWindowId={activeWindowId}
        onToggleWindow={toggleWindow}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
