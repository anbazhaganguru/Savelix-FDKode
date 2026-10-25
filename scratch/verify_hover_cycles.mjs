import fs from 'node:fs';
import { Browser, sleep } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const artifactDir = 'C:/Users/akash/.gemini/antigravity-ide/brain/1b5ee948-13ba-4b76-8cbf-1a8f622d209e';

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

  const portraitBox = await page.eval(`(() => {
    const el = document.querySelector('#about-teaser img[alt*="Jayalakshmi"]');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
  })()`);

  // Move mouse away to ensure clean rest state
  await page.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 10, y: 10 });
  await sleep(400);

  // Capture rest state
  console.log('Capturing rest state...');
  const restB64 = await page.screenshot({ format: 'jpeg', quality: 90 });
  fs.writeFileSync(`${artifactDir}/founder-hover-rest.jpg`, Buffer.from(restB64, 'base64'));

  // Hover over portrait
  console.log('Hovering over portrait...');
  await page.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: portraitBox.x, y: portraitBox.y });
  await sleep(400);

  // Capture hovered state
  console.log('Capturing hovered state...');
  const hoveredB64 = await page.screenshot({ format: 'jpeg', quality: 90 });
  fs.writeFileSync(`${artifactDir}/founder-hover-active.jpg`, Buffer.from(hoveredB64, 'base64'));

  // Test 5 repeated cycles of hover in and out
  console.log('Running repeated hover cycles...');
  for (let i = 1; i <= 5; i++) {
    // Hover out
    await page.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 10, y: 10 });
    await sleep(350);
    const unhovered = await page.eval(`(() => {
      const el = document.querySelector('[aria-label="Jayalakshmi, Founder of SAVELIX"]');
      return el ? el.getBoundingClientRect().y : null;
    })()`);

    // Hover in
    await page.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: portraitBox.x, y: portraitBox.y });
    await sleep(350);
    const hovered = await page.eval(`(() => {
      const el = document.querySelector('[aria-label="Jayalakshmi, Founder of SAVELIX"]');
      return el ? el.getBoundingClientRect().y : null;
    })()`);

    console.log(`  Cycle ${i}: restY=${unhovered?.toFixed(1)}, hoverY=${hovered?.toFixed(1)}, lift=${(unhovered - hovered)?.toFixed(1)}px`);
  }

  // Also test hovering directly onto the plaque itself
  console.log('Testing direct hover onto the plaque...');
  const plaqueBox = await page.eval(`(() => {
    const el = document.querySelector('[aria-label="Jayalakshmi, Founder of SAVELIX"]');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
  })()`);

  // Move away
  await page.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 10, y: 10 });
  await sleep(350);
  // Move directly to plaque
  await page.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: plaqueBox.x, y: plaqueBox.y });
  await sleep(350);
  const directPlaqueHoverY = await page.eval(`(() => {
    const el = document.querySelector('[aria-label="Jayalakshmi, Founder of SAVELIX"]');
    return el ? el.getBoundingClientRect().y : null;
  })()`);
  console.log('Direct plaque hover Y:', directPlaqueHoverY?.toFixed(1));

  await browser.close();
  console.log('All hover verification complete!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
