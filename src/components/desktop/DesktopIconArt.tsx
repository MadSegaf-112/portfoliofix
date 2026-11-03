import React from 'react';

// =========================================================================
// 1. NATIVE APPLICATION ICONS (Deep Gradients, Highlight Rings, Multi-Layer Depth)
// =========================================================================

// GitHub Icon (Deep Apple-style rounded squircle with dark gradient, specular bezel rim, and crisp Octocat emblem)
export const GitHubDesktopIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" width="58" height="58" fill="none" className="desktop-custom-svg">
    <defs>
      <linearGradient id="githubBg" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#24292E" />
        <stop offset="0.6" stopColor="#161B22" />
        <stop offset="1" stopColor="#0D1117" />
      </linearGradient>
      <linearGradient id="githubHighlight" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.45" />
        <stop offset="0.35" stopColor="white" stopOpacity="0.08" />
        <stop offset="1" stopColor="black" stopOpacity="0.3" />
      </linearGradient>
      <filter id="githubDrop" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
      </filter>
    </defs>
    <rect width="64" height="64" rx="15" fill="url(#githubBg)" filter="url(#githubDrop)" />
    <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="14.25" stroke="url(#githubHighlight)" strokeWidth="1.5" />
    {/* GitHub Octocat Silhouette */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 14C21.5 14 13 22.5 13 33C13 41.4 18.45 48.53 26 51.05C26.95 51.22 27.3 50.64 27.3 50.13C27.3 49.68 27.28 48.47 27.27 46.86C21.97 48.01 20.86 44.31 20.86 44.31C19.99 42.1 18.74 41.51 18.74 41.51C17.01 40.33 18.87 40.35 18.87 40.35C20.78 40.48 21.79 42.31 21.79 42.31C23.49 45.22 26.25 44.38 27.34 43.89C27.51 42.65 28.01 41.8 28.55 41.33C24.32 40.85 19.87 39.21 19.87 31.92C19.87 29.84 20.61 28.14 21.83 26.81C21.63 26.33 20.98 24.39 22.02 21.8C22.02 21.8 23.62 21.29 27.27 23.76C28.79 23.34 30.41 23.13 32.02 23.12C33.63 23.13 35.25 23.34 36.77 23.76C40.42 21.29 42.02 21.8 42.02 21.8C43.06 24.39 42.41 26.33 42.21 26.81C43.43 28.14 44.17 29.84 44.17 31.92C44.17 39.23 39.71 40.84 35.47 41.31C36.14 41.89 36.75 43.03 36.75 44.78C36.75 47.28 36.73 49.3 36.73 49.91C36.73 50.42 37.07 51.02 38.04 50.83C45.59 48.3 51 41.17 51 32.78C51 22.39 42.5 14 32 14Z"
      fill="white"
    />
  </svg>
);

// Music Icon (Vibrant Red-to-Ruby Radial with authentic white beamed note)
export const MusicDesktopIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" width="58" height="58" fill="none" className="desktop-custom-svg">
    <defs>
      <linearGradient id="musicGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF3358" />
        <stop offset="0.5" stopColor="#FA233B" />
        <stop offset="1" stopColor="#D90E2C" />
      </linearGradient>
      <linearGradient id="musicBezel" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.45" />
        <stop offset="0.4" stopColor="white" stopOpacity="0.08" />
        <stop offset="1" stopColor="black" stopOpacity="0.3" />
      </linearGradient>
      <filter id="musicDrop" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#7A0012" floodOpacity="0.38" />
      </filter>
    </defs>
    <rect width="64" height="64" rx="15" fill="url(#musicGrad)" filter="url(#musicDrop)" />
    <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="14.25" stroke="url(#musicBezel)" strokeWidth="1.5" />
    <path
      d="M42 19V36.5C40.98 36.18 39.86 36 38.68 36C35.03 36 32.07 38.96 32.07 42.61C32.07 46.26 35.03 49.22 38.68 49.22C42.33 49.22 45.29 46.26 45.29 42.61V25.2L27.69 29.1V39.5C26.67 39.18 25.55 39 24.37 39C20.72 39 17.76 41.96 17.76 45.61C17.76 49.26 20.72 52.22 24.37 52.22C28.02 52.22 30.98 49.26 30.98 45.61V22.5L42 19Z"
      fill="white"
    />
  </svg>
);

