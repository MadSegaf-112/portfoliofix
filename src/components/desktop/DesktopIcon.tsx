import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  icon: Icon,
  label,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="shortcut"
      onClick={onClick}
      aria-label={`Open ${label}`}
      title={label}
    >
      <span className="shortcut-icon" aria-hidden="true">
        <Icon size={26} />
      </span>
      <span>{label}</span>
    </button>
  );
};
