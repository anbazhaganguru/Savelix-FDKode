import { Browser, sleep } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import fs from 'node:fs';
import path from 'node:path';

const VIEWPORTS = [
  { width: 320, height: 600, label: '320px-mobile-sm', mobile: true },
  { width: 390, height: 844, label: '390px-mobile-std', mobile: true },
  { width: 768, height: 1024, label: '768px-tablet-portrait', mobile: false },
  { width: 1024, height: 768, label: '1024px-tablet-landscape', mobile: false },
  { width: 1440, height: 900, label: '1440px-desktop-std', mobile: false },
  { width: 1920, height: 1080, label: '1920px-large-desktop', mobile: false },
  { width: 2560, height: 1440, label: '2560px-2k-qhd', mobile: false },
  { width: 3840, height: 2160, label: '3840px-4k-uhd', mobile: false },
];

const SCREENSHOT_DIR = path.resolve('.taste-skill/screenshots');
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function verifyHero() {
  console.log('=== STARTING SAVELIX FULL-VIEWPORT HERO & TRANSPARENT NAVBAR AUDIT ===\n');
  const browser = await Browser.launch({ width: 1440, height: 900 });
  const viewportResults = [];

  try {
    for (const vp of VIEWPORTS) {
      console.log(`\n--- Inspecting Viewport: ${vp.label} (${vp.width}x${vp.height}) ---`);
      const page = await browser.newPage({
        width: vp.width,
        height: vp.height,
        mobile: vp.mobile,
        deviceScaleFactor: 1
      });

      await page.goto('http://localhost:5173/', { timeoutMs: 30000, settleMs: 1500 });
      await sleep(1000);

      // Collect DOM, Hero full-viewport, and Image State
      const data = await page.eval(`(() => {
        const hero = document.getElementById('hero');
        if (!hero) return { error: 'Hero element not found' };

        const header = document.querySelector('header');
        const headerStyle = header ? window.getComputedStyle(header) : null;
        const headerRect = header ? header.getBoundingClientRect() : null;

        const pic = hero.querySelector('picture');
        const img = pic ? pic.querySelector('img') : null;
        const brand = hero.querySelector('p');
        const h1 = hero.querySelector('h1');
        const desc = hero.querySelector('p:nth-of-type(2)');
        const buttons = Array.from(hero.querySelectorAll('button, a'));

        const overflow = document.documentElement.scrollWidth > window.innerWidth;
        const heroRect = hero.getBoundingClientRect();

        // Check if Hero fills full viewport height
        const fillsViewport = hero.offsetHeight >= window.innerHeight;

        // Current image source resolved by the browser picture/source element
        const currentImageSrc = img ? (img.currentSrc || img.src) : '';
        const imageLoaded = img ? (img.complete && img.naturalWidth > 0) : false;

        const h1Style = h1 ? window.getComputedStyle(h1) : null;
        const descStyle = desc ? window.getComputedStyle(desc) : null;

        // Check CTA buttons
        const ctaData = buttons.map(b => ({
          text: b.innerText.trim(),
          tagName: b.tagName.toLowerCase(),
          href: b.getAttribute('href') || null,
          width: b.offsetWidth,
          height: b.offsetHeight
        }));

        // Measure Navbar overlap: does header overlap h1?
        const h1Rect = h1 ? h1.getBoundingClientRect() : { top: 0 };
        const headerBottom = headerRect ? headerRect.bottom : 0;
        const navbarOverlapsHeading = headerBottom > h1Rect.top;

        return {
          currentImageSrc,
          imageLoaded,
          naturalWidth: img ? img.naturalWidth : 0,
          naturalHeight: img ? img.naturalHeight : 0,
          heroHeight: hero.offsetHeight,
          windowHeight: window.innerHeight,
          fillsViewport,
          overflow,
          scrollWidth: document.documentElement.scrollWidth,
          windowWidth: window.innerWidth,
          navbarBackground: headerStyle ? headerStyle.backgroundColor : '',
          headerPosition: headerStyle ? headerStyle.position : '',
          navbarOverlapsHeading,
          h1Top: h1Rect.top,
          headerBottom,
          brandText: brand ? brand.innerText.trim() : '',
          h1Text: h1 ? h1.innerText.replace(/\\s+/g, ' ').trim() : '',
          h1FontSize: h1Style ? h1Style.fontSize : '',
          descFontSize: descStyle ? descStyle.fontSize : '',
          ctaCount: buttons.length,
          ctaDetails: ctaData,
          gsapHooks: {
            bg: !!hero.querySelector('[data-hero-bg]'),
            content: !!hero.querySelector('[data-hero-content]'),
            eyebrow: !!hero.querySelector('[data-hero-eyebrow]'),
            heading: !!hero.querySelector('[data-hero-heading]'),
            description: !!hero.querySelector('[data-hero-description]'),
            actions: !!hero.querySelector('[data-hero-actions]'),
            primaryCta: !!hero.querySelector('[data-hero-primary-cta]'),
            secondaryCta: hero.querySelectorAll('[data-hero-secondary-cta]').length
          }
        };
      })()`);

      // Determine asset filename
      let matchedAsset = 'unknown';
      if (data.currentImageSrc.includes('hero-desktop.png')) matchedAsset = 'hero-desktop.png';
      else if (data.currentImageSrc.includes('hero-tablet.png')) matchedAsset = 'hero-tablet.png';
      else if (data.currentImageSrc.includes('hero-mobile.png')) matchedAsset = 'hero-mobile.png';

      const vpResult = {
        viewport: vp.label,
        width: vp.width,
        height: vp.height,
        matchedAsset,
        fillsViewport: data.fillsViewport,
        heroHeight: data.heroHeight,
        windowHeight: data.windowHeight,
        navbarOverlapsHeading: data.navbarOverlapsHeading,
        navbarPosition: data.headerPosition,
        currentImageSrc: data.currentImageSrc,
        imageLoaded: data.imageLoaded,
        overflow: data.overflow,
        scrollWidth: data.scrollWidth,
        h1FontSize: data.h1FontSize,
        h1Text: data.h1Text,
        ctaCount: data.ctaCount,
        ctaDetails: data.ctaDetails
      };

      console.log(`  Asset Loaded: [${matchedAsset}] (natural: ${data.naturalWidth}x${data.naturalHeight})`);
      console.log(`  Full-Viewport Sizing: Hero Height ${data.heroHeight}px >= Viewport ${data.windowHeight}px -> ${data.fillsViewport ? 'PASS (Full Height)' : 'FAIL'}`);
      console.log(`  Transparent Navbar Position: [${data.headerPosition}], Overlaps Heading: ${data.navbarOverlapsHeading ? 'OVERLAP WARNING' : 'CLEAN (No overlap, h1 top: ' + Math.round(data.h1Top) + 'px > header bottom: ' + Math.round(data.headerBottom) + 'px)'}`);
      console.log(`  Heading Font: ${data.h1FontSize}`);
      console.log(`  Horizontal Overflow: ${data.overflow ? 'FAIL' : 'PASS (Clean)'}`);
      console.log(`  CTAs: ${data.ctaCount} detected:`, data.ctaDetails.map(c => `${c.text} (${c.width}x${c.height}px)`).join(' | '));
      console.log(`  GSAP Hooks:`, data.gsapHooks);

      // Capture screenshot
      const shotPath = path.join(SCREENSHOT_DIR, `hero-${vp.label}.png`);
      const buffer = await page.screenshot({ format: 'png' });
      fs.writeFileSync(shotPath, buffer);
      console.log(`  Screenshot saved to ${shotPath} (${Math.round(buffer.length / 1024)} KB)`);

      viewportResults.push(vpResult);
      await page.close();
    }

    // Test Mobile Navigation at 390px
    console.log('\n--- Testing Mobile Navigation at 390px ---');
    const mobilePage = await browser.newPage({ width: 390, height: 844, mobile: true });
    await mobilePage.goto('http://localhost:5173/', { timeoutMs: 30000, settleMs: 1000 });
    await sleep(800);

    const mobileMenuOpened = await mobilePage.eval(`(() => {
      const menuBtn = document.querySelector('header button[aria-label*="menu" i], header button[aria-label*="navigation" i]');
      if (menuBtn) {
        menuBtn.click();
        return true;
      }
      return false;
    })()`);
    await sleep(500);

    const drawerVisible = await mobilePage.eval(`(() => {
      const drawer = document.querySelector('[role="dialog"], [aria-label*="mobile" i], [aria-label*="Navigation" i]');
      return {
        open: !!drawer,
        linksCount: drawer ? drawer.querySelectorAll('a').length : 0
      };
    })()`);
    console.log('Mobile Hamburger clicked -> Drawer visible:', drawerVisible);
    await mobilePage.close();

    // Test CTA Interactions at 1440px
    console.log('\n--- Testing CTA Interactions at 1440px ---');
    const actionPage = await browser.newPage({ width: 1440, height: 900 });
    await actionPage.goto('http://localhost:5173/', { timeoutMs: 30000, settleMs: 1000 });
    await sleep(800);

    // 1. Click "Book an Appointment" CTA in Hero
    const appointmentModalOpened = await actionPage.eval(`(() => {
      const hero = document.getElementById('hero');
      const bookBtn = Array.from(hero.querySelectorAll('button')).find(b => b.innerText.includes('Book an Appointment'));
      if (bookBtn) {
        bookBtn.click();
        return true;
      }
      return false;
    })()`);
    await sleep(500);

    const modalVisible = await actionPage.eval(`(() => {
      const dialog = document.querySelector('[role="dialog"]');
      return dialog ? { open: true, title: dialog.querySelector('h2, h3, [id*="modal-title"]')?.innerText || '' } : { open: false };
    })()`);
    console.log('Hero "Book an Appointment" clicked -> Modal visible:', modalVisible);

    // Close modal
    await actionPage.eval(`(() => {
      const closeBtn = document.querySelector('[role="dialog"] button[aria-label*="close" i], [role="dialog"] button[aria-label*="Close" i]');
      if (closeBtn) closeBtn.click();
    })()`);
    await sleep(400);

    // 2. Verify "Contact Us" link target
    const contactHref = await actionPage.eval(`(() => {
      const hero = document.getElementById('hero');
      const a = Array.from(hero.querySelectorAll('a')).find(el => el.innerText.includes('Contact Us'));
      return a ? a.getAttribute('href') : null;
    })()`);
    console.log('Hero "Contact Us" href:', contactHref);

    // 3. Verify "Explore Our Services" link target
    const servicesHref = await actionPage.eval(`(() => {
      const hero = document.getElementById('hero');
      const a = Array.from(hero.querySelectorAll('a')).find(el => el.innerText.includes('Explore Our Services'));
      return a ? a.getAttribute('href') : null;
    })()`);
    console.log('Hero "Explore Our Services" href:', servicesHref);

    // 4. Test Navbar Services Dropdown
    await actionPage.eval(`(() => {
      const btn = Array.from(document.querySelectorAll('header button')).find(b => b.innerText.includes('Services'));
      if (btn) btn.click();
    })()`);
    await sleep(400);
    const dropdownStatus = await actionPage.eval(`(() => {
      const menu = document.querySelector('[role="menu"]');
      return menu ? { open: true, count: menu.querySelectorAll('a').length } : { open: false };
    })()`);
    console.log('Transparent Navbar Services dropdown:', dropdownStatus);

    await actionPage.close();

    // Summary output
    console.log('\n=== FULL-VIEWPORT HERO AUDIT RESULTS SUMMARY ===');
    console.log(JSON.stringify(viewportResults, null, 2));

  } catch (err) {
    console.error('Error during hero verification:', err);
  } finally {
    try {
      await browser.close();
    } catch {}
    process.exit(0);
  }
}

verifyHero();
