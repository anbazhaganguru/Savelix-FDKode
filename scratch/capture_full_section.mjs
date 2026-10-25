import path from 'node:path';
import { Browser, sleep } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const outputDir = 'd:/Savelix-FDKode/.taste-skill/founder-about-inspect';

const browser = await Browser.launch({ width: 1440, height: 900 });

// 1. Desktop full section
{
  const page = await browser.newPage({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/about', { timeoutMs: 30000, settleMs: 500 });
  await sleep(400);

  const rect = await page.eval(`(() => {
    const el = document.getElementById('founder-profile');
    const r = el.getBoundingClientRect();
    return { x: r.x, y: r.y + window.scrollY, width: r.width, height: r.height };
  })()`);

  // Scroll to section start
  await page.eval(`window.scrollTo(0, ${rect.y})`);
  await sleep(400);

  await page.screenshot({
    path: path.join(outputDir, 'founder-section-1440.jpg'),
    clip: { x: 0, y: rect.y, width: 1440, height: Math.min(rect.height, 950) },
    quality: 90,
  });
  console.log('Saved founder-section-1440.jpg');
  await page.close();
}

// 2. Mobile 390px portrait view
{
  const page = await browser.newPage({ width: 390, height: 844, mobile: true });
  await page.goto('http://localhost:5173/about', { timeoutMs: 30000, settleMs: 500 });
  await sleep(400);

  // Scroll directly to portrait element within founder profile
  await page.eval(`(() => {
    const el = document.querySelector('#founder-profile [role="region"]');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  })()`);
  await sleep(400);

  await page.screenshot({ path: path.join(outputDir, 'founder-mobile-portrait-390.jpg'), quality: 90, fullPage: false });
  console.log('Saved founder-mobile-portrait-390.jpg');
  await page.close();
}

await browser.close();
