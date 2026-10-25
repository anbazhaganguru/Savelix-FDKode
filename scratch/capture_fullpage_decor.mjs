import fs from 'node:fs';
import { Browser, sleep } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const artifactDir = 'C:/Users/akash/.gemini/antigravity-ide/brain/1b5ee948-13ba-4b76-8cbf-1a8f622d209e';

async function main() {
  const browser = await Browser.launch();
  const page = await browser.newPage();

  const viewports = [
    { name: '1440px', width: 1440, height: 900, mobile: false },
    { name: '1920px', width: 1920, height: 1080, mobile: false },
    { name: '1280px', width: 1280, height: 900, mobile: false },
    { name: '768px', width: 768, height: 1024, mobile: false },
    { name: '390px', width: 390, height: 844, mobile: true },
    { name: '360px', width: 360, height: 780, mobile: true },
    { name: '320px', width: 320, height: 568, mobile: true },
  ];

  for (const vp of viewports) {
    console.log(`Testing viewport ${vp.name}...`);
    await page.setViewport({ width: vp.width, height: vp.height, dsf: 1, mobile: vp.mobile });
    await page.goto('http://localhost:5173/', { settleMs: 1200 });

    // Verify horizontal overflow
    const overflow = await page.eval(`(() => {
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
      };
    })()`);
    console.log(`  ${vp.name} overflow:`, overflow);

    // Full page screenshot
    const b64 = await page.screenshot({ format: 'jpeg', quality: 85, fullPage: true });
    fs.writeFileSync(`${artifactDir}/decor-fullpage-${vp.name}.jpg`, Buffer.from(b64, 'base64'));
  }

  // Also capture individual section close-ups at 1440px
  console.log('Capturing section close-ups at 1440px...');
  await page.setViewport({ width: 1440, height: 900, dsf: 1, mobile: false });
  await page.goto('http://localhost:5173/', { settleMs: 800 });

  const sections = [
    'about-teaser',
    'services-overview',
    'conditions-teaser',
    'rehabilitation-teaser',
    'why-savelix-teaser',
    'education-teaser',
    'final-cta'
  ];

  for (const id of sections) {
    await page.eval(`(() => {
      const el = document.getElementById('${id}');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    })()`);
    await sleep(400);

    const b64 = await page.screenshot({ format: 'jpeg', quality: 90 });
    fs.writeFileSync(`${artifactDir}/decor-section-${id}-1440px.jpg`, Buffer.from(b64, 'base64'));
  }

  await browser.close();
  console.log('All decorative captures complete!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