// Resume File Icon (Realistic macOS document sheet with folded top-right corner, blue header and text lines)
export const ResumeDesktopIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" width="58" height="58" fill="none" className="desktop-custom-svg">
    <defs>
      <linearGradient id="docGrad" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#F1F5F9" />
      </linearGradient>
      <filter id="docShadow" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="3.5" floodColor="#0F172A" floodOpacity="0.3" />
      </filter>
    </defs>
    <g filter="url(#docShadow)">
      <path d="M14 8C14 6.34 15.34 5 17 5H39L50 16V55C50 56.66 48.66 58 47 58H17C15.34 58 14 56.66 14 55V8Z" fill="url(#docGrad)" />
      <path d="M39 5L50 16H42C40.34 16 39 14.66 39 13V5Z" fill="#CBD5E1" />
      {/* Document details */}
      <rect x="20" y="24" width="24" height="3" rx="1.5" fill="#2563EB" />
      <rect x="20" y="31" width="16" height="2.5" rx="1.25" fill="#64748B" />
      <rect x="20" y="37" width="24" height="2" rx="1" fill="#94A3B8" />
      <rect x="20" y="42" width="20" height="2" rx="1" fill="#CBD5E1" />
      <rect x="20" y="47" width="14" height="2" rx="1" fill="#CBD5E1" />
    </g>
  </svg>
);

// Figma Icon (Refined glossy black squircle with precision 5-color emblem)
export const FigmaDesktopIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" width="58" height="58" fill="none" className="desktop-custom-svg">
    <defs>
      <linearGradient id="figmaBg" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2A2A2E" />
        <stop offset="1" stopColor="#141416" />
      </linearGradient>
      <linearGradient id="figmaBezel" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.3" />
        <stop offset="0.4" stopColor="white" stopOpacity="0.05" />
        <stop offset="1" stopColor="black" stopOpacity="0.5" />
      </linearGradient>
      <filter id="figmaDrop" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
      </filter>
    </defs>
    <rect width="64" height="64" rx="15" fill="url(#figmaBg)" filter="url(#figmaDrop)" />
    <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="14.25" stroke="url(#figmaBezel)" strokeWidth="1.5" />
    <g transform="translate(19, 13)">
      <path d="M6.5 13C6.5 9.41 9.41 6.5 13 6.5H19.5V19.5H13C9.41 19.5 6.5 16.59 6.5 13Z" fill="#F24E1E" />
      <path d="M19.5 6.5H26C29.59 6.5 32.5 9.41 32.5 13C32.5 16.59 29.59 19.5 26 19.5H19.5V6.5Z" fill="#FF7262" />
      <path d="M19.5 19.5H26C29.59 19.5 32.5 22.41 32.5 26C32.5 29.59 29.59 32.5 26 32.5C22.41 32.5 19.5 29.59 19.5 26V19.5Z" fill="#1ABCFE" />
      <path d="M6.5 26C6.5 22.41 9.41 19.5 13 19.5H19.5V32.5H13C9.41 32.5 6.5 29.59 6.5 26Z" fill="#A259FF" />
      <path d="M6.5 39C6.5 35.41 9.41 32.5 13 32.5H19.5V39C19.5 42.59 16.59 45.5 13 45.5C9.41 45.5 6.5 42.59 6.5 39Z" fill="#0ACF83" />
    </g>
  </svg>
);

