import { Browser } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

async function test() {
  const browser = await Browser.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, dsf: 1 });
  await page.goto('http://localhost:5173/', { settleMs: 1000 });
  
  const overflow = await page.eval(`(() => {
    const docW = document.documentElement.clientWidth;
    const elements = Array.from(document.querySelectorAll('*'));
    const bad = [];
    for (const el of elements) {
      const r = el.getBoundingClientRect();
      if (r.right > docW + 1) {
        bad.push({
          tag: el.tagName,
          id: el.id,
          className: (el.className && typeof el.className === 'string') ? el.className.slice(0, 80) : '',
          right: Math.round(r.right),
          width: Math.round(r.width)
        });
      }
    }
    return bad;
  })()`);
  console.log('BAD ELEMENTS:', JSON.stringify(overflow, null, 2));
  await browser.close();
}
test();
