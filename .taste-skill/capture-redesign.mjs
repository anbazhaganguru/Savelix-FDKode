import { Browser } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import fs from 'node:fs';

const browser = await Browser.launch({ width: 1440, height: 900 });
const page = await browser.newPage({ width: 1440, height: 900 });
await page.goto('http://localhost:5173/services', { timeoutMs: 20000, settleMs: 500 });

fs.mkdirSync('.taste-skill/services-after', { recursive: true });

const viewports = [
  { width: 1440, height: 900, mobile: false, name: '1440' },
  { width: 1024, height: 800, mobile: false, name: '1024' },
  { width: 768, height: 800, mobile: false, name: '768' },
  { width: 430, height: 932, mobile: true, name: '430' },
  { width: 390, height: 844, mobile: true, name: '390' },
  { width: 360, height: 740, mobile: true, name: '360' },
  { width: 320, height: 600, mobile: true, name: '320' },
];

for (const vp of viewports) {
  await page.setViewport(vp);
  // Scroll to care-disciplines section with 90px offset for sticky navbar
  await page.eval(() => {
    const section = document.getElementById('care-disciplines');
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
    }
  });
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: `.taste-skill/services-after/disciplines-${vp.name}.jpg`, quality: 90 });
}

// Also capture mid-scroll to show Row 2 and Row 3 on desktop
await page.setViewport({ width: 1440, height: 900 });
await page.eval(() => {
  const section = document.getElementById('care-disciplines');
  if (section) {
    const top = section.getBoundingClientRect().top + window.scrollY + 280;
    window.scrollTo({ top, behavior: 'instant' });
  }
});
await new Promise(r => setTimeout(r, 200));
await page.screenshot({ path: `.taste-skill/services-after/disciplines-1440-lower.jpg`, quality: 90 });

// Verify navigation on all 7 links
const routes = [
  '/services/psychiatric-care',
  '/services/psychological-counselling',
  '/services/psychiatric-rehabilitation',
  '/services/family-counselling',
  '/services/substance-use-support',
  '/services/child-adolescent-counselling',
  '/services/inpatient-safety-monitoring'
];

for (const route of routes) {
  const linkExists = await page.eval((r) => {
    return !!document.querySelector(`a[href="${r}"]`);
  }, route);
  console.log(`Route ${route} verified:`, linkExists);
}

await browser.close();
console.log('Capture & verification completed successfully!');
