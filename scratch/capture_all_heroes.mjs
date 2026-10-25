import fs from 'node:fs';
import path from 'node:path';
import { Browser, sleep } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const outputDir = 'd:/Savelix-FDKode/.taste-skill/audit-verification';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const routes = [
  { name: 'about', path: '/about' },
  { name: 'services', path: '/services' },
  { name: 'conditions', path: '/conditions' },
  { name: 'why-savelix', path: '/why-savelix' },
  { name: 'education-internship', path: '/education-internship' },
  { name: 'contact', path: '/contact' },
  { name: 'psychiatric-care', path: '/services/psychiatric-care' },
  { name: 'psychological-counselling', path: '/services/psychological-counselling' },
  { name: 'psychiatric-rehabilitation', path: '/services/psychiatric-rehabilitation' },
  { name: 'family-counselling', path: '/services/family-counselling' },
  { name: 'substance-use-support', path: '/services/substance-use-support' },
  { name: 'child-adolescent-counselling', path: '/services/child-adolescent-counselling' },
  { name: 'inpatient-safety', path: '/services/inpatient-safety-monitoring' },
];

const browser = await Browser.launch({ width: 1440, height: 900 });

console.log('--- Capturing 1440px Desktop Heroes for all 13 routes ---');
for (const r of routes) {
  const page = await browser.newPage({ width: 1440, height: 800 });
  await page.goto(`http://localhost:5173${r.path}`, { timeoutMs: 30000, settleMs: 500 });
  await sleep(400);
  const filePath = path.join(outputDir, `${r.name}-1440.jpg`);
  await page.screenshot({ path: filePath, quality: 85, fullPage: false });
  await page.close();
  console.log(`Saved ${r.name}-1440.jpg`);
}

console.log('--- Capturing 768px Tablet Heroes (Sample) ---');
for (const r of [routes[0], routes[1], routes[6], routes[8], routes[12]]) {
  const page = await browser.newPage({ width: 768, height: 900 });
  await page.goto(`http://localhost:5173${r.path}`, { timeoutMs: 30000, settleMs: 500 });
  await sleep(400);
  const filePath = path.join(outputDir, `${r.name}-768.jpg`);
  await page.screenshot({ path: filePath, quality: 85, fullPage: false });
  await page.close();
  console.log(`Saved ${r.name}-768.jpg`);
}

console.log('--- Capturing 390px Mobile Heroes (Sample) ---');
for (const r of [routes[0], routes[1], routes[6], routes[8], routes[11], routes[12]]) {
  const page = await browser.newPage({ width: 390, height: 844, mobile: true });
  await page.goto(`http://localhost:5173${r.path}`, { timeoutMs: 30000, settleMs: 500 });
  await sleep(400);
  const filePath = path.join(outputDir, `${r.name}-390.jpg`);
  await page.screenshot({ path: filePath, quality: 85, fullPage: false });
  await page.close();
  console.log(`Saved ${r.name}-390.jpg`);
}

console.log('--- Capturing 1920px Ultrawide Heroes (Sample) ---');
for (const r of [routes[0], routes[1], routes[6]]) {
  const page = await browser.newPage({ width: 1920, height: 900 });
  await page.goto(`http://localhost:5173${r.path}`, { timeoutMs: 30000, settleMs: 500 });
  await sleep(400);
  const filePath = path.join(outputDir, `${r.name}-1920.jpg`);
  await page.screenshot({ path: filePath, quality: 85, fullPage: false });
  await page.close();
  console.log(`Saved ${r.name}-1920.jpg`);
}

await browser.close();
console.log('All hero screenshots captured successfully!');