// About Me (AppStore Blue squircle with dimensional ruler-pencil 'A')
export const AboutMeDesktopIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" width="58" height="58" fill="none" className="desktop-custom-svg">
    <defs>
      <linearGradient id="appStoreGrad" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="0.6" stopColor="#0284C7" />
        <stop offset="1" stopColor="#0369A1" />
      </linearGradient>
      <linearGradient id="appStoreBezel" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.45" />
        <stop offset="0.4" stopColor="white" stopOpacity="0.08" />
        <stop offset="1" stopColor="black" stopOpacity="0.3" />
      </linearGradient>
      <filter id="appStoreDrop" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#024068" floodOpacity="0.35" />
      </filter>
    </defs>
    <rect width="64" height="64" rx="15" fill="url(#appStoreGrad)" filter="url(#appStoreDrop)" />
    <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="14.25" stroke="url(#appStoreBezel)" strokeWidth="1.5" />
    <path
      d="M32 15L30.1 19.4L38.4 36.8H43.7L32 15ZM26.9 26.5L22.4 36.8H17.1L25 21.6L26.9 26.5ZM35.7 41.1H19.7L22.1 46.9H33.2L35.7 41.1Z"
      fill="white"
    />
  </svg>
);

// Folder Icon (Authentic macOS Catalina/Big Sur sky-blue folder with embossed front pocket)
export const FolderDesktopIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" width="58" height="58" fill="none" className="desktop-custom-svg">
    <defs>
      <linearGradient id="folderBack" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B8EDB" />
        <stop offset="1" stopColor="#1D60A3" />
      </linearGradient>
      <linearGradient id="folderFront" x1="0" y1="22" x2="0" y2="58" gradientUnits="userSpaceOnUse">
        <stop stopColor="#67B6F6" />
        <stop offset="0.1" stopColor="#55A7EE" />
        <stop offset="1" stopColor="#2E80D2" />
      </linearGradient>
      <filter id="folderDrop" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#0F3B66" floodOpacity="0.32" />
      </filter>
    </defs>
    <g filter="url(#folderDrop)">
      {/* Back tab */}
      <path d="M9 19C9 16.79 10.79 15 13 15H25.5L30 19.5H51C53.21 19.5 55 21.29 55 23.5V49C55 51.21 53.21 53 51 53H13C10.79 53 9 51.21 9 49V19Z" fill="url(#folderBack)" />
      {/* Front pocket */}
      <rect x="9" y="24" width="46" height="29" rx="4.5" fill="url(#folderFront)" />
      <rect x="9" y="23" width="46" height="1.5" fill="#8AC9FF" />
    </g>
  </svg>
);


// =========================================================================
// 2. CLEAN HIGH-DPI IMAGE-ONLY PROJECT THUMBNAILS (Native Raster, Zero Subpixel Blur)
// =========================================================================

export interface ProjectThumbnailCardProps {
  image: string;
  clipId?: string;
  urlLabel?: string;
}

export const ProjectThumbnailCard: React.FC<ProjectThumbnailCardProps> = ({
  image,
}) => (
  <div className="desktop-thumb-squircle">
    <img
      src={image}
      alt=""
      className="desktop-thumb-img"
      loading="eager"
      decoding="async"
    />
    <div className="desktop-thumb-bezel" />
  </div>
);

// 1. Google Ads Dashboard Thumbnail (Right-Upper)
export const GoogleAdsDashboardThumbnailArt: React.FC = () => (
  <ProjectThumbnailCard
    image="/images/googleadsdashboard.jpg"
    clipId="thumb-googleads-dashboard"
  />
);

// 2. Google Ads Analytics Thumbnail (Left)
export const GoogleAdsAnalyticsThumbnailArt: React.FC = () => (
  <ProjectThumbnailCard
    image="/images/googleadsanalytics.jpg"
    clipId="thumb-googleads-analytics"
  />
);

// 3. Express Analytics Dashboard Thumbnail (Center-Left)
export const ExpressAnalyticsThumbnailArt: React.FC = () => (
  <ProjectThumbnailCard
    image="/images/express.webp"
    clipId="thumb-express-analytics"
  />
);

// 4. FYP Media Thumbnail (Right-Center)
export const FypMediaThumbnailArt: React.FC = () => (
  <ProjectThumbnailCard
    image="/images/fypmedia.webp"
    clipId="thumb-fyp-media"
  />
);

// 5. ZenHome Thumbnail (Left-Lower)
export const ZenHomeThumbnailArt: React.FC = () => (
  <ProjectThumbnailCard
    image="/images/zenhome.webp"
    clipId="thumb-zenhome"
  />
);

