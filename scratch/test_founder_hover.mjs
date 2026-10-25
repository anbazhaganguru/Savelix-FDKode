import { Browser, sleep } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

async function main() {
  const browser = await Browser.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1440, height: 900, dsf: 1, mobile: false });
  await page.goto('http://localhost:5173/', { settleMs: 1000 });

  await page.eval(`(() => {
    const el = document.getElementById('about-teaser');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  })()`);
  await sleep(600);

  // Get initial position of nameplate
  const initialRect = await page.eval(`(() => {
    const el = document.querySelector('[aria-label="Jayalakshmi, Founder of SAVELIX"]');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    return { y: r.y, transform: style.transform, classes: el.className };
  })()`);
  console.log('Initial nameplate state:', initialRect);

  // Hover over the portrait
  console.log('Moving mouse over the portrait...');
  const portraitBox = await page.eval(`(() => {
    const el = document.querySelector('#about-teaser img[alt*="Jayalakshmi"]');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
  })()`);

  if (portraitBox) {
    await page.send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: portraitBox.x,
      y: portraitBox.y,
    });
    await sleep(400);

    const hoveredRect = await page.eval(`(() => {
      const el = document.querySelector('[aria-label="Jayalakshmi, Founder of SAVELIX"]');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return { y: r.y, transform: style.transform, classes: el.className };
    })()`);
    console.log('Hovered nameplate state:', hoveredRect);
    console.log('Delta Y (should be negative if lifted upward):', hoveredRect ? hoveredRect.y - initialRect.y : 'N/A');
  }

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
