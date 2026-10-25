import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap, ScrollTrigger, useGSAP, isReducedMotion } from '../../lib/gsap';

/**
 * MotionOrchestrator
 *
 * Apple-Inspired GSAP Motion Engine for SAVELIX:
 * - 100% Native, uninhibited browser scrolling with direct physical trackpad/mouse connection
 * - Deliberate, refined reveal timing:
 *   * Main headings: 0.85s (Apple cubic deceleration, power3.out)
 *   * Paragraphs & supporting text: 0.75s (0.13s breathing room after headings)
 *   * Large images: 0.90s (subtle 1.03 -> 1.0 scale settling)
 *   * Cards & containers: 0.80s with 0.12s natural stagger
 *   * Initial vertical offset: 18–20px
 * - Zero artificial drag, zero scrub stiction, zero duplicate ScrollTriggers
 * - Clean section-level choreography preventing large blank spaces
 * - Full accessibility & reduced-motion fallback
 */
export default function MotionOrchestrator() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    mainRef.current = document.getElementById('main-content') || document.body;
  }, []);

  useGSAP(
    () => {
      // 1. Accessibility Check: if user prefers reduced motion, ensure immediate 100% visibility
      if (isReducedMotion()) {
        const allAnimatable = document.querySelectorAll(
          '#hero [data-hero-bg], #hero [data-hero-eyebrow], #hero [data-hero-heading], #hero [data-hero-description], #hero [data-hero-actions], ' +
          '.savelix-inner-hero img, .savelix-inner-hero h1, .savelix-inner-hero p, .savelix-inner-hero .pt-2, ' +
          'h2, h3, p, img, .savelix-decor, [role="region"][aria-label*="Jayalakshmi"], .grid > div, .grid > a'
        );
        allAnimatable.forEach((el) => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
        return;
      }

      const mainEl = mainRef.current || document.getElementById('main-content') || document.body;
      if (!mainEl) return;

      // =========================================================================
      // A. HOMEPAGE HERO: DELIBERATE, SERENE ENTRANCE (Apple-style pacing)
      // =========================================================================
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBg = heroSection.querySelector('[data-hero-bg]');
        const heroEyebrow = heroSection.querySelector('[data-hero-eyebrow]');
        const heroHeading = heroSection.querySelector('[data-hero-heading]');
        const heroDesc = heroSection.querySelector('[data-hero-description]');
        const heroActions = heroSection.querySelector('[data-hero-actions]');

        const heroTl = gsap.timeline({
          defaults: { ease: 'power3.out' },
          delay: 0.08,
        });

        // 1. Hero background: serene, gentle settling (no continuous scroll scrub)
        if (heroBg) {
          heroTl.fromTo(
            heroBg,
            { scale: 1.035, opacity: 0.88 },
            { scale: 1.0, opacity: 1, duration: 1.1, ease: 'power3.out' },
            0
          );
        }

        // 2. Brand Eyebrow
        if (heroEyebrow) {
          heroTl.fromTo(
            heroEyebrow,
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.70, ease: 'power3.out' },
            0.10
          );
        }

        // 3. Editorial Heading (0.85s deliberate reveal)
        if (heroHeading) {
          const headingLines = heroHeading.querySelectorAll(':scope > span');
          if (headingLines.length > 0) {
            heroTl.fromTo(
              headingLines,
              { y: 22, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.85, stagger: 0.10, ease: 'power3.out' },
              0.18
            );
          } else {
            heroTl.fromTo(
              heroHeading,
              { y: 22, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' },
              0.18
            );
          }
        }

        // 4. Supporting Description (0.75s, 0.16s breathing room after heading)
        if (heroDesc) {
          heroTl.fromTo(
            heroDesc,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out' },
            0.34
          );
        }

        // 5. Action Buttons (0.70s, clears props on completion for native hover physics)
        if (heroActions) {
          heroTl.fromTo(
            heroActions,
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.70, ease: 'power3.out', clearProps: 'opacity,transform' },
            0.48
          );
        }
      }

      // =========================================================================
      // B. INNER PAGE HERO: REFINED ARCHITECTURAL ENTRANCE
      // =========================================================================
      const innerHero = document.querySelector('.savelix-inner-hero');
      if (innerHero) {
        const heroPhoto = innerHero.querySelector('img');
        const heroHeading = innerHero.querySelector('h1');
        const heroTexts = innerHero.querySelectorAll('p, div.text-base, div.text-sm');
        const heroActions = innerHero.querySelectorAll('.pt-2 button, .pt-2 a');

        const innerHeroTl = gsap.timeline({
          defaults: { ease: 'power3.out' },
          delay: 0.06,
        });

        if (heroPhoto) {
          innerHeroTl.fromTo(
            heroPhoto,
            { scale: 1.035, opacity: 0.88 },
            { scale: 1.0, opacity: 1, duration: 0.95, ease: 'power3.out' },
            0
          );
        }

        if (heroHeading) {
          innerHeroTl.fromTo(
            heroHeading,
            { y: 22, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' },
            0.10
          );
        }

        if (heroTexts.length > 0) {
          innerHeroTl.fromTo(
            heroTexts,
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.75, stagger: 0.08, ease: 'power3.out' },
            0.22
          );
        }

        if (heroActions.length > 0) {
          innerHeroTl.fromTo(
            heroActions,
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.70, stagger: 0.08, ease: 'power3.out', clearProps: 'opacity,transform' },
            0.34
          );
        }
      }

      // =========================================================================
      // C. CONTENT SECTIONS: CHOREOGRAPHED APPLE-STYLE REVEALS
      // =========================================================================
      const contentSections = mainEl.querySelectorAll('section:not(#hero):not(.savelix-inner-hero)');

      contentSections.forEach((section) => {
        const eyebrow = section.querySelector(':scope > div > div > span.text-xs, :scope > div > div > div > span.text-xs, [class*="uppercase"][class*="tracking-"]');
        
        // Only target section-level headings, not titles inside child cards
        const headings = Array.from(section.querySelectorAll('h2, h3')).filter((el) => {
          return !el.closest('.grid') && !el.closest('[class*="rounded-"][class*="p-"]') && !el.closest('.space-y-16 > div') && !el.closest('.space-y-20 > div');
        });

        // Only target section subtitles/introductions, not copy inside child cards
        const descriptions = Array.from(section.querySelectorAll(
          '.max-w-2xl > p, .max-w-3xl > p, .max-w-4xl > p, .space-y-2 > p, .space-y-3 > p, .space-y-4 > p:not([class*="font-bold"])'
        )).filter((el) => {
          return !el.closest('.grid') && !el.closest('[class*="rounded-"][class*="p-"]') && !el.closest('.space-y-16 > div') && !el.closest('.space-y-20 > div') && !el.closest('[role="region"]');
        });

        const cardGrids = section.querySelectorAll('.grid');
        const standaloneCards = section.querySelectorAll(
          '.space-y-16 > div.group, .space-y-20 > div.group, ' +
          '.space-y-6 > div[class*="rounded-"], ' +
          'div[class*="rounded-"][class*="p-6"], div[class*="rounded-"][class*="p-7"], ' +
          'div[class*="rounded-"][class*="p-8"], div[class*="rounded-"][class*="p-9"], ' +
          'div[class*="rounded-"][class*="p-10"], div[class*="rounded-"][class*="p-12"], ' +
          'div[class*="rounded-"][class*="p-14"], [class*="rounded-"][class*="bg-savelix-plum"], ' +
          '[class*="rounded-"][class*="bg-gradient-to-"]'
        );
        const editorialImgs = section.querySelectorAll('img:not(.savelix-decor img):not([aria-hidden="true"]):not([role="region"] img)');
        const decors = section.querySelectorAll('.savelix-decor');

        // Master Section Timeline: Single unified ScrollTrigger per section
        const secTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
          defaults: { ease: 'power3.out' },
        });

        // 1. Eyebrow badge / metadata tag
        if (eyebrow && !eyebrow.closest('.grid')) {
          secTl.fromTo(
            eyebrow,
            { y: 12, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.65 },
            0
          );
        }

        // 2. Section Headings (h2, h3) — 0.85s deliberate reveal
        if (headings.length > 0) {
          secTl.fromTo(
            headings,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.85, stagger: 0.10, clearProps: 'opacity,transform' },
            0.05
          );
        }

        // 3. Subtitles and paragraphs — 0.75s, 0.13s breathing room after heading
        if (descriptions.length > 0) {
          secTl.fromTo(
            descriptions,
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.75, stagger: 0.08, clearProps: 'opacity,transform' },
            0.18
          );
        }

        // 4. Background SVG Decor (Subtle, unhurried fade)
        if (decors.length > 0) {
          secTl.fromTo(
            decors,
            { y: 14, opacity: 0 },
            { y: 0, opacity: 0.7, duration: 0.90 },
            0.10
          );
        }

        // 5. Grid Cards (Primary rows orchestrated on section timeline; subsequent rows triggered as user approaches)
        cardGrids.forEach((grid, gIdx) => {
          const cards = grid.querySelectorAll(':scope > div:not(.savelix-decor):not([role="region"]), :scope > a');
          if (cards.length > 0) {
            const staggerAmount = Math.min(cards.length * 0.10, 0.28);
            if (gIdx === 0) {
              secTl.fromTo(
                cards,
                { y: 20, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.80,
                  stagger: { amount: staggerAmount, from: 'start' },
                  clearProps: 'opacity,transform',
                },
                0.26
              );
            } else {
              // Secondary lower grid in tall section: triggered slightly before entering viewport to prevent blank spaces
              gsap.fromTo(
                cards,
                { y: 20, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.80,
                  stagger: { amount: staggerAmount, from: 'start' },
                  ease: 'power3.out',
                  clearProps: 'opacity,transform',
                  scrollTrigger: {
                    trigger: grid,
                    start: 'top 88%',
                    once: true,
                  },
                }
              );
            }
          }
        });

        // 6. Standalone Cards & Content Containers
        const validStandaloneCards = Array.from(standaloneCards).filter((c) => {
          return !c.closest('.grid') && !c.closest('[role="region"]') && !c.closest('.savelix-decor') && !c.closest('#hero');
        });

        if (validStandaloneCards.length > 0) {
          if (validStandaloneCards.length <= 4) {
            const staggerAmount = Math.min(validStandaloneCards.length * 0.10, 0.28);
            secTl.fromTo(
              validStandaloneCards,
              { y: 20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.80,
                stagger: { amount: staggerAmount, from: 'start' },
                clearProps: 'opacity,transform',
              },
              0.28
            );
          } else {
            // For longer lists (like condition streams), trigger each card as it enters viewport
            validStandaloneCards.forEach((c) => {
              gsap.fromTo(
                c,
                { y: 20, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.78,
                  ease: 'power3.out',
                  clearProps: 'opacity,transform',
                  scrollTrigger: {
                    trigger: c,
                    start: 'top 88%',
                    once: true,
                  },
                }
              );
            });
          }
        }

        // 7. Standalone Editorial Images (Only if NOT inside a card container)
        const validImages = Array.from(editorialImgs).filter((img) => {
          return !img.closest('.grid > div, .grid > a, [class*="rounded-"][class*="p-"]');
        });

        if (validImages.length > 0) {
          secTl.fromTo(
            validImages,
            { scale: 1.03, y: 16, opacity: 0 },
            {
              scale: 1.0,
              y: 0,
              opacity: 1,
              duration: 0.90,
              clearProps: 'opacity,transform',
            },
            0.24
          );
        }
      });

      // =========================================================================
      // D. FOUNDER PORTRAIT ENTRANCE (HOMEPAGE & ABOUT PAGE)
      // =========================================================================
      const founderRegion = document.querySelector('[role="region"][aria-label*="Jayalakshmi"]');
      if (founderRegion) {
        gsap.fromTo(
          founderRegion,
          { y: 22, opacity: 0, scale: 0.985 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.95,
            ease: 'power3.out',
            clearProps: 'opacity,transform',
            scrollTrigger: {
              trigger: founderRegion,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Refresh ScrollTrigger calculations after all timelines are scheduled
      ScrollTrigger.refresh();
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  return null;
}

