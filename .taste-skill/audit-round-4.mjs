import { Browser, sleep } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = '.taste-skill/audit-round-4';
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

const browser = await Browser.launch({ width: 1440, height: 900 });

// 1. Test multi-viewport scaling on Psychiatric Care and Services
const viewports = [
  { name: '320px', width: 320, height: 640, mobile: true },
  { name: '390px', width: 390, height: 844, mobile: true },
  { name: '768px', width: 768, height: 1024 },
  { name: '1024px', width: 1024, height: 768 },
  { name: '1440px', width: 1440, height: 900 },
  { name: '1920px', width: 1920, height: 1080 },
  { name: '2560px', width: 2560, height: 1440 },
  { name: '3840px', width: 3840, height: 1800 },
];

console.log('Capturing viewport scale tests...');
for (const vp of viewports) {
  const page = await browser.newPage({ width: vp.width, height: vp.height, mobile: vp.mobile });
  await page.goto('http://localhost:5173/services/psychiatric-care', { settleMs: 800 });
  await sleep(400);
  await page.screenshot({ path: join(outDir, `psych-care-${vp.name}.jpg`), quality: 80 });
  await page.close();
}

// 2. Capture all 13 inner pages at 1440px desktop
const pages = [
  { path: '/about', name: '01-about' },
  { path: '/services', name: '02-services' },
  { path: '/conditions', name: '03-conditions' },
  { path: '/why-savelix', name: '04-why-savelix' },
  { path: '/education-internship', name: '05-education-internship' },
  { path: '/contact', name: '06-contact' },
  { path: '/services/psychiatric-care', name: '07-psychiatric-care' },
  { path: '/services/psychological-counselling', name: '08-psychological-counselling' },
  { path: '/services/psychiatric-rehabilitation', name: '09-psychiatric-rehab' },
  { path: '/services/family-counselling', name: '10-family-counselling' },
  { path: '/services/substance-use-support', name: '11-substance-use' },
  { path: '/services/child-adolescent-counselling', name: '12-child-counselling' },
  { path: '/services/inpatient-safety-monitoring', name: '13-inpatient-safety' },
];

console.log('Capturing all 13 pages at 1440px desktop...');
for (const p of pages) {
  const page = await browser.newPage({ width: 1440, height: 900 });
  await page.goto(`http://localhost:5173${p.path}`, { settleMs: 800 });
  await sleep(400);
  await page.screenshot({ path: join(outDir, `desktop-${p.name}.jpg`), quality: 80 });
  await page.close();
}

// 3. Capture all 13 inner pages at 390px mobile
console.log('Capturing all 13 pages at 390px mobile...');
for (const p of pages) {
  const page = await browser.newPage({ width: 390, height: 844, mobile: true });
  await page.goto(`http://localhost:5173${p.path}`, { settleMs: 800 });
  await sleep(400);
  await page.screenshot({ path: join(outDir, `mobile-${p.name}.jpg`), quality: 80 });
  await page.close();
}

await browser.close();
console.log('All verification captures complete in .taste-skill/audit-round-4/');
