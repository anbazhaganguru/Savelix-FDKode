import { Browser, sleep } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import { join } from 'node:path';

const outDir = '.taste-skill/audit-renders';
const browser = await Browser.launch({ width: 1440, height: 900 });
const page = await browser.newPage({ width: 1440, height: 900 });
await page.goto('http://localhost:5173/', { timeoutMs: 30000, settleMs: 1000 });
await sleep(1000);

// Capture Why Savelix & Education
await page.eval('window.scrollTo({ top: window.innerHeight * 3.2, behavior: "instant" })');
await sleep(600);
await page.screenshot({ path: join(outDir, 'desktop-1440-why-edu.jpg'), quality: 85, fullPage: false });

// Capture Final CTA & Footer
await page.eval('window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" })');
await sleep(600);
await page.screenshot({ path: join(outDir, 'desktop-1440-footer.jpg'), quality: 85, fullPage: false });

await page.close();

// Also capture mobile bottom
const mobPage = await browser.newPage({ width: 390, height: 844, mobile: true });
await mobPage.goto('http://localhost:5173/', { timeoutMs: 30000, settleMs: 1000 });
await sleep(800);
await mobPage.eval('window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" })');
await sleep(600);
await mobPage.screenshot({ path: join(outDir, 'mobile-390-footer.jpg'), quality: 85, fullPage: false });

await mobPage.close();
await browser.close();
console.log('Additional screenshots captured.');
