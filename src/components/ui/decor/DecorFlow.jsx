import React from 'react';

/**
 * DecorFlow
 *
 * Minimalist, fluid organic contour lines representing mental wellbeing, emotional flow, and calmness.
 * Incorporates subtle echoes of gentle cranial / profile curves, harmonic wave paths,
 * and translucent lavender/purple petal accents that echo the SAVELIX brand language.
 *
 * Designed for spacious outer section corners (Services, Conditions We Support).
 * Ready for future GSAP scroll-reveal via `.savelix-decor` and `.savelix-decor--flow`.
 */
export default function DecorFlow({
  className = '',
  variant = 'right', // 'right' | 'left' | 'top-right' | 'bottom-left' | 'side-left'
  opacity = 'opacity-60 sm:opacity-75 lg:opacity-85',
  size = 'w-48 sm:w-64 lg:w-80 xl:w-[420px] h-auto',
}) {
  const isLeft = variant === 'left' || variant === 'side-left' || variant === 'top-left';
  const gradId = `flow-${variant}`;

  return (
    <div
      aria-hidden="true"
      className={`savelix-decor savelix-decor--flow pointer-events-none select-none absolute z-0 ${opacity} ${className}`}
    >
      <svg
        viewBox="0 0 460 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${size} ${isLeft ? '-scale-x-100' : ''} transition-opacity duration-500`}
      >
        <defs>
          {/* Ribbon Fill Gradient */}
          <linearGradient id={`${gradId}-ribbon`} x1="40" y1="60" x2="440" y2="330" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EDE5F4" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#B4A1D4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8065A8" stopOpacity="0.08" />
          </linearGradient>

          {/* Stroke Gradient 1 (Muted Purple to Soft Lavender) */}
          <linearGradient id={`${gradId}-stroke1`} x1="20" y1="40" x2="440" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8065A8" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#9B82C0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#EDE5F4" stopOpacity="0.15" />
          </linearGradient>

          {/* Stroke Gradient 2 (Restrained Logo Blue to Plum) */}
          <linearGradient id={`${gradId}-stroke2`} x1="440" y1="40" x2="30" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1866AE" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#8065A8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#5BB92E" stopOpacity="0.2" />
          </linearGradient>

          {/* Leaf Accent Fills */}
          <linearGradient id={`${gradId}-leaf`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EDE5F4" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#9B82C0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8065A8" stopOpacity="0.25" />
          </linearGradient>

          {/* Soft Atmospheric Blur */}
          <radialGradient id={`${gradId}-aura`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EDE5F4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#EDE5F4" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft atmospheric background glow */}
        <ellipse cx="240" cy="190" rx="170" ry="120" fill={`url(#${gradId}-aura)`} />

        {/* Translucent flowing organic ribbon (harmonic wellness band) */}
        <path
          d="M 40 60 C 150 25, 260 85, 320 165 C 375 235, 405 295, 440 330 C 420 340, 365 310, 325 245 C 275 165, 175 110, 40 60 Z"
          fill={`url(#${gradId}-ribbon)`}
        />

        {/* Primary harmonic flowing contour: cranial/profile serenity curve */}
        <path
          d="M 25 45 C 145 15, 260 85, 320 165 C 365 230, 395 290, 440 325"
          stroke={`url(#${gradId}-stroke1)`}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Parallel secondary resonance wave */}
        <path
          d="M 55 75 C 165 50, 275 115, 330 190 C 365 240, 395 280, 430 295"
          stroke={`url(#${gradId}-stroke2)`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Breath rhythm dashed counter-arc */}
        <path
          d="M 390 35 C 320 75, 230 75, 170 135 C 110 195, 90 275, 35 325"
          stroke={`url(#${gradId}-stroke1)`}
          strokeWidth="1.5"
          strokeDasharray="6 4"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Delicate organic leaf / petal accents sprouting from the flow */}
        <path
          d="M 320 165 C 345 150, 365 155, 375 170 C 365 185, 340 185, 320 165 Z"
          fill={`url(#${gradId}-leaf)`}
          stroke="#8065A8"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <path
          d="M 170 135 C 150 120, 135 125, 125 140 C 135 155, 155 155, 170 135 Z"
          fill={`url(#${gradId}-leaf)`}
          stroke="#8065A8"
          strokeWidth="1"
          strokeOpacity="0.35"
        />

        {/* Inner calm looping resonance */}
        <path
          d="M 230 115 C 280 100, 325 140, 310 190 C 295 235, 230 220, 200 260 C 175 295, 195 330, 230 340"
          stroke={`url(#${gradId}-stroke2)`}
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* Harmonious balance nodes along the trajectory */}
        <circle cx="320" cy="165" r="4" fill="#8065A8" fillOpacity="0.6" />
        <circle cx="170" cy="135" r="3" fill="#1866AE" fillOpacity="0.5" />
        <circle cx="375" cy="170" r="2.5" fill="#5BB92E" fillOpacity="0.55" />
        <circle cx="440" cy="325" r="3.5" fill="#8065A8" fillOpacity="0.45" />
        <circle cx="35" cy="325" r="2.5" fill="#8065A8" fillOpacity="0.4" />
      </svg>
    </div>
  );
}
