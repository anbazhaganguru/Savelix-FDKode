import { Browser } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const browser = await Browser.launch({ width: 1440, height: 900 });

async function checkHeadline(width) {
  const page = await browser.newPage({ width, height: 800, mobile: width < 768 });
  await page.goto('http://localhost:5173/', { timeoutMs: 20000, settleMs: 500 });
  const info = await page.eval(`(() => {
    const h1 = document.getElementById('hero-heading');
    if (!h1) return { found: false };
    const rect = h1.getBoundingClientRect();
    const spans = Array.from(h1.querySelectorAll('span')).map(s => {
      const sRect = s.getBoundingClientRect();
      const style = window.getComputedStyle(s);
      const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize);
      const lines = Math.round(sRect.height / lineHeight);
      return {
        text: s.innerText.trim(),
        width: sRect.width,
        height: sRect.height,
        fontSize: style.fontSize,
        lineHeight: style.lineHeight,
        lines
      };
    });
    return {
      width: rect.width,
      height: rect.height,
      spans
    };
  })()`);
  await page.close();
  return info;
}

console.log('390px:', JSON.stringify(await checkHeadline(390), null, 2));
console.log('768px:', JSON.stringify(await checkHeadline(768), null, 2));
console.log('1440px:', JSON.stringify(await checkHeadline(1440), null, 2));

await browser.close();
