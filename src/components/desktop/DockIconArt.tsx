import React from 'react';

// =========================================================================
// AUTHENTIC MACXFOLIO DOCK ICONS (Dimensional, Deep Shading, Specular Rim)
// Reference composition: Finder, Notes, Photos, Movies, Mail
// =========================================================================

// 1. Finder Icon (Classic split two-tone blue smiling face with specular rim)
export const DockFinderIcon: React.FC = () => (
  <svg viewBox="0 0 54 54" width="48" height="48" fill="none" className="dock-custom-svg">
    <defs>
      <linearGradient id="finderLeft" x1="0" y1="0" x2="27" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
      <linearGradient id="finderRight" x1="27" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="finderBezel" x1="0" y1="0" x2="0" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.4" />
        <stop offset="0.3" stopColor="white" stopOpacity="0.05" />
        <stop offset="1" stopColor="black" stopOpacity="0.3" />
      </linearGradient>
      <radialGradient id="finderInnerGlow" cx="50%" cy="20%" r="70%">
        <stop stopColor="white" stopOpacity="0.12" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <filter id="finderDrop" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#0F172A" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#finderDrop)">
      <rect width="54" height="54" rx="12" fill="#E2E8F0" />
      <path d="M0 0H27V54H0V0Z" fill="url(#finderLeft)" rx="12" />
      <path d="M27 0H54V54H27V0Z" fill="url(#finderRight)" rx="12" />
      <rect x="0.75" y="0.75" width="52.5" height="52.5" rx="11.25" stroke="url(#finderBezel)" strokeWidth="1.5" />
      {/* Smiling Face */}
      <path d="M15 20C15 22.5 17.2 24.5 20 24.5C22.8 24.5 25 22.5 25 20" stroke="#1E3A8A" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M29 20C29 22.5 31.2 24.5 34 24.5C36.8 24.5 39 22.5 39 20" stroke="#1E3A8A" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M27 18V31H23" stroke="#1E3A8A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 35C20 40 34 40 38 35" stroke="#1E3A8A" strokeWidth="2.8" strokeLinecap="round" />
      <rect x="2" y="2" width="50" height="50" rx="10" fill="url(#finderInnerGlow)" />
    </g>
  </svg>
);

// 2. Notes Icon (Yellow header on clean paper pad with horizontal lines)
export const DockNotesIcon: React.FC = () => (
  <svg viewBox="0 0 54 54" width="48" height="48" fill="none" className="dock-custom-svg">
    <defs>
      <linearGradient id="notesYellow" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FCD34D" />
        <stop offset="1" stopColor="#F59E0B" />
      </linearGradient>
      <linearGradient id="notesBezel" x1="0" y1="0" x2="0" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.5" />
        <stop offset="1" stopColor="black" stopOpacity="0.2" />
      </linearGradient>
      <radialGradient id="notesInnerGlow" cx="50%" cy="15%" r="60%">
        <stop stopColor="white" stopOpacity="0.15" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <filter id="notesDrop" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#0F172A" floodOpacity="0.3" />
      </filter>
    </defs>
    <g filter="url(#notesDrop)">
      <rect width="54" height="54" rx="12" fill="#FFFFFF" />
      <path d="M0 12C0 5.37 5.37 0 12 0H42C48.63 0 54 5.37 54 12V16H0V12Z" fill="url(#notesYellow)" />
      <line x1="0" y1="16" x2="54" y2="16" stroke="#D97706" strokeWidth="1" />
      <rect x="0.75" y="0.75" width="52.5" height="52.5" rx="11.25" stroke="url(#notesBezel)" strokeWidth="1.5" />
      <line x1="10" y1="25" x2="44" y2="25" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="10" y1="33" x2="44" y2="33" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="10" y1="41" x2="30" y2="41" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="1" y="17" width="52" height="36" fill="white" fillOpacity="0.04" />
      <rect x="2" y="2" width="50" height="50" rx="10" fill="url(#notesInnerGlow)" />
    </g>
  </svg>
);

