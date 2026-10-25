import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official SAVELIX Brand Lockup Component
 *
 * Implements:
 * - [ SAVELIX SYMBOL IMAGE ] [ SAVELIX WORDMARK AS LIVE TEXT ]
 * - Symbol: High-resolution circular emblem with healing tree, medical cross & supporting hand
 * - Wordmark: Accessible, live text in geometric modern letterforms (Outfit 800) with smooth gradient
 *   transitioning from Deep Royal Purple (#3E227E) through Indigo, Azure Blue, Teal to Vivid Green (#5BB92E)
 * - Refined light pill backing when displayed over dark backgrounds (hero / footer)
 * - Seamless integration directly on light surfaces (sticky white navbar / mobile drawer)
 * - Proportional responsive sizing preventing header collisions
 */
export default function Logo({
  variant = 'default',
  size = 'md',
  className = '',
  withLink = true,
}) {
  // Sizing matrix for symbol and wordmark
  const sizes = {
    sm: {
      symbol: 'h-7 sm:h-7.5 w-auto',
      text: 'text-lg sm:text-xl tracking-[0.05em]',
      pill: 'px-3 py-1.5 gap-2',
      gap: 'gap-2',
    },
    md: {
      symbol: 'h-8 sm:h-8.5 md:h-9 w-auto',
      text: 'text-[20px] sm:text-[22px] md:text-[24px] tracking-[0.06em]',
      pill: 'px-3 sm:px-3.5 py-1.5 sm:py-2 gap-2.5 sm:gap-3',
      gap: 'gap-2.5 sm:gap-3',
    },
    lg: {
      symbol: 'h-10 sm:h-11 w-auto',
      text: 'text-2xl sm:text-3xl tracking-[0.06em]',
      pill: 'px-4 py-2.5 gap-3.5',
      gap: 'gap-3.5',
    },
  }[size] || {
    symbol: 'h-8 sm:h-8.5 md:h-9 w-auto',
    text: 'text-[20px] sm:text-[22px] md:text-[24px] tracking-[0.06em]',
    pill: 'px-3 sm:px-3.5 py-1.5 sm:py-2 gap-2.5 sm:gap-3',
    gap: 'gap-2.5 sm:gap-3',
  };

  const symbolElement = (
    <img
      src={`${import.meta.env.BASE_URL}assets/savelix-symbol.png`}
      alt=""
      aria-hidden="true"
      className={`${sizes.symbol} object-contain flex-shrink-0 select-none transition-transform duration-200 group-hover:scale-105`}
      width={530}
      height={513}
      loading="eager"
    />
  );

  const wordmarkElement = (
    <span
      className={`font-outfit font-extrabold uppercase leading-none select-none inline-block ${sizes.text}`}
      style={{
        background: 'linear-gradient(90deg, #4A297F 0%, #3F297A 35%, #2B3D8F 45%, #1866AE 55%, #1282B7 70%, #169B73 82%, #68B92E 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      aria-hidden="true"
    >
      SAVELIX
    </span>
  );

  // Background treatment:
  // 'dark-bg' variant uses a refined, light pill backing with subtle translucency and delicate shadow
  // 'default' variant sits directly on light surfaces without an unnecessary box
  const content = variant === 'dark-bg' ? (
    <div
      className={`inline-flex items-center ${sizes.pill} rounded-full bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_2px_12px_rgba(48,43,80,0.12)] transition-all duration-200 hover:bg-white hover:shadow-[0_4px_16px_rgba(48,43,80,0.18)] ${className}`}
    >
      {symbolElement}
      {wordmarkElement}
    </div>
  ) : (
    <div className={`inline-flex items-center ${sizes.gap} py-1 ${className}`}>
      {symbolElement}
      {wordmarkElement}
    </div>
  );

  if (!withLink) {
    return content;
  }

  return (
    <Link
      to="/"
      className="group inline-flex items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2 transition-transform duration-200 hover:opacity-95"
      aria-label="SAVELIX Psychiatric Clinic & Rehabilitation Centre - Go to homepage"
    >
      {content}
    </Link>
  );
}
