import { Browser, sleep } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const browser = await Browser.launch({ width: 1440, height: 1200 });
const page = await browser.newPage({ width: 1440, height: 1200 });
const fileUrl = pathToFileURL(resolve('.taste-skill/contact-sheet.html')).href;

await page.goto(fileUrl, { settleMs: 1500 });
await sleep(1000);

await page.screenshot({ path: '.taste-skill/contact-sheet-full.jpg', quality: 80, fullPage: true });

await page.close();
await browser.close();
console.log('Contact sheet full screenshot captured.');
