import React from 'react';

/**
 * DecorBotanical
 *
 * Lightweight, scalable SVG botanical branch with organic curving stems and lanceolate leaves.
 * Echoes the SAVELIX brand healing motif: renewal, growth, and living recovery.
 *
 * Designed for section edges with non-intrusive low opacity and smooth gradient fills.
 * Ready for future GSAP scroll-reveal via `.savelix-decor` and `.savelix-decor--botanical`.
 */
export default function DecorBotanical({
  className = '',
  variant = 'right', // 'right' (ascending to right edge) | 'left' (ascending to left edge)
  opacity = 'opacity-60 sm:opacity-75 lg:opacity-85',
  size = 'w-48 sm:w-64 lg:w-80 xl:w-96 h-auto',
}) {
  const isRight = variant === 'right';

  return (
    <div
      aria-hidden="true"
      className={`savelix-decor savelix-decor--botanical pointer-events-none select-none absolute z-0 ${opacity} ${className}`}
    >
      <svg
        viewBox="0 0 320 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${size} ${isRight ? '' : '-scale-x-100'} transition-opacity duration-500`}
      >
        <defs>
          <linearGradient id={`botStem-${variant}`} x1="20" y1="380" x2="300" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8065A8" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#8065A8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#9B82C0" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id={`botLeaf1-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9B82C0" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#8065A8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#302B50" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id={`botLeaf2-${variant}`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#EDE5F4" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#B4A1D4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8065A8" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id={`botAccent-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5BB92E" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#169B73" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Ambient background soft blossom blur */}
        <circle cx="180" cy="180" r="110" fill="#EDE5F4" fillOpacity="0.45" filter="blur(30px)" />

        {/* Gracefully arched main stem */}
        <path
          d="M 30 380 Q 80 270 160 180 T 290 30"
          stroke={`url(#botStem-${variant})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Secondary fine branching curve */}
        <path
          d="M 125 220 Q 95 180 85 130"
          stroke={`url(#botStem-${variant})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 2"
          opacity="0.7"
        />

        {/* Leaf Cluster 1: Lower stem leaves */}
        <g>
          <path
            d="M 68 330 C 35 340 18 315 28 290 C 50 300 65 315 68 330 Z"
            fill={`url(#botLeaf1-${variant})`}
          />
          <path d="M 68 330 Q 42 312 28 290" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
        </g>
        <g>
          <path
            d="M 92 300 C 120 285 140 300 135 325 C 115 315 98 310 92 300 Z"
            fill={`url(#botLeaf2-${variant})`}
          />
        </g>

        {/* Leaf Cluster 2: Mid stem leaves with brand green touch */}
        <g>
          <path
            d="M 120 230 C 85 240 60 215 72 185 C 98 198 115 215 120 230 Z"
            fill={`url(#botLeaf1-${variant})`}
          />
          <path d="M 120 230 Q 90 208 72 185" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
        </g>
        <g>
          <path
            d="M 152 190 C 185 170 205 185 200 212 C 178 202 160 198 152 190 Z"
            fill={`url(#botAccent-${variant})`}
          />
        </g>

        {/* Leaf Cluster 3: Upper branch leaves */}
        <g>
          <path
            d="M 188 150 C 160 125 170 95 198 90 C 200 115 195 138 188 150 Z"
            fill={`url(#botLeaf2-${variant})`}
          />
          <path d="M 188 150 Q 186 120 198 90" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
        </g>
        <g>
          <path
            d="M 218 120 C 250 110 268 128 260 152 C 240 140 226 132 218 120 Z"
            fill={`url(#botLeaf1-${variant})`}
          />
        </g>

        {/* Leaf Cluster 4: Terminal crown tip */}
        <g>
          <path
            d="M 252 70 C 235 45 248 20 272 18 C 274 40 265 60 252 70 Z"
            fill={`url(#botLeaf2-${variant})`}
          />
        </g>
        <g>
          <path
            d="M 290 30 C 310 20 318 35 310 50 C 298 45 292 38 290 30 Z"
            fill={`url(#botAccent-${variant})`}
          />
        </g>

        {/* Small floating vitality seed / leaf node */}
        <circle cx="210" cy="72" r="3" fill="#8065A8" fillOpacity="0.5" />
        <circle cx="140" cy="160" r="2.5" fill="#5BB92E" fillOpacity="0.4" />
        <circle cx="85" cy="270" r="3" fill="#8065A8" fillOpacity="0.4" />
      </svg>
    </div>
  );
}
