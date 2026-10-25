import { Browser } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

async function run() {
  console.log('--- STARTING SAVELIX GSAP MOTION & SMOOTH SCROLL VERIFICATION ---');

  const browser = await Browser.launch({ width: 1440, height: 900 });
  let allPassed = true;

  // -------------------------------------------------------------
  // Test 1: Desktop Homepage - ScrollTriggers, Parallax, & Lenis
  // -------------------------------------------------------------
  const page = await browser.newPage({ width: 1440, height: 900, mobile: false });
  await page.goto('http://localhost:5173/', { settleMs: 600 });

  const homeData = await page.eval(() => {
    // Check if ScrollTrigger is loaded and active
    const triggers = window.ScrollTrigger ? window.ScrollTrigger.getAll().length : -1;
    const decors = document.querySelectorAll('.savelix-decor');
    const leftDecors = document.querySelectorAll('.savelix-decor[data-decor-side="left"]');
    const rightDecors = document.querySelectorAll('.savelix-decor[data-decor-side="right"]');

    return {
      triggersCount: triggers,
      totalDecors: decors.length,
      leftDecors: leftDecors.length,
      rightDecors: rightDecors.length,
      htmlClasses: document.documentElement.className,
    };
  });

  console.log('\n[Test 1] Homepage GSAP & Decor Setup:');
  console.log(`  ScrollTrigger count: ${homeData.triggersCount}`);
  console.log(`  Total SVG decors: ${homeData.totalDecors} (Left: ${homeData.leftDecors}, Right: ${homeData.rightDecors})`);
  console.log(`  HTML Classes (Lenis active): ${homeData.htmlClasses}`);

  if (homeData.triggersCount <= 0) {
    console.error('  FAIL: No ScrollTriggers registered!');
    allPassed = false;
  }

  // Test Scroll Parallax: Scroll down 800px and measure decor transform
  await page.eval(() => {
    window.scrollTo({ top: 800, behavior: 'instant' });
    if (window.ScrollTrigger) window.ScrollTrigger.update();
  });
  await new Promise((r) => setTimeout(r, 400));

  const scrollTransforms = await page.eval(() => {
    const leftDecor = document.querySelector('.savelix-decor[data-decor-side="left"]');
    const rightDecor = document.querySelector('.savelix-decor[data-decor-side="right"]');
    return {
      leftTransform: leftDecor ? window.getComputedStyle(leftDecor).transform : 'none',
      rightTransform: rightDecor ? window.getComputedStyle(rightDecor).transform : 'none',
      scrollY: window.scrollY,
    };
  });

  console.log(`  After scrolling to ${scrollTransforms.scrollY}px:`);
  console.log(`    Left decor transform: ${scrollTransforms.leftTransform}`);
  console.log(`    Right decor transform: ${scrollTransforms.rightTransform}`);

  // -------------------------------------------------------------
  // Test 2: Modal Open / Close Scroll Lock
  // -------------------------------------------------------------
  console.log('\n[Test 2] Appointment Modal Scroll-Lock Test:');
  const modalTest = await page.eval(() => {
    // Click the hero appointment button
    const btn = document.querySelector('[data-hero-primary-cta]') || document.querySelector('button[aria-label*="Appointment"]');
    if (btn) btn.click();
    return !!btn;
  });

  await new Promise((r) => setTimeout(r, 300));

  const modalOpenState = await page.eval(() => {
    const modal = document.querySelector('[role="dialog"]');
    const bodyOverflow = document.body.style.overflow;
    const hasLenisPrevent = !!modal?.querySelector('[data-lenis-prevent]');
    return {
      isOpen: !!modal,
      bodyOverflow,
      hasLenisPrevent,
    };
  });

  console.log(`  Modal opened: ${modalOpenState.isOpen}`);
  console.log(`  Body overflow locked: ${modalOpenState.bodyOverflow === 'hidden'}`);
  console.log(`  Container has data-lenis-prevent: ${modalOpenState.hasLenisPrevent}`);

  if (!modalOpenState.isOpen || modalOpenState.bodyOverflow !== 'hidden') {
    console.error('  FAIL: Modal scroll lock failed!');
    allPassed = false;
  }

  // Close modal via Escape
  await page.eval(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
  });
  await new Promise((r) => setTimeout(r, 300));

  const modalClosedState = await page.eval(() => {
    const modal = document.querySelector('[role="dialog"]');
    const bodyOverflow = document.body.style.overflow;
    return {
      isClosed: !modal,
      bodyOverflow,
    };
  });

  console.log(`  Modal closed: ${modalClosedState.isClosed}`);
  console.log(`  Body overflow restored: ${modalClosedState.bodyOverflow === ''}`);

  // -------------------------------------------------------------
  // Test 3: Route Navigation & ScrollTrigger Cleanup / Re-initialization
  // -------------------------------------------------------------
  console.log('\n[Test 3] Multi-page Route Navigation:');
  const testRoutes = [
    '/about',
    '/services',
    '/services/psychiatric-care',
    '/services/psychiatric-rehabilitation',
    '/conditions',
    '/why-savelix',
    '/education-internship',
    '/contact',
  ];

  for (const route of testRoutes) {
    await page.goto(`http://localhost:5173${route}`, { settleMs: 400 });
    const routeCheck = await page.eval(() => {
      const triggers = window.ScrollTrigger ? window.ScrollTrigger.getAll().length : 0;
      const decors = document.querySelectorAll('.savelix-decor').length;
      const scrollY = window.scrollY;
      const scrollW = document.documentElement.scrollWidth;
      const winW = window.innerWidth;
      return {
        triggers,
        decors,
        scrollY,
        hasOverflow: scrollW > winW,
      };
    });

    console.log(`  Route: ${route} -> Triggers: ${routeCheck.triggers}, Decors: ${routeCheck.decors}, ScrollY: ${routeCheck.scrollY}, Overflow: ${routeCheck.hasOverflow}`);
    if (routeCheck.hasOverflow) {
      console.error(`    FAIL: Overflow detected on ${route}!`);
      allPassed = false;
    }
  }

  await page.close();

  // -------------------------------------------------------------
  // Test 4: Mobile Viewport (390px) & Zero Overflow
  // -------------------------------------------------------------
  console.log('\n[Test 4] Mobile Viewport Responsiveness (390px):');
  const mobilePage = await browser.newPage({ width: 390, height: 844, mobile: true });
  await mobilePage.goto('http://localhost:5173/', { settleMs: 500 });

  const mobileCheck = await mobilePage.eval(() => {
    const docW = document.documentElement.scrollWidth;
    const bodyW = document.body.scrollWidth;
    const winW = window.innerWidth;
    return {
      docW,
      bodyW,
      winW,
      hasOverflow: docW > winW || bodyW > winW,
    };
  });

  console.log(`  Mobile 390px -> docW: ${mobileCheck.docW}, winW: ${mobileCheck.winW}, Overflow: ${mobileCheck.hasOverflow}`);
  if (mobileCheck.hasOverflow) {
    console.error('  FAIL: Mobile horizontal overflow detected!');
    allPassed = false;
  }

  await mobilePage.close();

  // -------------------------------------------------------------
  // Test 5: Reduced Motion Accessibility Check
  // -------------------------------------------------------------
  console.log('\n[Test 5] Reduced Motion Accessibility:');
  const rmPage = await browser.newPage({ width: 1440, height: 900, reducedMotion: true });
  await rmPage.goto('http://localhost:5173/about', { settleMs: 500 });

  const rmCheck = await rmPage.eval(() => {
    const headings = document.querySelectorAll('h1, h2, h3');
    const hiddenHeadings = Array.from(headings).filter(h => window.getComputedStyle(h).opacity === '0');
    return {
      totalHeadings: headings.length,
      hiddenHeadingsCount: hiddenHeadings.length,
    };
  });

  console.log(`  Reduced motion -> Total headings: ${rmCheck.totalHeadings}, Hidden: ${rmCheck.hiddenHeadingsCount}`);
  if (rmCheck.hiddenHeadingsCount > 0) {
    console.error('  FAIL: Reduced motion left headings hidden!');
    allPassed = false;
  }

  await rmPage.close();
  await browser.close();

  if (allPassed) {
    console.log('\n>>> ALL GSAP MOTION & SMOOTH SCROLL TESTS PASSED WITH 100% SUCCESS! <<<');
  } else {
    console.error('\n>>> SOME TESTS FAILED <<<');
    process.exit(1);
  }
}

run().catch((e) => {
  console.error('Fatal error:', e);
  process.exit(1);
});
