import { Browser } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const browser = await Browser.launch({ width: 1440, height: 900 });

async function testSizes(width, fontSize, padding) {
  const page = await browser.newPage({ width, height: 800, mobile: width < 768 });
  await page.goto('http://localhost:5173/', { timeoutMs: 20000, settleMs: 500 });
  const result = await page.eval(`((fontSize, padding) => {
    const h1 = document.getElementById('hero-heading');
    const heroFrame = document.querySelector('.savelix-hero-frame > div');
    const outerFrame = document.querySelector('.savelix-hero-frame');
    if (padding) {
      heroFrame.style.padding = padding;
    }
    h1.style.fontSize = fontSize;
    const s1 = h1.querySelector('span:first-child');
    const s2 = h1.querySelector('span:last-child');
    const s1Rect = s1.getBoundingClientRect();
    const s1Style = window.getComputedStyle(s1);
    const lh1 = parseFloat(s1Style.lineHeight) || parseFloat(s1Style.fontSize);
    const lines1 = Math.round(s1Rect.height / lh1);

    const s2Rect = s2.getBoundingClientRect();
    const s2Style = window.getComputedStyle(s2);
    const lh2 = parseFloat(s2Style.lineHeight) || parseFloat(s2Style.fontSize);
    const lines2 = Math.round(s2Rect.height / lh2);

    return {
      fontSize,
      padding: heroFrame.style.padding,
      s1Width: s1Rect.width,
      s1Height: s1Rect.height,
      s1Lines: lines1,
      s2Lines: lines2,
      totalLines: lines1 + lines2
    };
  })(${JSON.stringify(fontSize)}, ${JSON.stringify(padding)})`);
  await page.close();
  return result;
}

for (const size of ['18px', '19px', '20px', '21px', '22px']) {
  console.log(`390px with ${size}:`, await testSizes(390, size, '20px'));
}

for (const size of ['36px', '38px', '40px', '42px', '44px']) {
  console.log(`768px with ${size}:`, await testSizes(768, size, null));
}

await browser.close();