// 6. ASUS Fits For U Thumbnail (Middle-Right)
export const AsusFitsForUThumbnailArt: React.FC = () => (
  <ProjectThumbnailCard
    image="/images/asusaicover.png"
    clipId="thumb-asusfitsforu"
  />
);

// 7. ABNA PICKS Thumbnail
export const AbnaPicksThumbnailArt: React.FC = () => (
  <ProjectThumbnailCard
    image="/images/abna%20picks/hero%20abnapicks.jpeg"
    clipId="thumb-abnapicks"
  />
);

export const AbnaCommerceThumbnailArt: React.FC = () => (
  <ProjectThumbnailCard
    image="/images/abna%20commerce/abna%20hero%20section.png"
    clipId="thumb-abnacommerce"
  />
);

// Atria Thumbnail — Architecture/Studio (Photo gallery grid)
export const AtriaThumbnailArt: React.FC = () => (
  <svg viewBox="0 0 120 120" width="58" height="58" fill="none" className="desktop-custom-svg">
    <defs>
      <clipPath id="atriaClip"><rect width="120" height="120" rx="22" /></clipPath>
      <filter id="atriaDrop" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#1e293b" floodOpacity="0.3" />
      </filter>
      <linearGradient id="atriaA1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d97706" /><stop offset="1" stopColor="#b45309" /></linearGradient>
      <linearGradient id="atriaA2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#64748b" /><stop offset="1" stopColor="#475569" /></linearGradient>
      <linearGradient id="atriaA3" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#374151" /><stop offset="1" stopColor="#1f2937" /></linearGradient>
      <linearGradient id="atriaA4" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b45309" /><stop offset="1" stopColor="#92400e" /></linearGradient>
    </defs>
    <g filter="url(#atriaDrop)" clipPath="url(#atriaClip)">
      <rect width="120" height="120" rx="22" fill="#f8fafc" />
      {/* Browser bar */}
      <rect width="120" height="18" fill="#f1f5f9" />
      <circle cx="12" cy="9" r="2.5" fill="#ff5f56" />
      <circle cx="20" cy="9" r="2.5" fill="#ffbd2e" />
      <circle cx="28" cy="9" r="2.5" fill="#27c93f" />
      <text x="68" y="12" fill="#64748b" fontSize="6" fontWeight="500" textAnchor="middle" fontFamily="sans-serif">atria.arch</text>
      {/* 2x2 image grid */}
      <rect x="8" y="24" width="50" height="38" rx="5" fill="url(#atriaA1)" />
      <rect x="62" y="24" width="50" height="38" rx="5" fill="url(#atriaA2)" />
      <rect x="8" y="66" width="50" height="30" rx="5" fill="url(#atriaA3)" />
      <rect x="62" y="66" width="50" height="30" rx="5" fill="url(#atriaA4)" />
      {/* Title text */}
      <rect x="30" y="104" width="60" height="3" rx="1.5" fill="#94a3b8" />
      <rect x="42" y="110" width="36" height="2" rx="1" fill="#cbd5e1" />
      <rect x="0.75" y="0.75" width="118.5" height="118.5" rx="21.25" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

// Interstellar Thumbnail — Cinematic space/movie poster
export const InterstellarThumbnailArt: React.FC = () => (
  <svg viewBox="0 0 120 120" width="58" height="58" fill="none" className="desktop-custom-svg">
    <defs>
      <clipPath id="interClip"><rect width="120" height="120" rx="22" /></clipPath>
      <filter id="interDrop" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.42" />
      </filter>
      <radialGradient id="interSky" cx="60%" cy="25%" r="55%">
        <stop stopColor="#38bdf8" stopOpacity="0.4" /><stop offset="1" stopColor="transparent" />
      </radialGradient>
      <radialGradient id="interGlow" cx="50%" cy="50%" r="20%">
        <stop stopColor="#38bdf8" stopOpacity="0.15" /><stop offset="1" stopColor="transparent" />
      </radialGradient>
    </defs>
    <g filter="url(#interDrop)" clipPath="url(#interClip)">
      <rect width="120" height="120" rx="22" fill="#020617" />
      {/* Sky glow */}
      <rect width="120" height="120" fill="url(#interSky)" />
      {/* Stars */}
      <circle cx="20" cy="18" r="1.2" fill="white" opacity="0.8" />
      <circle cx="85" cy="12" r="0.8" fill="white" opacity="0.6" />
      <circle cx="45" cy="28" r="1" fill="white" opacity="0.5" />
      <circle cx="100" cy="35" r="0.7" fill="white" opacity="0.4" />
      <circle cx="15" cy="55" r="0.9" fill="white" opacity="0.35" />
      <circle cx="105" cy="65" r="1.1" fill="white" opacity="0.3" />
      <circle cx="70" cy="22" r="0.6" fill="white" opacity="0.5" />
      {/* Planet ring */}
      <circle cx="60" cy="52" r="18" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.25" fill="none" />
      <circle cx="60" cy="52" r="12" stroke="#e2e8f0" strokeWidth="0.5" strokeOpacity="0.15" fill="none" />
      <rect width="120" height="120" fill="url(#interGlow)" />
      {/* Horizon gradient */}
      <rect y="85" width="120" height="35" fill="rgba(0,0,0,0.85)" />
      {/* Title */}
      <text x="60" y="102" fill="#e2e8f0" fontSize="7.5" fontWeight="800" letterSpacing="3" textAnchor="middle" fontFamily="sans-serif">INTERSTELLAR</text>
      <rect x="30" y="108" width="60" height="1" fill="#475569" opacity="0.5" />
      <rect x="0.75" y="0.75" width="118.5" height="118.5" rx="21.25" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

// Gallery / Photos App Desktop Icon (macOS Apple Photos flower icon with colorful petals and glossy squircle)
export const GalleryDesktopIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" width="58" height="58" fill="none" className="desktop-custom-svg">
    <defs>
      <linearGradient id="photosDeskBezel" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.85" />
        <stop offset="0.4" stopColor="white" stopOpacity="0.2" />
        <stop offset="1" stopColor="black" stopOpacity="0.15" />
      </linearGradient>
      <radialGradient id="photosDeskGlow" cx="50%" cy="20%" r="70%">
        <stop stopColor="white" stopOpacity="0.3" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <filter id="photosDeskDrop" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.28" />
      </filter>
    </defs>
    <rect width="64" height="64" rx="15" fill="#FFFFFF" filter="url(#photosDeskDrop)" />
    <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="14.25" stroke="url(#photosDeskBezel)" strokeWidth="1.5" />
    <g transform="translate(32, 32)">
      {/* 8 colorful petals radiating outward */}
      <ellipse cx="0" cy="-13" rx="5.5" ry="8" fill="#FF3B30" opacity="0.95" />
      <g transform="rotate(45)">
        <ellipse cx="0" cy="-13" rx="5.5" ry="8" fill="#FF9500" opacity="0.95" />
      </g>
      <g transform="rotate(90)">
        <ellipse cx="0" cy="-13" rx="5.5" ry="8" fill="#FFCC00" opacity="0.95" />
      </g>
      <g transform="rotate(135)">
        <ellipse cx="0" cy="-13" rx="5.5" ry="8" fill="#34C759" opacity="0.95" />
      </g>
      <g transform="rotate(180)">
        <ellipse cx="0" cy="-13" rx="5.5" ry="8" fill="#00C7BE" opacity="0.95" />
      </g>
      <g transform="rotate(225)">
        <ellipse cx="0" cy="-13" rx="5.5" ry="8" fill="#007AFF" opacity="0.95" />
      </g>
      <g transform="rotate(270)">
        <ellipse cx="0" cy="-13" rx="5.5" ry="8" fill="#5856D6" opacity="0.95" />
      </g>
      <g transform="rotate(315)">
        <ellipse cx="0" cy="-13" rx="5.5" ry="8" fill="#AF52DE" opacity="0.95" />
      </g>
      <circle cx="0" cy="0" r="4.5" fill="#FFFFFF" />
    </g>
    <rect x="2" y="2" width="60" height="60" rx="13" fill="url(#photosDeskGlow)" />
  </svg>
);
