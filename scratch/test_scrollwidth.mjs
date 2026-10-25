import { Browser } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

async function test() {
  const browser = await Browser.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, dsf: 1 });
  await page.goto('http://localhost:5173/', { settleMs: 1000 });
  
  // Find which element causes scrollWidth to expand by removing or checking elements
  const info = await page.eval(`(() => {
    const sw = document.documentElement.scrollWidth;
    const cw = document.documentElement.clientWidth;
    
    // Check main container and sections
    const sections = Array.from(document.querySelectorAll('section, header, footer, div#root > div'));
    const results = sections.map(s => {
      const rect = s.getBoundingClientRect();
      const sScrollWidth = s.scrollWidth;
      const sClientWidth = s.clientWidth;
      const sComputed = window.getComputedStyle(s).overflow;
      return {
        id: s.id || s.tagName,
        class: (s.className && typeof s.className === 'string') ? s.className.slice(0, 50) : '',
        right: Math.round(rect.right),
        width: Math.round(rect.width),
        sScrollWidth,
        sClientWidth,
        overflow: sComputed
      };
    });
    return { sw, cw, results };
  })()`);
  
  console.log('Scroll info:', JSON.stringify(info, null, 2));
  await browser.close();
}
test();
