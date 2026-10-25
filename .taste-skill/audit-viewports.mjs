import { Browser, sleep } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import { join } from 'node:path';

const outDir = '.taste-skill/audit-viewports';
const browser = await Browser.launch({ width: 1440, height: 900 });

const viewports = [
  { name: '320px', width: 320, height: 600, mobile: true },
  { name: '390px', width: 390, height: 844, mobile: true },
  { name: '768px', width: 768, height: 1024 },
  { name: '1024px', width: 1024, height: 768 },
  { name: '1440px', width: 1440, height: 900 },
  { name: '1920px', width: 1920, height: 1080 },
  { name: '2560px', width: 2560, height: 1440 },
];

for (const vp of viewports) {
  const page = await browser.newPage({ width: vp.width, height: vp.height, mobile: vp.mobile });
  await page.goto('http://localhost:5173/services/psychiatric-care', { timeoutMs: 30000, settleMs: 1000 });
  await sleep(600);
  await page.screenshot({ path: join(outDir, `psych-care-${vp.name}.jpg`), quality: 85, fullPage: false });
  await page.close();
}

await browser.close();
console.log('Viewport audit captures complete.');
