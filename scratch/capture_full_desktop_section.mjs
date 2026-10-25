import path from 'node:path';
import { Browser, sleep } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const outputDir = 'd:/Savelix-FDKode/.taste-skill/founder-about-inspect';

const browser = await Browser.launch({ width: 1440, height: 1100 });
const page = await browser.newPage({ width: 1440, height: 1100 });
await page.goto('http://localhost:5173/about', { timeoutMs: 30000, settleMs: 500 });
await sleep(400);

await page.eval(`(() => {
  const el = document.getElementById('founder-profile');
  if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
})()`);
await sleep(500);

await page.screenshot({
  path: path.join(outputDir, 'founder-complete-desktop-1440.jpg'),
  quality: 92,
  fullPage: false
});

await browser.close();
console.log('Saved founder-complete-desktop-1440.jpg');
