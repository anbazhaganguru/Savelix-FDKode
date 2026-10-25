import { Browser } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const browser = await Browser.launch({ width: 1280, height: 800 });
const page = await browser.newPage({ width: 1280, height: 800 });

try {
  await page.goto('https://www.instagram.com/manasu_mukkiyam/', { timeoutMs: 15000, settleMs: 3000 });
  const data = await page.eval(`(() => {
    const metaDesc = document.querySelector('meta[name="description"]')?.content;
    const ogDesc = document.querySelector('meta[property="og:description"]')?.content;
    const ogTitle = document.querySelector('meta[property="og:title"]')?.content;
    const h1 = document.querySelector('header h1, header h2, h1, h2')?.innerText;
    const headerText = document.querySelector('header')?.innerText;
    return { metaDesc, ogDesc, ogTitle, h1, headerText };
  })()`);
  console.log('Instagram Data:', JSON.stringify(data, null, 2));
} catch (e) {
  console.log('Error loading Instagram:', e.message);
} finally {
  await browser.close();
}
