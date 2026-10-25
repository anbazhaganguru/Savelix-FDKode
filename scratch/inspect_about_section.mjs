import fs from 'node:fs';
import { Browser, sleep } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const artifactDir = 'C:/Users/akash/.gemini/antigravity-ide/brain/1b5ee948-13ba-4b76-8cbf-1a8f622d209e';

async function main() {
  const browser = await Browser.launch();
  const page = await browser.newPage();

  const widths = [1440, 1280, 1024, 820, 768, 390];

  for (const w of widths) {
    console.log(`Inspecting About section at width ${w}px...`);
    await page.setViewport({ width: w, height: 900, dsf: 1, mobile: w < 768 });
    await page.goto('http://localhost:5173/', { settleMs: 1000 });

    // Scroll to #about-teaser
    await page.eval(`(() => {
      const el = document.getElementById('about-teaser');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    })()`);
    await sleep(600);

    // Get bounding box of the about-teaser or the founder portrait
    const info = await page.eval(`(() => {
      const section = document.getElementById('about-teaser');
      const img = document.querySelector('#about-teaser img[alt*="Jayalakshmi"]');
      const wrapper = img ? img.closest('.group') : null;
      if (!section) return null;
      const sr = section.getBoundingClientRect();
      const ir = img ? img.getBoundingClientRect() : null;
      const wr = wrapper ? wrapper.getBoundingClientRect() : null;
      return {
        section: { x: sr.x, y: sr.y, width: sr.width, height: sr.height },
        img: ir ? { x: ir.x, y: ir.y, width: ir.width, height: ir.height } : null,
        wrapper: wr ? { x: wr.x, y: wr.y, width: wr.width, height: wr.height } : null,
      };
    })()`);
    console.log(`  Width ${w}px layout info:`, info);

    const b64 = await page.screenshot({ format: 'jpeg', quality: 90 });
    fs.writeFileSync(`${artifactDir}/current-about-${w}px.jpg`, Buffer.from(b64, 'base64'));
  }

  await browser.close();
  console.log('Capture complete!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
