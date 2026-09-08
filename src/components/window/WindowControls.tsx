import React from 'react';

interface WindowControlsProps {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  isMaximized?: boolean;
}

export const WindowControls: React.FC<WindowControlsProps> = ({
  onClose,
  onMinimize,
  onMaximize,
  isMaximized,
}) => {
  return (
    <div className="traffic-lights" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className="traffic red"
        aria-label="Close window"
        title="Close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      />
      <button
        type="button"
        className="traffic yellow"
        aria-label="Minimize window"
        title="Minimize"
        onClick={(e) => {
          e.stopPropagation();
          onMinimize();
        }}
      />
      <button
        type="button"
        className="traffic green"
        aria-label={isMaximized ? 'Restore window' : 'Maximize window'}
        title={isMaximized ? 'Restore' : 'Maximize'}
        onClick={(e) => {
          e.stopPropagation();
          onMaximize();
        }}
      />
    </div>
  );
};
