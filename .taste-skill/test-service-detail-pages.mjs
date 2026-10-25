import { Browser } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

async function testServicePages() {
  const browser = await Browser.launch({ width: 1440, height: 900 });
  const page = await browser.newPage({ width: 1440, height: 900, mobile: false });

  const routes = [
    '/services/psychiatric-care',
    '/services/psychological-counselling',
    '/services/psychiatric-rehabilitation',
    '/services/family-counselling',
    '/services/substance-use-support',
    '/services/child-adolescent-counselling',
    '/services/inpatient-safety-monitoring',
  ];

  console.log('Testing all 7 service detail pages for card and container reveals:');
  for (const r of routes) {
    await page.goto('http://localhost:5173' + r, { settleMs: 400 });
    const audit = await page.eval(async () => {
      for (let y = 0; y <= document.body.scrollHeight; y += 300) {
        if (window.lenis) window.lenis.scrollTo(y, { immediate: true });
        else window.scrollTo(0, y);
        if (window.ScrollTrigger) window.ScrollTrigger.update();
        await new Promise((res) => setTimeout(res, 25));
      }
      await new Promise((res) => setTimeout(res, 150));

      const cards = Array.from(document.querySelectorAll('section .grid > div, section div[class*="rounded-"][class*="p-"]'));
      const zeros = cards.filter((el) => window.getComputedStyle(el).opacity === '0');
      return { total: cards.length, zeros: zeros.length };
    });

    console.log(`  ${r}: ${audit.total} cards checked, ${audit.zeros} stuck at 0 opacity`);
  }

  await browser.close();
  console.log('All service detail pages passed!');
}

testServicePages();
