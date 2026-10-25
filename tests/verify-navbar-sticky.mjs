import { Browser } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

async function testNavbarSticky() {
  console.log('================================================================');
  console.log('       SAVELIX — NAVBAR STICKY BEHAVIOR VERIFICATION SUITE       ');
  console.log('================================================================\n');

  const browser = await Browser.launch({ width: 1440, height: 900 });
  let hasErrors = false;

  const routes = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About Us' },
    { path: '/services', name: 'Services Directory' },
    { path: '/conditions', name: 'Conditions We Support' },
    { path: '/education-internship', name: 'Education & Internship' },
    { path: '/why-savelix', name: 'Why Savelix' },
    { path: '/contact', name: 'Contact Us' },
    { path: '/services/psychiatric-care', name: 'Psychiatric Care Detail' },
    { path: '/services/psychological-counselling', name: 'Psychological Counselling Detail' },
    { path: '/services/psychiatric-rehabilitation', name: 'Psychiatric Rehabilitation Detail' },
    { path: '/services/family-counselling', name: 'Family Counselling Detail' },
    { path: '/services/substance-use-support', name: 'Substance Use Support Detail' },
    { path: '/services/child-adolescent-counselling', name: 'Child & Adolescent Detail' },
    { path: '/services/inpatient-safety-monitoring', name: 'Inpatient Safety Detail' },
  ];

  try {
    // -------------------------------------------------------------------------
    // TEST 1: DESKTOP ALL ROUTES — SCROLL DOWN AND SCROLL UP VERIFICATION
    // -------------------------------------------------------------------------
    console.log('[TEST 1] Auditing Navbar Sticky Position Across All Routes (Desktop 1440px)...');
    const page = await browser.newPage({ width: 1440, height: 900, mobile: false });

    for (const r of routes) {
      await page.goto('http://localhost:5173' + r.path, { settleMs: 400 });

      const topState = await page.eval(() => {
        const h = document.querySelector('header');
        return {
          rectTop: Math.round(h.getBoundingClientRect().top),
          rectHeight: Math.round(h.getBoundingClientRect().height),
          position: window.getComputedStyle(h).position,
          isTransparent: h.classList.contains('bg-transparent'),
        };
      });

      // Scroll Down 700px
      await page.eval(async () => {
        for (let y = 0; y <= 700; y += 70) {
          window.scrollTo(0, y);
          await new Promise((res) => setTimeout(res, 16));
        }
        await new Promise((res) => setTimeout(res, 150));
      });

      const scrolledDownState = await page.eval(() => {
        const h = document.querySelector('header');
        return {
          scrollY: window.scrollY,
          rectTop: Math.round(h.getBoundingClientRect().top),
          rectHeight: Math.round(h.getBoundingClientRect().height),
          position: window.getComputedStyle(h).position,
        };
      });

      // Scroll Back Up to 250px
      await page.eval(async () => {
        for (let y = 700; y >= 250; y -= 70) {
          window.scrollTo(0, y);
          await new Promise((res) => setTimeout(res, 16));
        }
        await new Promise((res) => setTimeout(res, 150));
      });

      const scrolledUpState = await page.eval(() => {
        const h = document.querySelector('header');
        return {
          scrollY: window.scrollY,
          rectTop: Math.round(h.getBoundingClientRect().top),
          position: window.getComputedStyle(h).position,
        };
      });

      const isHome = r.path === '/';
      const downOk = scrolledDownState.rectTop === 0;
      const upOk = scrolledUpState.rectTop === 0;

      if (!downOk || !upOk) {
        console.error(`  FAIL [${r.path}]: Down rectTop=${scrolledDownState.rectTop}, Up rectTop=${scrolledUpState.rectTop}`);
        hasErrors = true;
      } else {
        console.log(`  PASSED [${r.path}] ${r.name}: Sticky at top=0 (Down scrollY=${scrolledDownState.scrollY}, Up scrollY=${scrolledUpState.scrollY}, ${scrolledDownState.position})`);
      }

      // Verify Home transparent initial state
      if (isHome && !topState.isTransparent) {
        console.error(`  FAIL [Home]: Initial navbar is not transparent over hero!`);
        hasErrors = true;
      }
    }
    await page.close();

    // -------------------------------------------------------------------------
    // TEST 2: RESPONSIVE VIEWPORT STICKY BEHAVIOR (MOBILE & TABLET)
    // -------------------------------------------------------------------------
    console.log('\n[TEST 2] Auditing Navbar Sticky Behavior on Tablet (768px) and Mobile (390px)...');
    const viewports = [
      { width: 768, height: 1024, name: 'Tablet (768px)' },
      { width: 390, height: 844, name: 'Mobile (390px)' },
    ];

    for (const vp of viewports) {
      const vpPage = await browser.newPage({ width: vp.width, height: vp.height, mobile: vp.width < 768 });
      for (const testPath of ['/', '/about', '/services/psychiatric-care']) {
        await vpPage.goto('http://localhost:5173' + testPath, { settleMs: 400 });

        await vpPage.eval(async () => {
          for (let y = 0; y <= 500; y += 50) {
            window.scrollTo(0, y);
            await new Promise((res) => setTimeout(res, 16));
          }
          await new Promise((res) => setTimeout(res, 150));
        });

        const vpState = await vpPage.eval(() => {
          const h = document.querySelector('header');
          const rect = h.getBoundingClientRect();
          const scrollWidth = document.documentElement.scrollWidth;
          return {
            rectTop: Math.round(rect.top),
            hasOverflow: scrollWidth > window.innerWidth + 2,
            position: window.getComputedStyle(h).position,
          };
        });

        if (vpState.rectTop !== 0 || vpState.hasOverflow) {
          console.error(`  FAIL [${vp.name} on ${testPath}]: rectTop=${vpState.rectTop}, overflow=${vpState.hasOverflow}`);
          hasErrors = true;
        } else {
          console.log(`  PASSED [${vp.name} on ${testPath}]: rectTop=0 (Sticky, Overflow: NO)`);
        }
      }
      await vpPage.close();
    }

  } catch (err) {
    console.error('Test execution error:', err);
    hasErrors = true;
  } finally {
    await browser.close();
  }

  console.log('\n================================================================');
  if (hasErrors) {
    console.error('   NAVBAR SUITE: FAILED WITH ISSUES   ');
  } else {
    console.log('   NAVBAR SUITE: 100% PASSED — STICKY NAVBAR CONFIRMED ACROSS ALL ROUTES   ');
  }
  console.log('================================================================');
}

testNavbarSticky();
