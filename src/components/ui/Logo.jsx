import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official SAVELIX Logo Component
 *
 * Preserves the official clinic brand identity:
 * - Circular floral emblem with healing tree, medical cross & supporting hand
 * - Brand typography: SAVELIX in gradient purple, electric blue & fresh green
 * - Subtitle: Psychiatric Clinic & Rehabilitation Centre
 *
 * Supports header and footer (dark background) variants while maintaining
 * exact brand colors and proportions.
 */
export default function Logo({
  variant = 'default',
  size = 'md',
  className = '',
  withLink = true,
}) {
  // Height classes by size using standard Tailwind tokens
  const sizeClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-12 md:h-14 lg:h-16',
    lg: 'h-14 sm:h-16',
  }[size] || 'h-11 sm:h-12 md:h-14 lg:h-16';

  const logoImg = (
    <img
      src={`${import.meta.env.BASE_URL}assets/savelix-logo.jpg`}
      alt="SAVELIX Psychiatric Clinic & Rehabilitation Centre"
      className={`${sizeClasses} w-auto object-contain rounded-md transition-opacity duration-200`}
      loading="eager"
      width={1024}
      height={834}
    />
  );

  const content = variant === 'dark-bg' ? (
    <div className={`inline-flex items-center bg-white px-3 py-1.5 rounded-xl shadow-sm border border-savelix-border/40 ${className}`}>
      {logoImg}
    </div>
  ) : (
    <div className={`inline-flex items-center ${className}`}>
      {logoImg}
    </div>
  );

  if (!withLink) {
    return content;
  }

  return (
    <Link
      to="/"
      className="inline-flex items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2 transition-transform hover:opacity-95"
      aria-label="SAVELIX Psychiatric Clinic & Rehabilitation Centre - Go to homepage"
    >
      {content}
    </Link>
  );
}
