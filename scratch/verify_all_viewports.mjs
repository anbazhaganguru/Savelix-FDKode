import fs from 'node:fs';
import { Browser } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const artifactDir = 'C:/Users/akash/.gemini/antigravity-ide/brain/1b5ee948-13ba-4b76-8cbf-1a8f622d209e';

async function main() {
  const browser = await Browser.launch();
  const page = await browser.newPage();

  const viewports = [
    { name: '1920px', width: 1920, height: 1080, mobile: false },
    { name: '1440px', width: 1440, height: 900, mobile: false },
    { name: '1366px', width: 1366, height: 768, mobile: false },
    { name: '1280px', width: 1280, height: 800, mobile: false },
    { name: '1024px', width: 1024, height: 768, mobile: false },
    { name: '820px',  width: 820,  height: 1180, mobile: false },
    { name: '768px',  width: 768,  height: 1024, mobile: false },
    { name: '430px',  width: 430,  height: 932, mobile: true },
    { name: '390px',  width: 390,  height: 844, mobile: true },
    { name: '360px',  width: 360,  height: 780, mobile: true },
    { name: '320px',  width: 320,  height: 568, mobile: true },
  ];

  const results = [];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height, dsf: 1, mobile: vp.mobile });
    await page.goto('http://localhost:5173/', { settleMs: 1000 });

    const overflow = await page.eval(`(() => {
      const doc = document.documentElement;
      return {
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
        hasOverflow: doc.scrollWidth > doc.clientWidth
      };
    })()`);

    console.log(`Viewport ${vp.name.padEnd(7)}: scrollWidth=${overflow.scrollWidth}, clientWidth=${overflow.clientWidth}, overflow=${overflow.hasOverflow}`);
    results.push({ ...vp, ...overflow });

    // Capture full-page for representative viewports
    if (['1920px', '1440px', '768px', '390px', '320px'].includes(vp.name)) {
      const b64 = await page.screenshot({ format: 'jpeg', quality: 85, fullPage: true });
      fs.writeFileSync(`${artifactDir}/audit-decor-${vp.name}.jpg`, Buffer.from(b64, 'base64'));
    }
  }

  // Also capture closeups of each decorated section at 1440px
  console.log('\nCapturing individual section closeups at 1440px...');
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
    const rect = await page.eval(`(() => {
      const el = document.getElementById('${id}');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: r.x, y: r.y + window.scrollY, width: r.width, height: r.height };
    })()`);

    if (rect) {
      const clip = {
        x: 0,
        y: Math.max(0, Math.floor(rect.y)),
        width: 1440,
        height: Math.min(Math.ceil(rect.height), 1200)
      };
      const b64 = await page.screenshot({ format: 'jpeg', quality: 88, clip });
      fs.writeFileSync(`${artifactDir}/closeup-${id}.jpg`, Buffer.from(b64, 'base64'));
      console.log(`  Saved closeup-${id}.jpg`);
    }
  }

  await browser.close();
  console.log('\nAudit complete! All viewports and section closeups captured.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
