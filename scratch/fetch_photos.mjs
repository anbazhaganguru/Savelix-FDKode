import { Browser, sleep } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const category = process.argv[2] || 'clinic-reception';
const browser = await Browser.launch({ width: 1280, height: 800 });
const page = await browser.newPage({ width: 1280, height: 800 });

try {
  await page.goto(`https://unsplash.com/s/photos/${category}`, { timeoutMs: 30000, settleMs: 2000 });
  await sleep(2000);
  const images = await page.eval(`
    Array.from(document.querySelectorAll('img[src*="images.unsplash.com/photo-"]'))
      .map(i => i.src)
  `);
  console.log(`Images found for ${category}:`, images.length);
  const clean = [...new Set(images.map(url => {
    const match = url.match(/(https:\/\/images\.unsplash\.com\/photo-[^?]+)/);
    return match ? match[1] : null;
  }).filter(Boolean))];
  console.log('Clean URLs:', JSON.stringify(clean.slice(0, 10), null, 2));
} catch (err) {
  console.error('Error fetching photos:', err);
} finally {
  await browser.close();
}
