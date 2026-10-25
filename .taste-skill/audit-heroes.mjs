import { Browser, sleep } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import { join } from 'node:path';

const outDir = '.taste-skill';
const browser = await Browser.launch({ width: 1440, height: 900 });

const pagesToTest = [
  { name: 'about', url: 'http://localhost:5173/about' },
  { name: 'services', url: 'http://localhost:5173/services' },
  { name: 'conditions', url: 'http://localhost:5173/conditions' },
  { name: 'psychiatric-care', url: 'http://localhost:5173/services/psychiatric-care' },
  { name: 'psychiatric-rehab', url: 'http://localhost:5173/services/psychiatric-rehabilitation' },
  { name: 'child-counselling', url: 'http://localhost:5173/services/child-adolescent-counselling' },
];

for (const p of pagesToTest) {
  const page = await browser.newPage({ width: 1440, height: 900 });
  await page.goto(p.url, { timeoutMs: 30000, settleMs: 1000 });
  await sleep(1000);
  await page.screenshot({ path: join(outDir, `hero-desktop-${p.name}.jpg`), quality: 85, fullPage: false });
  await page.close();
}

// Tablet captures (768)
for (const p of [pagesToTest[1], pagesToTest[3]]) {
  const tab = await browser.newPage({ width: 768, height: 1024 });
  await tab.goto(p.url, { timeoutMs: 30000, settleMs: 1000 });
  await sleep(1000);
  await tab.screenshot({ path: join(outDir, `hero-tablet-${p.name}.jpg`), quality: 85, fullPage: false });
  await tab.close();
}

// Mobile captures (390)
for (const p of [pagesToTest[0], pagesToTest[1], pagesToTest[4]]) {
  const mob = await browser.newPage({ width: 390, height: 844, mobile: true });
  await mob.goto(p.url, { timeoutMs: 30000, settleMs: 1000 });
  await sleep(1000);
  await mob.screenshot({ path: join(outDir, `hero-mobile-${p.name}.jpg`), quality: 85, fullPage: false });
  await mob.close();
}

await browser.close();
console.log('All hero screenshots captured successfully.');
