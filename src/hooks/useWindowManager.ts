import { useState, useCallback } from 'react';
import type { AppId, WindowPosition, WindowState } from '@/types';
import { apps } from '@/data/portfolio';

const INITIAL_Z_INDEX = 10;

export const clampPosition = (pos: WindowPosition): WindowPosition => {
  if (typeof window === 'undefined') return pos;
  const minX = 8;
  const maxX = Math.max(minX, window.innerWidth - 180);
  const minY = 32;
  const maxY = Math.max(minY, window.innerHeight - 80);
  return {
    x: Math.max(minX, Math.min(pos.x, maxX)),
    y: Math.max(minY, Math.min(pos.y, maxY)),
  };
};

const createInitialWindows = (): Record<AppId, WindowState> => {
  const initial: Partial<Record<AppId, WindowState>> = {};
  (Object.keys(apps) as AppId[]).forEach((id) => {
    initial[id] = {
      id,
      isOpen: id === 'about', // 'about' starts open initially
      isMinimized: false,
      isMaximized: false,
      zIndex: id === 'about' ? INITIAL_Z_INDEX : 1,
      position: clampPosition({ ...apps[id].defaultPosition }),
    };
  });
  return initial as Record<AppId, WindowState>;
};

export function useWindowManager() {
  const [windows, setWindows] = useState<Record<AppId, WindowState>>(createInitialWindows);
  const [, setTopZIndex] = useState<number>(INITIAL_Z_INDEX);
  const [activeWindowId, setActiveWindowId] = useState<AppId | null>('about');

  const bringToFront = useCallback((id: AppId) => {
    setTopZIndex((prevZ) => {
      const nextZ = prevZ + 1;
      setWindows((prevWindows) => {
        const current = prevWindows[id];
        if (!current) return prevWindows;
        return {
          ...prevWindows,
          [id]: {
            ...current,
            zIndex: nextZ,
            isMinimized: false,
          },
        };
      });
      return nextZ;
    });
    setActiveWindowId(id);
  }, []);

  const openWindow = useCallback(
    (id: AppId) => {
      setTopZIndex((prevZ) => {
        const nextZ = prevZ + 1;
        setWindows((prevWindows) => {
          const current = prevWindows[id];
          return {
            ...prevWindows,
            [id]: {
              ...current,
              isOpen: true,
              isMinimized: false,
              zIndex: nextZ,
            },
          };
        });
        return nextZ;
      });
      setActiveWindowId(id);
    },
    []
  );

  const closeWindow = useCallback((id: AppId) => {
    setWindows((prevWindows) => {
      const current = prevWindows[id];
      if (!current) return prevWindows;
      return {
        ...prevWindows,
        [id]: {
          ...current,
          isOpen: false,
          isMinimized: false,
          isMaximized: false,
        },
      };
    });

    setActiveWindowId((prevActive) => {
      if (prevActive !== id) return prevActive;
      return null;
    });
  }, []);

  const minimizeWindow = useCallback((id: AppId) => {
    setWindows((prevWindows) => {
      const current = prevWindows[id];
      if (!current) return prevWindows;
      return {
        ...prevWindows,
        [id]: {
          ...current,
          isMinimized: true,
        },
      };
    });

    setActiveWindowId((prevActive) => {
      if (prevActive === id) return null;
      return prevActive;
    });
  }, []);

  const restoreWindow = useCallback(
    (id: AppId) => {
      bringToFront(id);
    },
    [bringToFront]
  );

  const maximizeWindow = useCallback((id: AppId) => {
    setWindows((prevWindows) => {
      const current = prevWindows[id];
      if (!current) return prevWindows;
      return {
        ...prevWindows,
        [id]: {
          ...current,
          isMaximized: !current.isMaximized,
        },
      };
    });
  }, []);

  const toggleWindow = useCallback(
    (id: AppId) => {
      const win = windows[id];
      if (!win || !win.isOpen) {
        openWindow(id);
      } else if (win.isMinimized) {
        restoreWindow(id);
      } else if (activeWindowId === id) {
        minimizeWindow(id);
      } else {
        bringToFront(id);
      }
    },
    [windows, activeWindowId, openWindow, restoreWindow, minimizeWindow, bringToFront]
  );

  const updatePosition = useCallback((id: AppId, position: WindowPosition) => {
    setWindows((prevWindows) => {
      const current = prevWindows[id];
      if (!current) return prevWindows;
      return {
        ...prevWindows,
        [id]: {
          ...current,
          position: clampPosition(position),
        },
      };
    });
  }, []);

  return {
    windows,
    activeWindowId,
    openWindow,
    closeWindow,
    minimizeWindow,
    restoreWindow,
    maximizeWindow,
    bringToFront,
    toggleWindow,
    updatePosition,
  };
}