// 3. Photos Icon (Vibrant rainbow color wheel on clean frosted white tile)
export const DockPhotosIcon: React.FC = () => (
  <svg viewBox="0 0 54 54" width="48" height="48" fill="none" className="dock-custom-svg">
    <defs>
      <linearGradient id="photosBezel" x1="0" y1="0" x2="0" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.6" />
        <stop offset="1" stopColor="black" stopOpacity="0.15" />
      </linearGradient>
      <radialGradient id="photosInnerGlow" cx="50%" cy="25%" r="65%">
        <stop stopColor="white" stopOpacity="0.18" />
        <stop offset="1" stopColor="black" stopOpacity="0.03" />
      </radialGradient>
      <filter id="photosDrop" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#0F172A" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#photosDrop)">
      <rect width="54" height="54" rx="12" fill="#FFFFFF" />
      <rect x="0.75" y="0.75" width="52.5" height="52.5" rx="11.25" stroke="url(#photosBezel)" strokeWidth="1.5" />
      <g transform="translate(27, 27)">
        <circle cy="-11" r="5.5" fill="#EF4444" opacity="0.9" />
        <circle cx="8" cy="-8" r="5.5" fill="#F97316" opacity="0.9" />
        <circle cx="11" cy="0" r="5.5" fill="#FBBF24" opacity="0.9" />
        <circle cx="8" cy="8" r="5.5" fill="#10B981" opacity="0.9" />
        <circle cy="11" r="5.5" fill="#06B6D4" opacity="0.9" />
        <circle cx="-8" cy="8" r="5.5" fill="#3B82F6" opacity="0.9" />
        <circle cx="-11" cy="0" r="5.5" fill="#6366F1" opacity="0.9" />
        <circle cx="-8" cy="-8" r="5.5" fill="#EC4899" opacity="0.9" />
      </g>
      <rect x="2" y="2" width="50" height="50" rx="10" fill="url(#photosInnerGlow)" />
    </g>
  </svg>
);

// 4. Movies / iMovie Icon (Deep rich purple-to-violet gradient with gleaming white star)
export const DockMoviesIcon: React.FC = () => (
  <svg viewBox="0 0 54 54" width="48" height="48" fill="none" className="dock-custom-svg">
    <defs>
      <linearGradient id="moviesGrad" x1="0" y1="0" x2="0" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A855F7" />
        <stop offset="1" stopColor="#6B21A8" />
      </linearGradient>
      <linearGradient id="moviesBezel" x1="0" y1="0" x2="0" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.45" />
        <stop offset="1" stopColor="black" stopOpacity="0.3" />
      </linearGradient>
      <radialGradient id="moviesInnerGlow" cx="50%" cy="20%" r="70%">
        <stop stopColor="white" stopOpacity="0.12" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <filter id="moviesDrop" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#2E0854" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#moviesDrop)">
      <rect width="54" height="54" rx="12" fill="url(#moviesGrad)" />
      <rect x="0.75" y="0.75" width="52.5" height="52.5" rx="11.25" stroke="url(#moviesBezel)" strokeWidth="1.5" />
      <polygon points="27,13 31,22 41,23 34,30 36,40 27,34 18,40 20,30 13,23 23,22" fill="white" fillOpacity="0.15" transform="scale(1.08) translate(-1.08, -1.08)" />
      <polygon points="27,13 31,22 41,23 34,30 36,40 27,34 18,40 20,30 13,23 23,22" fill="white" />
      <rect x="2" y="2" width="50" height="50" rx="10" fill="url(#moviesInnerGlow)" />
    </g>
  </svg>
);

// 5. Mail Icon (Cyan/Blue Apple Mail gradient with white letter fold)
export const DockMailIcon: React.FC = () => (
  <svg viewBox="0 0 54 54" width="48" height="48" fill="none" className="dock-custom-svg">
    <defs>
      <linearGradient id="mailGrad" x1="0" y1="0" x2="0" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="mailBezel" x1="0" y1="0" x2="0" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.45" />
        <stop offset="1" stopColor="black" stopOpacity="0.3" />
      </linearGradient>
      <radialGradient id="mailInnerGlow" cx="50%" cy="20%" r="70%">
        <stop stopColor="white" stopOpacity="0.12" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <filter id="mailDrop" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#073B61" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#mailDrop)">
      <rect width="54" height="54" rx="12" fill="url(#mailGrad)" />
      <rect x="0.75" y="0.75" width="52.5" height="52.5" rx="11.25" stroke="url(#mailBezel)" strokeWidth="1.5" />
      <rect x="9" y="17" width="36" height="23" rx="3.5" fill="#0369A1" fillOpacity="0.3" />
      <rect x="9" y="16" width="36" height="23" rx="3.5" fill="#FFFFFF" />
      <path d="M9 17L27 30L45 17" stroke="#0284C7" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="2" width="50" height="50" rx="10" fill="url(#mailInnerGlow)" />
    </g>
  </svg>
);
