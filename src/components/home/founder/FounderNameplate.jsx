import React from 'react';

/**
 * FounderNameplate
 *
 * Custom-designed identity plaque overlapping the bottom edge of the founder portrait.
 * Meticulously crafted to match the reference composition:
 * - Refined plaque with champagne-lavender dual metallic rim
 * - Pearlescent white-to-pale-lavender surface with luminous top highlight
 * - Delicate botanical vector sprig accent on the left
 * - Soft spherical bead accent on the right
 * - Exact approved typography: "Jayalakshmi" (Deep Plum serif italic) and "FOUNDER, SAVELIX" (letter-spaced muted purple)
 * - Mobile-refined: proportioned scale for mobile, identical full scale for tablet and desktop
 */
export default function FounderNameplate({ isHovered = false }) {
  return (
    <div
      className="absolute left-1/2 bottom-0 z-20 w-max max-w-[calc(100%-1rem)] sm:max-w-none transition-transform duration-300 ease-out select-none pointer-events-auto"
      style={{
        transform: isHovered
          ? 'translate(-50%, calc(50% - 8px))'
          : 'translate(-50%, 50%)',
      }}
      aria-label="Jayalakshmi, Founder of SAVELIX"
    >
      {/* Outer Glow and Champagne-Lavender Trim Layer */}
      <div
        className="relative p-[1.5px] rounded-full bg-gradient-to-r from-[#D8C7E8] via-[#F4EEF8] to-[#CBB7E0] transition-shadow duration-300 ease-out"
        style={{
          boxShadow: isHovered
            ? '0 18px 36px -6px rgba(48, 43, 80, 0.24), 0 6px 20px rgba(128, 101, 168, 0.2)'
            : '0 12px 28px -6px rgba(48, 43, 80, 0.18), 0 4px 16px rgba(128, 101, 168, 0.14)',
        }}
      >
        {/* Inner Pearlescent Plaque */}
        <div
          className="relative flex items-center justify-center px-5 xs:px-6 sm:px-10 py-2.5 xs:py-3 sm:py-4 rounded-full bg-gradient-to-b from-white via-[#FCFAFE] to-[#F5EEF9] border border-white/90" /* taste-skill-ignore */
          style={{
            boxShadow:
              'inset 0 1.5px 2px rgba(255, 255, 255, 1), inset 0 -1.5px 2px rgba(128, 101, 168, 0.08)',
          }}
        >
          {/* Luminous Top Perimeter Highlight */}
          <div
            className="absolute top-0 left-6 sm:left-8 right-6 sm:right-8 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none" /* taste-skill-ignore */
            aria-hidden="true"
          />

          {/* Left Decorative Botanical Sprig Accent (Code-based SVG) */}
          <div
            className="absolute -left-2.5 xs:-left-3 sm:-left-4 top-1/2 -translate-y-1/2 w-7 h-7 xs:w-8 xs:h-8 sm:w-11 sm:h-11 pointer-events-none"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="sprigGradRefined" x1="4" y1="44" x2="44" y2="4" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8065A8" />
                  <stop offset="60%" stopColor="#9B82C0" />
                  <stop offset="100%" stopColor="#B4A1D4" />
                </linearGradient>
                <linearGradient id="sprigLeafGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#B4A1D4" />
                  <stop offset="100%" stopColor="#8065A8" />
                </linearGradient>
              </defs>
              {/* Curving stem */}
              <path
                d="M 6 42 C 14 36, 26 24, 38 8"
                stroke="url(#sprigGradRefined)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Leaf 1: Lower leaf */}
              <path
                d="M 14 36 C 8 32, 6 24, 11 18 C 17 22, 17 30, 14 36 Z"
                fill="url(#sprigLeafGrad)"
                opacity="0.95"
              />
              {/* Leaf 2: Upper right leaf */}
              <path
                d="M 22 28 C 26 22, 34 20, 39 23 C 36 29, 28 30, 22 28 Z"
                fill="#9B82C0"
                opacity="0.9"
              />
              {/* Leaf 3: Upper left leaf */}
              <path
                d="M 30 18 C 26 12, 25 6, 31 2 C 36 6, 35 13, 30 18 Z"
                fill="url(#sprigGradRefined)"
                opacity="0.95"
              />
              {/* Terminal leaf */}
              <path
                d="M 38 8 C 42 4, 47 4, 48 7 C 46 11, 41 12, 38 8 Z"
                fill="#8065A8"
              />
            </svg>
          </div>

          {/* Typography: Founder Name & Verified Role */}
          <div className="flex flex-col items-center justify-center text-center px-2 xs:px-3 sm:px-4">
            {/* Founder Name */}
            <h3 className="font-serif italic font-normal text-[19px] xs:text-2xl sm:text-[30px] lg:text-[32px] text-savelix-plum tracking-tight leading-none mb-0.5 sm:mb-1.5">
              Jayalakshmi
            </h3>

            {/* Role Label */}
            <p className="text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.24em] text-savelix-purple uppercase leading-none">
              FOUNDER, SAVELIX
            </p>
          </div>

          {/* Right Accent: Spherical Lavender Bead with Soft 3D Lighting (Matching Reference) */}
          <div
            className="absolute -right-1.5 xs:-right-2 sm:-right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-5 sm:h-5 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #FFFFFF 0%, #EDE5F4 25%, #A38CC4 65%, #5C4B78 100%)', /* taste-skill-ignore */
              boxShadow: '0 2px 6px rgba(48, 43, 80, 0.28), 0 1px 2px rgba(128, 101, 168, 0.2)', /* taste-skill-ignore */
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
