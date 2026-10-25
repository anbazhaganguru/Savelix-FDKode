import React from 'react';

/**
 * FounderBotanicalDecor
 *
 * Code-based botanical vector ornamentation framing the SAVELIX founder portrait.
 * Strictly 100% SVG and CSS paths — zero raster images or downloaded graphics.
 *
 * Framing choreography:
 * 1. Ambient lavender radial glow and soft organic backdrop sweep curve
 * 2. Left / upper-left botanical branch with arched stem, delicate lanceolate leaves, and fine vein accents
 * 3. Lower-left delicate accent leaves framing the bottom-left edge
 * 4. Bottom-right botanical branch ascending gracefully around the lower-right corner
 * 5. Mobile-refined positioning so leaves are fully visible in the side margins
 */
export default function FounderBotanicalDecor({ isHovered = false }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-visible select-none"
      aria-hidden="true"
    >
      {/* 1. Ambient Lavender Radial Glow */}
      <div
        className={`absolute -inset-4 sm:-inset-10 lg:-inset-12 rounded-[48px] sm:rounded-[52px] bg-gradient-to-tr from-savelix-purple/18 via-savelix-lavender/45 to-transparent blur-xl sm:blur-2xl lg:blur-3xl transition-[transform,opacity] duration-700 ${ // taste-skill-ignore
          isHovered ? 'opacity-100 scale-105' : 'opacity-85 scale-100'
        }`}
      />

      {/* 2. Soft Organic Backdrop Sweep Curve (Layered behind frame) */}
      <svg
        className="absolute -top-8 -left-8 w-[120%] h-[115%] sm:-top-16 sm:-left-16 sm:w-[130%] sm:h-[125%] opacity-55 sm:opacity-65 transition-transform duration-700 ease-out"
        viewBox="0 0 640 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: isHovered ? 'scale(1.025) translate(-3px, -4px)' : 'scale(1)',
        }}
      >
        <defs>
          <linearGradient id="backdropAuraRefined" x1="40" y1="40" x2="600" y2="760" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EDE5F4" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#F2ECF7" stopOpacity="0.55" />
            <stop offset="85%" stopColor="#EDE5F4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8065A8" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M 140 45 C 300 -15, 520 20, 580 160 C 640 300, 620 520, 545 660 C 470 800, 280 810, 150 740 C 25 670, -15 480, 12 310 C 35 150, 65 70, 140 45 Z"
          fill="url(#backdropAuraRefined)"
        />
      </svg>

      {/* 3. Left / Upper-Left Botanical Branch (Curving outwards and upwards) */}
      <div
        className={`absolute -left-9 xs:-left-11 sm:-left-18 lg:-left-22 top-[20%] sm:top-[30%] lg:top-[34%] w-22 xs:w-26 sm:w-36 lg:w-40 h-44 xs:h-50 sm:h-60 lg:h-64 transition-transform duration-700 ease-out ${
          isHovered ? '-translate-x-2.5 -translate-y-1.5 rotate-[-2.5deg]' : 'translate-x-0 translate-y-0 rotate-0'
        }`}
      >
        <svg
          viewBox="0 0 180 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="lStem" x1="175" y1="240" x2="15" y2="25" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6C528F" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8065A8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9B82C0" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="lLeaf1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9B82C0" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#8065A8" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="lLeaf2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B4A1D4" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#6C528F" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="lLeaf3" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#8065A8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C4B2E0" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Gracefully arched main stem */}
          <path
            d="M 175 235 Q 130 185 92 135 T 26 38"
            stroke="url(#lStem)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Leaf 1: Lower Outer Leaf */}
          <g>
            <path
              d="M 138 195 C 115 208 92 205 76 190 C 92 180 120 182 138 195 Z"
              fill="url(#lLeaf1)"
            />
            <path d="M 138 195 Q 106 193 76 190" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          {/* Leaf 2: Lower Inner Leaf */}
          <g>
            <path
              d="M 126 180 C 122 156 134 138 154 130 C 148 149 140 166 126 180 Z"
              fill="url(#lLeaf2)"
            />
            <path d="M 126 180 Q 139 155 154 130" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          {/* Leaf 3: Mid Branch Left Leaf */}
          <g>
            <path
              d="M 98 142 C 70 150 48 142 32 124 C 54 118 82 124 98 142 Z"
              fill="url(#lLeaf1)"
            />
            <path d="M 98 142 Q 65 134 32 124" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          {/* Leaf 4: Mid Branch Right Leaf */}
          <g>
            <path
              d="M 85 125 C 85 101 98 84 118 72 C 111 92 100 112 85 125 Z"
              fill="url(#lLeaf3)"
            />
            <path d="M 85 125 Q 101 101 118 72" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          {/* Leaf 5: Upper Branch Left Leaf */}
          <g>
            <path
              d="M 56 86 C 32 90 16 80 5 62 C 24 60 46 69 56 86 Z"
              fill="url(#lLeaf1)"
            />
            <path d="M 56 86 Q 30 77 5 62" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          {/* Leaf 6: Upper Branch Right Leaf */}
          <g>
            <path
              d="M 46 72 C 48 50 62 36 80 26 C 72 44 60 61 46 72 Z"
              fill="url(#lLeaf2)"
            />
            <path d="M 46 72 Q 62 50 80 26" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          {/* Leaf 7: Terminal Tip Leaf */}
          <g>
            <path
              d="M 26 38 C 17 24 19 10 28 2 C 35 11 34 26 26 38 Z"
              fill="url(#lLeaf1)"
            />
            <path d="M 26 38 Q 26 22 28 2" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>
        </svg>
      </div>

      {/* 4. Lower-Left Accent Leaves (Specifically framing the lower-left corner) */}
      <div
        className={`absolute -left-6 xs:-left-8 sm:-left-12 lg:-left-14 bottom-[16%] sm:bottom-[18%] w-16 xs:w-18 sm:w-24 lg:w-28 h-24 xs:h-28 sm:h-36 lg:h-40 transition-transform duration-700 ease-out ${
          isHovered ? '-translate-x-1.5 translate-y-1 rotate-[-2deg]' : 'translate-x-0 translate-y-0 rotate-0'
        }`}
      >
        <svg
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M 85 110 C 65 90, 45 65, 20 40"
            stroke="#8065A8"
            strokeWidth="2"
            strokeOpacity="0.85"
            strokeLinecap="round"
          />
          {/* Leaf 1 */}
          <path
            d="M 60 88 C 42 94, 30 85, 24 72 C 38 68, 54 74, 60 88 Z"
            fill="#9B82C0"
            opacity="0.9"
          />
          {/* Leaf 2 */}
          <path
            d="M 45 66 C 30 68, 18 58, 10 44 C 24 42, 38 48, 45 66 Z"
            fill="#B4A1D4"
            opacity="0.85"
          />
          {/* Leaf 3 */}
          <path
            d="M 20 40 C 14 28, 18 16, 26 10 C 30 18, 28 30, 20 40 Z"
            fill="#8065A8"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* 5. Bottom-Right Botanical Branch (Ascending gracefully behind lower-right corner) */}
      <div
        className={`absolute -right-8 xs:-right-10 sm:-right-16 lg:-right-20 bottom-6 xs:bottom-8 sm:bottom-10 lg:bottom-12 w-22 xs:w-26 sm:w-36 lg:w-40 h-44 xs:h-50 sm:h-64 lg:h-72 transition-transform duration-700 ease-out ${
          isHovered ? 'translate-x-2.5 -translate-y-2 rotate-[2.5deg]' : 'translate-x-0 translate-y-0 rotate-0'
        }`}
      >
        <svg
          viewBox="0 0 180 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="rStem" x1="15" y1="270" x2="165" y2="25" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6C528F" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8065A8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9B82C0" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="rLeaf1" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#8065A8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#B4A1D4" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="rLeaf2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9B82C0" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#6C528F" stopOpacity="0.85" />
            </linearGradient>
          </defs>

          {/* Upward curved main stem */}
          <path
            d="M 16 270 Q 62 220 102 155 T 160 32"
            stroke="url(#rStem)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Leaf 1: Lowest Branch Leaf */}
          <g>
            <path
              d="M 44 232 C 67 244 92 243 110 228 C 92 217 65 217 44 232 Z"
              fill="url(#rLeaf1)"
            />
            <path d="M 44 232 Q 78 232 110 228" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          {/* Leaf 2: Lower-Mid Right Leaf */}
          <g>
            <path
              d="M 70 196 C 97 200 122 191 138 171 C 115 164 88 173 70 196 Z"
              fill="url(#rLeaf2)"
            />
            <path d="M 70 196 Q 106 187 138 171" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          {/* Leaf 3: Lower-Mid Left Leaf */}
          <g>
            <path
              d="M 77 188 C 72 162 56 146 36 137 C 45 157 58 176 77 188 Z"
              fill="url(#rLeaf1)"
            />
            <path d="M 77 188 Q 59 162 36 137" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          {/* Leaf 4: Upper-Mid Right Leaf */}
          <g>
            <path
              d="M 110 142 C 137 140 157 127 170 105 C 147 103 125 116 110 142 Z"
              fill="url(#rLeaf2)"
            />
            <path d="M 110 142 Q 141 127 170 105" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          {/* Leaf 5: Upper-Mid Left Leaf */}
          <g>
            <path
              d="M 122 128 C 115 104 101 90 81 79 C 90 101 104 118 122 128 Z"
              fill="url(#rLeaf1)"
            />
            <path d="M 122 128 Q 104 104 81 79" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          {/* Leaf 6: Sub-terminal Leaf */}
          <g>
            <path
              d="M 144 78 C 164 71 176 56 180 37 C 160 40 146 56 144 78 Z"
              fill="url(#rLeaf2)"
            />
            <path d="M 144 78 Q 164 58 180 37" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          {/* Leaf 7: Terminal Tip Leaf */}
          <g>
            <path
              d="M 160 32 C 164 17 160 5 149 -2 C 142 9 144 23 160 32 Z"
              fill="url(#rLeaf1)"
            />
            <path d="M 160 32 Q 155 17 149 -2" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}
