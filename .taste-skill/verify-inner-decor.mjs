import { Browser } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const pages = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Conditions', path: '/conditions' },
  { name: 'WhySavelix', path: '/why-savelix' },
  { name: 'EducationInternship', path: '/education-internship' },
  { name: 'Contact', path: '/contact' },
  { name: 'PsychiatricCare', path: '/services/psychiatric-care' },
  { name: 'PsychologicalCounselling', path: '/services/psychological-counselling' },
  { name: 'PsychiatricRehabilitation', path: '/services/psychiatric-rehabilitation' },
  { name: 'FamilyCounselling', path: '/services/family-counselling' },
  { name: 'SubstanceUseSupport', path: '/services/substance-use-support' },
  { name: 'ChildAdolescentCounselling', path: '/services/child-adolescent-counselling' },
  { name: 'InpatientSafetyMonitoring', path: '/services/inpatient-safety-monitoring' },
];

const viewports = [320, 360, 390, 430, 768, 820, 1024, 1280, 1440, 1920];

async function run() {
  const browser = await Browser.launch({ width: 1440, height: 900 });
  let allPassed = true;

  console.log('--- STARTING INNER PAGE DECORATION & OVERFLOW VERIFICATION ---');

  for (const pageInfo of pages) {
    const page = await browser.newPage({ width: 1440, height: 900 });
    const url = `http://localhost:5173${pageInfo.path}`;
    await page.goto(url, { settleMs: 400 });

    const decorData = await page.eval(() => {
      const decors = Array.from(document.querySelectorAll('.savelix-decor'));
      const issues = [];
      decors.forEach((el, i) => {
        const style = window.getComputedStyle(el);
        const ariaHidden = el.getAttribute('aria-hidden');
        if (style.pointerEvents !== 'none') {
          issues.push(`decor #${i} pointerEvents is ${style.pointerEvents}, expected none`);
        }
        if (ariaHidden !== 'true') {
          issues.push(`decor #${i} aria-hidden is ${ariaHidden}, expected true`);
        }
      });
      return {
        count: decors.length,
        issues,
      };
    });

    console.log(`\nPage: ${pageInfo.name} (${pageInfo.path})`);
    console.log(`  Decor count: ${decorData.count}`);
    if (decorData.issues.length > 0) {
      console.error(`  FAIL issues:`, decorData.issues);
      allPassed = false;
    }

    // Now test all breakpoints for horizontal overflow
    for (const w of viewports) {
      await page.setViewport({ width: w, height: 800, mobile: w < 768 });
      await new Promise(r => setTimeout(r, 60));
      const overflow = await page.eval((targetWidth) => {
        const docW = document.documentElement.scrollWidth;
        const bodyW = document.body.scrollWidth;
        const winW = window.innerWidth;
        const hasOverflow = docW > winW || bodyW > winW;
        return {
          docW,
          bodyW,
          winW,
          hasOverflow,
        };
      }, w);

      if (overflow.hasOverflow) {
        console.error(`  FAIL at ${w}px: docW=${overflow.docW}, bodyW=${overflow.bodyW}, winW=${overflow.winW}`);
        allPassed = false;
      }
    }

    await page.close();
  }

  // Capture representative screenshots
  const screenshotTargets = [
    { path: '/about', name: 'about', w: 1440 },
    { path: '/about', name: 'about-mobile', w: 390 },
    { path: '/services', name: 'services', w: 1440 },
    { path: '/services/psychiatric-care', name: 'psychiatric-care', w: 1440 },
    { path: '/services/psychiatric-care', name: 'psychiatric-care-mobile', w: 390 },
    { path: '/contact', name: 'contact', w: 1440 },
  ];

  for (const s of screenshotTargets) {
    const page = await browser.newPage({ width: s.w, height: 1000, mobile: s.w < 768 });
    await page.goto(`http://localhost:5173${s.path}`, { settleMs: 400 });
    await page.screenshot({
      path: `.taste-skill/screenshot-${s.name}.png`,
      fullPage: true,
      format: 'png',
    });
    console.log(`Captured .taste-skill/screenshot-${s.name}.png`);
    await page.close();
  }

  await browser.close();

  if (allPassed) {
    console.log('\n>>> ALL 13 INNER & SERVICE PAGES PASSED VERIFICATION ACROSS ALL BREAKPOINTS! <<<');
  } else {
    console.error('\n>>> ISSUES DETECTED DURING VERIFICATION <<<');
    process.exit(1);
  }
}

run().catch(err => {
  console.error('Fatal error during test:', err);
  process.exit(1);
});
