import { Browser } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import fs from 'node:fs';

const browser = await Browser.launch({ width: 1440, height: 900 });
const page = await browser.newPage({ width: 1440, height: 900 });
await page.goto('http://localhost:5173/services', { timeoutMs: 20000, settleMs: 500 });

fs.mkdirSync('.taste-skill/services-before', { recursive: true });

// Scroll to the "Dedicated Care Disciplines" section and capture it
await page.eval(() => {
  const heading = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Dedicated'));
  if (heading) {
    heading.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
});

await page.screenshot({ path: '.taste-skill/services-before/services-disciplines-1440.jpg', quality: 90 });

// Viewports to test
const viewports = [
  { width: 1024, height: 800, mobile: false, name: '1024' },
  { width: 768, height: 800, mobile: false, name: '768' },
  { width: 390, height: 844, mobile: true, name: '390' },
  { width: 320, height: 600, mobile: true, name: '320' },
];

for (const vp of viewports) {
  await page.setViewport(vp);
  await page.eval(() => {
    const heading = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Dedicated'));
    if (heading) {
      heading.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  });
  await new Promise(r => setTimeout(r, 200));
  await page.screenshot({ path: `.taste-skill/services-before/services-disciplines-${vp.name}.jpg`, quality: 90 });
}

await browser.close();
console.log('Services before screenshots captured successfully!');
