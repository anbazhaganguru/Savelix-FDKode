import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  // Configure ScrollTrigger defaults: prevent mobile address bar jump recalculations
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
  });

  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
}

/**
 * Check if the user has requested reduced motion in their OS / browser preferences
 */
export function isReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Detect touch devices to adjust parallax intensity and avoid heavy scroll listeners
 */
export function isTouchDevice() {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
}

/**
 * Standard SAVELIX Motion Design Tokens
 * Apple-inspired refined reveal choreography:
 * - Main section headings: 0.8–1.0s (0.85s)
 * - Paragraphs and supporting text: 0.7–0.9s (0.75s)
 * - Large images: 0.8–1.1s (0.90s)
 * - Cards and content containers: 0.7–0.9s (0.75s)
 * - Card stagger: 0.10–0.16s (0.12s)
 * - Heading-to-paragraph delay: 0.10–0.18s (0.12s)
 * - Initial vertical offset: 16–24px (18–20px)
 * - Easing: refined cubic deceleration (power3.out)
 */
export const MOTION = {
  duration: {
    heading: 0.85,
    text: 0.75,
    subtext: 0.70,
    label: 0.60,
    card: 0.75,
    image: 0.90,
    hero: 1.05,
    fast: 0.60,
    normal: 0.75,
    slow: 0.90,
  },
  delay: {
    headingToParagraph: 0.12,
    paragraphToCards: 0.12,
  },
  stagger: {
    text: 0.08,
    card: 0.12,
  },
  offset: {
    heading: 20,
    text: 16,
    card: 20,
    image: 18,
  },
  ease: {
    apple: 'power3.out',
    out: 'power2.out',
    smooth: 'power3.out',
    premium: 'power3.out',
  },
};

export { gsap, ScrollTrigger, useGSAP };
