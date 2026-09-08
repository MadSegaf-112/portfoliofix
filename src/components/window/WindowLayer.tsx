import React from 'react';
import { AnimatePresence } from 'framer-motion';
import type { AppId, WindowPosition, WindowState } from '@/types';
import { apps } from '@/data/portfolio';
import { MacWindow } from './MacWindow';
import { WindowContent } from '@/components/apps/WindowContent';

interface WindowLayerProps {
  windows: Record<AppId, WindowState>;
  onFocus: (id: AppId) => void;
  onClose: (id: AppId) => void;
  onMinimize: (id: AppId) => void;
  onMaximize: (id: AppId) => void;
  onPositionChange: (id: AppId, pos: WindowPosition) => void;
  onOpenWindow: (id: AppId) => void;
}

export const WindowLayer: React.FC<WindowLayerProps> = ({
  windows,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
  onPositionChange,
  onOpenWindow,
}) => {
  const maxZIndex = Math.max(
    0,
    ...Object.values(windows).map((w) => (w.isOpen && !w.isMinimized ? w.zIndex : 0))
  );

  return (
    <div className="window-layer">
      <AnimatePresence>
        {(Object.keys(windows) as AppId[]).map((id) => {
          const win = windows[id];
          const app = apps[id];
          if (!win.isOpen || win.isMinimized) return null;

          return (
            <MacWindow
              key={id}
              id={id}
              title={app.windowTitle}
              isOpen={win.isOpen}
              isMinimized={win.isMinimized}
              isMaximized={win.isMaximized}
              isActive={win.zIndex === maxZIndex}
              zIndex={win.zIndex}
              position={win.position}
              onFocus={onFocus}
              onClose={onClose}
              onMinimize={onMinimize}
              onMaximize={onMaximize}
              onPositionChange={onPositionChange}
            >
              <WindowContent activeWindow={id} onSelectWindow={onOpenWindow} />
            </MacWindow>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
