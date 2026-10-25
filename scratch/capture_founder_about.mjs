import fs from 'node:fs';
import path from 'node:path';
import { Browser, sleep } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const outputDir = 'd:/Savelix-FDKode/.taste-skill/founder-about-inspect';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const browser = await Browser.launch({ width: 1440, height: 900 });

// 1. Desktop 1440px
{
  const page = await browser.newPage({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/about', { timeoutMs: 30000, settleMs: 500 });
  await sleep(400);

  // Scroll to founder profile section
  await page.eval(`(() => {
    const el = document.getElementById('founder-profile');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  })()`);
  await sleep(500);

  await page.screenshot({ path: path.join(outputDir, 'founder-about-1440.jpg'), quality: 90, fullPage: false });
  console.log('Saved founder-about-1440.jpg');
  await page.close();
}

// 2. Tablet 768px
{
  const page = await browser.newPage({ width: 768, height: 1024 });
  await page.goto('http://localhost:5173/about', { timeoutMs: 30000, settleMs: 500 });
  await sleep(400);

  await page.eval(`(() => {
    const el = document.getElementById('founder-profile');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  })()`);
  await sleep(500);

  await page.screenshot({ path: path.join(outputDir, 'founder-about-768.jpg'), quality: 90, fullPage: false });
  console.log('Saved founder-about-768.jpg');
  await page.close();
}

// 3. Mobile viewports: 430px, 390px, 360px, 320px
const mobileWidths = [430, 390, 360, 320];
for (const w of mobileWidths) {
  const page = await browser.newPage({ width: w, height: 850, mobile: true });
  await page.goto('http://localhost:5173/about', { timeoutMs: 30000, settleMs: 500 });
  await sleep(400);

  await page.eval(`(() => {
    const el = document.getElementById('founder-profile');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  })()`);
  await sleep(500);

  // Check horizontal overflow
  const overflow = await page.eval(`(() => {
    const docW = document.documentElement.scrollWidth;
    const winW = window.innerWidth;
    return { docW, winW, hasOverflow: docW > winW };
  })()`);
  console.log(`Mobile ${w}px overflow check:`, overflow);

  await page.screenshot({ path: path.join(outputDir, `founder-about-${w}.jpg`), quality: 88, fullPage: false });
  console.log(`Saved founder-about-${w}.jpg`);
  await page.close();
}

// 4. Also check that all original sections exist on the page
{
  const page = await browser.newPage({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/about', { timeoutMs: 30000, settleMs: 500 });
  await sleep(400);

  const sectionsAudit = await page.eval(`(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3')).map(h => h.innerText.replace(/\\n/g, ' '));
    return headings;
  })()`);
  console.log('Page Headings Audit:', sectionsAudit);
  await page.close();
}

await browser.close();
console.log('All founder profile captures completed successfully.');
