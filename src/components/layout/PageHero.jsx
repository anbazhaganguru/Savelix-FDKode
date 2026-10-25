import React from 'react';

/**
 * Shared Full-Width Inner-Page Hero Component
 *
 * Implements the SAVELIX global inner-page hero design language:
 * - Edge-to-edge photographic background with page-specific clinical asset
 * - Seamless left-to-right white/lavender fade overlay on desktop, vertical fade on mobile
 * - High-contrast left typography column for titles, subtitles, and CTA actions
 * - Crystal clear right-hand photograph with warm natural lighting and zero card borders
 * - Accessible, responsive, and mobile-optimized across all viewports
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  actions,
  image,
  mobileImage,
  imageAlt = '',
  imagePosition = 'object-[right_20%] lg:object-[right_15%]',
  className = '',
}) {
  return (
    <section
      aria-label="Page Introduction"
      className={`relative w-full overflow-hidden bg-savelix-lilac savelix-inner-hero min-h-[480px] sm:min-h-[520px] md:min-h-[540px] lg:min-h-[560px] xl:min-h-[620px] 2xl:min-h-[680px] flex items-center ${className}`}
    >
      {/* Edge-to-Edge Responsive Background Photograph */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {mobileImage ? (
          <picture className="w-full h-full">
            <source media="(max-width: 767px)" srcSet={mobileImage} />
            <img
              src={image}
              alt={imageAlt}
              aria-hidden={!imageAlt}
              className={`w-full h-full object-cover ${imagePosition} transition-transform duration-1000 ease-out`}
              loading="eager"
            />
          </picture>
        ) : (
          <img
            src={image}
            alt={imageAlt}
            aria-hidden={!imageAlt}
            className={`w-full h-full object-cover ${imagePosition} transition-transform duration-1000 ease-out`}
            loading="eager"
          />
        )}
      </div>

      {/* Seamless White-to-Lavender Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none scrim-inner-hero"
        aria-hidden="true"
      />

      {/* Foreground Left Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-6">
          {/* Optional Eyebrow */}
          {eyebrow && <div>{eyebrow}</div>}

          {/* Heading 1 with Serif Accent */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-savelix-plum tracking-tight leading-[1.10] sm:leading-[1.08]">
            {title}
          </h1>

          {/* Optional Subtitle */}
          {subtitle && (
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-savelix-purple tracking-tight leading-snug">
              {subtitle}
            </p>
          )}

          {/* Descriptive Body Copy */}
          {description && (
            <div className="text-base sm:text-lg lg:text-xl text-savelix-plum/90 font-normal leading-relaxed max-w-[60ch] space-y-3">
              {typeof description === 'string' ? <p>{description}</p> : description}
            </div>
          )}

          {/* CTAs / Action Buttons */}
          {actions && <div className="pt-2 flex flex-wrap items-center gap-4">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
