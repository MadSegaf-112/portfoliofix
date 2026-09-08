import React, { useEffect, useState, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import type { AppId, WindowPosition } from '@/types';
import { WindowControls } from './WindowControls';

interface MacWindowProps {
  id: AppId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  isActive?: boolean;
  zIndex: number;
  position: WindowPosition;
  children: React.ReactNode;
  onFocus: (id: AppId) => void;
  onClose: (id: AppId) => void;
  onMinimize: (id: AppId) => void;
  onMaximize: (id: AppId) => void;
  onPositionChange: (id: AppId, pos: WindowPosition) => void;
}

export const MacWindow: React.FC<MacWindowProps> = ({
  id,
  title,
  isOpen,
  isMinimized,
  isMaximized,
  isActive = true,
  zIndex,
  position,
  children,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
  onPositionChange,
}) => {
  const dragControls = useDragControls();
  const windowRef = useRef<HTMLDivElement>(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Below 800px width or touch viewport, disable freeform dragging
      const isMobile = window.innerWidth <= 800;
      setIsMobileOrTablet(isMobile);

      // Clamp existing position within safe viewport boundaries on viewport resize
      if (!isMobile && !isMaximized) {
        const minX = 8;
        const maxX = Math.max(minX, window.innerWidth - 180);
        const minY = 32;
        const maxY = Math.max(minY, window.innerHeight - 80);

        if (position.x < minX || position.x > maxX || position.y < minY || position.y > maxY) {
          const boundedX = Math.max(minX, Math.min(position.x, maxX));
          const boundedY = Math.max(minY, Math.min(position.y, maxY));
          onPositionChange(id, { x: boundedX, y: boundedY });
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [id, isMaximized, position.x, position.y, onPositionChange]);

  if (!isOpen || isMinimized) {
    return null;
  }

  const handlePointerDown = () => {
    onFocus(id);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    if (isMaximized || isMobileOrTablet) return;

    // Viewport-bounded safe positioning: ensure titlebar and window stay inside safe bounds
    const rawX = position.x + info.offset.x;
    const rawY = position.y + info.offset.y;

    const minX = 8;
    const maxX = Math.max(minX, window.innerWidth - 180);
    const minY = 32;
    const maxY = Math.max(minY, window.innerHeight - 80);

    const boundedX = Math.max(minX, Math.min(rawX, maxX));
    const boundedY = Math.max(minY, Math.min(rawY, maxY));

    onPositionChange(id, { x: boundedX, y: boundedY });
  };

  const isFreeformDraggable = !isMaximized && !isMobileOrTablet;

  return (
    <motion.section
      ref={windowRef}
      className={`glass-window ${isActive ? 'is-active' : 'is-inactive'} ${isMaximized ? 'is-maximized' : ''} ${isMobileOrTablet ? 'is-mobile-window' : ''}`}
      aria-label={title}
      style={{
        position: 'absolute',
        zIndex,
        ...(isMaximized || isMobileOrTablet
          ? {}
          : {
              left: position.x,
              top: position.y,
            }),
      }}
      initial={{ opacity: 0, scale: 0.92, y: 18 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          type: 'spring',
          damping: 28,
          stiffness: 340,
          mass: 0.8,
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.88,
        y: 16,
        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
      }}
      drag={isFreeformDraggable}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      onPointerDown={handlePointerDown}
    >
      <div
        className="window-titlebar"
        onPointerDown={(e) => {
          handlePointerDown();
          if (isFreeformDraggable) {
            dragControls.start(e);
          }
        }}
      >
        <WindowControls
          onClose={() => onClose(id)}
          onMinimize={() => onMinimize(id)}
          onMaximize={() => onMaximize(id)}
          isMaximized={isMaximized}
        />
        <span>{title}</span>
        <div className="titlebar-spacer" />
      </div>
      {children}
    </motion.section>
  );
};
