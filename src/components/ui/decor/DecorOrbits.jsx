import React from 'react';

/**
 * DecorOrbits
 *
 * Abstract circular growth rings, harmonic orbital arcs, and interconnected nodes.
 * Represents clinical collaboration, balanced care pathways, and mindful progress.
 * Features translucent lavender orbital fills and delicate milestone constellation dots.
 *
 * Designed for the Why Choose SAVELIX section, Rehabilitation, and open margins.
 * Ready for future GSAP scroll-reveal via `.savelix-decor` and `.savelix-decor--orbit`.
 */
export default function DecorOrbits({
  className = '',
  variant = 'right', // 'right' | 'left'
  opacity = 'opacity-55 sm:opacity-75 lg:opacity-85',
  size = 'w-48 sm:w-64 lg:w-80 xl:w-[400px] h-auto',
}) {
  const isLeft = variant === 'left' || variant === 'top-left' || variant === 'bottom-left';

  return (
    <div
      aria-hidden="true"
      className={`savelix-decor savelix-decor--orbit pointer-events-none select-none absolute z-0 ${opacity} ${className}`}
    >
      <svg
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${size} ${isLeft ? '-scale-x-100' : ''} transition-opacity duration-500`}
      >
        <defs>
          {/* Orbital Arc Gradient 1 */}
          <linearGradient id="orbitGrad1" x1="40" y1="40" x2="380" y2="380" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8065A8" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#9B82C0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#EDE5F4" stopOpacity="0.1" />
          </linearGradient>

          {/* Orbital Arc Gradient 2 */}
          <linearGradient id="orbitGrad2" x1="380" y1="60" x2="40" y2="360" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1866AE" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#8065A8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#5BB92E" stopOpacity="0.2" />
          </linearGradient>

          {/* Translucent Crescent Petal Fill */}
          <linearGradient id="orbitPetal" x1="80" y1="80" x2="340" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EDE5F4" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#B4A1D4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8065A8" stopOpacity="0.08" />
          </linearGradient>

          {/* Botanical Accent Fill */}
          <linearGradient id="orbitLeaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EDE5F4" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#9B82C0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8065A8" stopOpacity="0.25" />
          </linearGradient>

          {/* Atmospheric Blur */}
          <radialGradient id="orbitAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EDE5F4" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#EDE5F4" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central soft aura */}
        <circle cx="210" cy="210" r="160" fill="url(#orbitAura)" />

        {/* Translucent crescent lens between orbital axes */}
        <path
          d="M 210 60 C 290 60, 360 130, 360 210 C 310 200, 260 160, 210 60 Z"
          fill="url(#orbitPetal)"
        />
        <path
          d="M 60 210 C 130 210, 180 260, 210 360 C 130 360, 60 290, 60 210 Z"
          fill="url(#orbitPetal)"
          opacity="0.8"
        />

        {/* Outer orbital ellipse 1 (tilted -25 deg) */}
        <ellipse
          cx="210"
          cy="210"
          rx="175"
          ry="105"
          transform="rotate(-25 210 210)"
          stroke="url(#orbitGrad1)"
          strokeWidth="1.75"
          strokeDasharray="8 4"
        />

        {/* Inner orbital ellipse 2 (tilted 45 deg) */}
        <ellipse
          cx="210"
          cy="210"
          rx="150"
          ry="75"
          transform="rotate(45 210 210)"
          stroke="url(#orbitGrad2)"
          strokeWidth="1.5"
        />

        {/* Concentric growth balance circle */}
        <circle
          cx="210"
          cy="210"
          r="125"
          stroke="url(#orbitGrad1)"
          strokeWidth="1.25"
          strokeDasharray="4 6"
          strokeOpacity="0.6"
        />

        {/* Core sanctuary center circle */}
        <circle
          cx="210"
          cy="210"
          r="48"
          stroke="#8065A8"
          strokeWidth="1"
          strokeOpacity="0.35"
          fill="#EDE5F4"
          fillOpacity="0.4"
        />

        {/* Subtle connecting constellation filaments */}
        <line x1="210" y1="210" x2="350" y2="150" stroke="#8065A8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
        <line x1="210" y1="210" x2="90" y2="290" stroke="#1866AE" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
        <line x1="210" y1="210" x2="260" y2="70" stroke="#5BB92E" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />

        {/* Delicate botanical leaf accent at orbit nexus */}
        <path
          d="M 260 70 C 285 55, 305 60, 315 75 C 305 90, 280 90, 260 70 Z"
          fill="url(#orbitLeaf)"
          stroke="#8065A8"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Interconnected milestone & progress nodes */}
        <circle cx="350" cy="150" r="4.5" fill="#8065A8" fillOpacity="0.7" />
        <circle cx="90" cy="290" r="3.5" fill="#1866AE" fillOpacity="0.6" />
        <circle cx="260" cy="70" r="3.5" fill="#5BB92E" fillOpacity="0.6" />
        <circle cx="160" cy="330" r="3" fill="#8065A8" fillOpacity="0.5" />
        <circle cx="210" cy="210" r="3" fill="#302B50" fillOpacity="0.5" />
      </svg>
    </div>
  );
}
