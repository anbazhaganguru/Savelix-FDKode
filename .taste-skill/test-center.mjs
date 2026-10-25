import { Browser } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

async function testCenter() {
  const browser = await Browser.launch({ width: 1440, height: 900 });
  for (const w of [1440, 1024, 768, 390, 320]) {
    const page = await browser.newPage({ width: w, height: 900, mobile: w < 600 });
    await page.goto('http://localhost:5173/', { timeoutMs: 30000, settleMs: 1000 });
    const info = await page.eval(`(() => {
      const h1 = document.querySelector('#hero h1');
      const eyebrow = document.querySelector('[data-hero-eyebrow]');
      const desc = document.querySelector('[data-hero-description]');
      const actions = document.querySelector('[data-hero-actions]');
      const h1Rect = h1.getBoundingClientRect();
      const eyeRect = eyebrow.getBoundingClientRect();
      const descRect = desc.getBoundingClientRect();
      const actRect = actions.getBoundingClientRect();
      return {
        width: window.innerWidth,
        windowCenter: Math.round(window.innerWidth / 2),
        h1Center: Math.round(h1Rect.left + h1Rect.width / 2),
        eyeCenter: Math.round(eyeRect.left + eyeRect.width / 2),
        descCenter: Math.round(descRect.left + descRect.width / 2),
        actCenter: Math.round(actRect.left + actRect.width / 2),
        h1Height: Math.round(h1Rect.height),
        h1FontSize: parseFloat(getComputedStyle(h1).fontSize),
        h1LineHeight: parseFloat(getComputedStyle(h1).lineHeight)
      };
    })()`);
    console.log(w + 'px:', info);
    await page.close();
  }
  await browser.close();
}

testCenter();
