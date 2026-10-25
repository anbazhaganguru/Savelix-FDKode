import React from 'react';

/**
 * DecorBranching
 *
 * Minimalist botanical & neural branching line art with delicate leaves and discovery nodes.
 * Represents education, clinical knowledge expansion, neuroplasticity, and human development.
 * Features translucent lavender leaf fills and restrained SAVELIX logo blue/green accents.
 *
 * Designed for Education, Training & Internship and Psychiatric Rehabilitation sections.
 * Ready for future GSAP scroll-reveal via `.savelix-decor` and `.savelix-decor--growth`.
 */
export default function DecorBranching({
  className = '',
  variant = 'right', // 'right' | 'left'
  opacity = 'opacity-60 sm:opacity-75 lg:opacity-85',
  size = 'w-48 sm:w-64 lg:w-80 xl:w-[420px] h-auto',
}) {
  const isRight = variant === 'right';
  const gradId = `branch-${variant}`;

  return (
    <div
      aria-hidden="true"
      className={`savelix-decor savelix-decor--growth pointer-events-none select-none absolute z-0 ${opacity} ${className}`}
    >
      <svg
        viewBox="0 0 380 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${size} ${isRight ? '' : '-scale-x-100'} transition-opacity duration-500`}
      >
        <defs>
          {/* Main Branch Stem Gradient */}
          <linearGradient id={`${gradId}-stem`} x1="30" y1="420" x2="350" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8065A8" stopOpacity="0.15" />
            <stop offset="40%" stopColor="#8065A8" stopOpacity="0.5" />
            <stop offset="85%" stopColor="#9B82C0" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#302B50" stopOpacity="0.75" />
          </linearGradient>

          {/* Leaf / Petal Fill Gradient 1 */}
          <linearGradient id={`${gradId}-leaf1`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EDE5F4" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#B4A1D4" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#8065A8" stopOpacity="0.3" />
          </linearGradient>

          {/* Leaf / Petal Fill Gradient 2 */}
          <linearGradient id={`${gradId}-leaf2`} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F7F3FA" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#EDE5F4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9B82C0" stopOpacity="0.3" />
          </linearGradient>

          {/* Restrained Accent Node Fill */}
          <linearGradient id={`${gradId}-accent`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5BB92E" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#169B73" stopOpacity="0.25" />
          </linearGradient>

          {/* Background Aura */}
          <radialGradient id={`${gradId}-aura`} cx="60%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#EDE5F4" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#EDE5F4" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft atmospheric background glow */}
        <ellipse cx="230" cy="180" rx="140" ry="140" fill={`url(#${gradId}-aura)`} />

        {/* Primary spine: gracefully curving growth stem */}
        <path
          d="M 40 420 C 60 330, 110 240, 170 170 C 230 100, 290 65, 340 40"
          stroke={`url(#${gradId}-stem)`}
          strokeWidth="2.25"
          strokeLinecap="round"
        />

        {/* Secondary ascending branch: theoretical knowledge */}
        <path
          d="M 120 230 C 170 200, 225 190, 280 185 C 315 180, 345 170, 365 150"
          stroke={`url(#${gradId}-stem)`}
          strokeWidth="1.75"
          strokeLinecap="round"
        />

        {/* Tertiary branch: practical clinical application */}
        <path
          d="M 175 165 C 190 125, 220 90, 260 70"
          stroke={`url(#${gradId}-stem)`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Lower supporting branch: foundational learning */}
        <path
          d="M 75 320 C 110 300, 150 300, 190 315 C 220 325, 245 330, 270 320"
          stroke={`url(#${gradId}-stem)`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Connecting conceptual filaments (neural growth / internship mentorship) */}
        <path
          d="M 280 185 C 270 145, 260 110, 260 70"
          stroke="#8065A8"
          strokeWidth="1"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
        />
        <path
          d="M 190 315 C 220 270, 250 230, 280 185"
          stroke="#1866AE"
          strokeWidth="1"
          strokeDasharray="4 4"
          strokeOpacity="0.3"
        />

        {/* Translucent leaf / petal forms blooming along branches */}
        {/* Terminal leaf pair */}
        <path
          d="M 340 40 C 365 25, 375 35, 370 55 C 355 65, 340 55, 340 40 Z"
          fill={`url(#${gradId}-leaf1)`}
          stroke="#8065A8"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <path
          d="M 340 40 C 330 20, 315 20, 310 35 C 315 50, 330 50, 340 40 Z"
          fill={`url(#${gradId}-leaf2)`}
          stroke="#8065A8"
          strokeWidth="1"
          strokeOpacity="0.35"
        />

        {/* Mid-branch leaves */}
        <path
          d="M 280 185 C 305 170, 320 175, 325 190 C 315 205, 295 205, 280 185 Z"
          fill={`url(#${gradId}-leaf1)`}
          stroke="#8065A8"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <path
          d="M 260 70 C 275 55, 290 60, 295 72 C 285 85, 270 85, 260 70 Z"
          fill={`url(#${gradId}-leaf2)`}
          stroke="#8065A8"
          strokeWidth="1"
          strokeOpacity="0.35"
        />
        <path
          d="M 190 315 C 210 305, 225 310, 230 322 C 220 335, 205 332, 190 315 Z"
          fill={`url(#${gradId}-leaf1)`}
          stroke="#8065A8"
          strokeWidth="1"
          strokeOpacity="0.35"
        />

        {/* Restrained accent sprout */}
        <path
          d="M 225 190 C 235 175, 248 178, 250 188 C 242 198, 232 196, 225 190 Z"
          fill={`url(#${gradId}-accent)`}
          stroke="#5BB92E"
          strokeWidth="0.75"
          strokeOpacity="0.45"
        />

        {/* Knowledge & milestone nodes */}
        <circle cx="340" cy="40" r="4.5" fill="#8065A8" fillOpacity="0.75" />
        <circle cx="365" cy="150" r="3.5" fill="#1866AE" fillOpacity="0.65" />
        <circle cx="260" cy="70" r="3.5" fill="#5BB92E" fillOpacity="0.6" />
        <circle cx="280" cy="185" r="4" fill="#8065A8" fillOpacity="0.6" />
        <circle cx="270" cy="320" r="3" fill="#8065A8" fillOpacity="0.5" />
        <circle cx="170" cy="170" r="3" fill="#302B50" fillOpacity="0.5" />
      </svg>
    </div>
  );
}
