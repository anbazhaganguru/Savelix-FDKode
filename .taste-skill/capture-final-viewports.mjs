import { Browser, sleep } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import { mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const outDir = '.taste-skill/audit-renders/final';
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: 'mobile-390', width: 390, height: 844, mobile: true },
  { name: 'tablet-768', width: 768, height: 1024, mobile: false },
  { name: 'desktop-1440', width: 1440, height: 900, mobile: false },
  { name: 'large-1920', width: 1920, height: 1080, mobile: false },
  { name: 'qhd-2560', width: 2560, height: 1440, mobile: false },
  { name: '4k-3840', width: 3840, height: 2160, mobile: false },
];

const browser = await Browser.launch({ width: 1920, height: 1080 });
const url = 'http://localhost:5173/';

for (const vp of viewports) {
  console.log(`Capturing ${vp.name} (${vp.width}x${vp.height})...`);
  const page = await browser.newPage({ width: vp.width, height: vp.height, dsf: 1, mobile: vp.mobile });
  await page.goto(url, { timeoutMs: 30000, settleMs: 1000 });
  await sleep(1000);

  // Capture hero / fold
  const foldPath = join(outDir, `${vp.name}-fold.jpg`);
  await page.screenshot({ path: foldPath, quality: 85, fullPage: false });

  // Scroll to services & about
  await page.eval('window.scrollTo({ top: window.innerHeight * 0.9, behavior: "instant" })');
  await sleep(600);
  const midPath = join(outDir, `${vp.name}-mid.jpg`);
  await page.screenshot({ path: midPath, quality: 85, fullPage: false });

  // Scroll to lower half
  await page.eval('window.scrollTo({ top: window.innerHeight * 2.0, behavior: "instant" })');
  await sleep(600);
  const lowerPath = join(outDir, `${vp.name}-lower.jpg`);
  await page.screenshot({ path: lowerPath, quality: 85, fullPage: false });

  await page.close();
}

await browser.close();
console.log('All 6 viewports captured successfully in', outDir);
