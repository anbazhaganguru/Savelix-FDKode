import React, { useState } from 'react';
import FounderBotanicalDecor from './FounderBotanicalDecor';
import FounderNameplate from './FounderNameplate';

/**
 * FounderPortrait
 *
 * Master presentation component for the SAVELIX founder.
 * Mobile-refined:
 * - Reduced mobile width (min(74vw, 270px)) and height (340px) leaving ample margin for botanical leaves
 * - Preserves exact desktop (lg:h-[560px]) and tablet (sm:max-w-[480px], sm:h-[520px]) appearance
 * - Tuned object-cover top alignment keeping founder's face, smile, and upper body visible
 * - Fully accessible with keyboard focus and subtle hover interaction
 */
export default function FounderPortrait() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group w-[min(74vw,270px)] xs:w-[min(76vw,285px)] sm:w-full sm:max-w-[330px] md:max-w-[350px] lg:max-w-[360px] xl:max-w-[385px] 2xl:max-w-[400px] 3xl:max-w-[440px] mx-auto select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-4 rounded-[32px] sm:rounded-[40px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="region"
      aria-label="Presentation of Jayalakshmi, Founder of SAVELIX Psychiatric Clinic and Rehabilitation Centre"
    >
      {/* Layer 0: Code-based Botanical Vector Decorations & Ambient Backdrop Glow */}
      <FounderBotanicalDecor isHovered={isHovered} />

      {/* Layer 10: Multi-Layered White / Lavender Frame */}
      <div
        className="relative z-10 p-2 sm:p-3 lg:p-3.5 rounded-[28px] sm:rounded-[38px] 3xl:rounded-[46px] bg-white border border-white/90 transition-[transform,box-shadow] duration-500 ease-out"
        style={{
          boxShadow: isHovered
            ? '0 26px 65px -12px rgba(48, 43, 80, 0.18), 0 0 50px rgba(128, 101, 168, 0.22), 0 0 0 1px rgba(128, 101, 168, 0.16)'
            : '0 20px 50px -12px rgba(48, 43, 80, 0.13), 0 0 38px rgba(128, 101, 168, 0.14), 0 0 0 1px rgba(128, 101, 168, 0.09)',
          transform: isHovered ? 'scale(1.012)' : 'scale(1)',
        }}
      >
        {/* Inner Photo Mask with Exact Natural Aspect Ratio */}
        <div className="relative rounded-[22px] sm:rounded-[30px] 3xl:rounded-[38px] overflow-hidden bg-savelix-lavender aspect-[1122/1402] w-full">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/founder/founder.png`}
            alt="Jayalakshmi, Founder of SAVELIX Psychiatric Clinic and Rehabilitation Centre"
            className="w-full h-full object-contain object-top transition-transform duration-700 ease-out"
            style={{
              transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            }}
            loading="lazy"
            width={1122}
            height={1402}
          />
        </div>
      </div>

      {/* Layer 20: Overlapping Identity Nameplate */}
      <FounderNameplate isHovered={isHovered} />
    </div>
  );
}
