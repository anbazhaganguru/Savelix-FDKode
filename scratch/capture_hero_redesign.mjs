import fs from 'node:fs';
import { Browser, sleep } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const artifactDir = 'C:/Users/akash/.gemini/antigravity-ide/brain/1b5ee948-13ba-4b76-8cbf-1a8f622d209e';

async function main() {
  const browser = await Browser.launch();
  const page = await browser.newPage();

  const viewports = [
    { name: '1440px', width: 1440, height: 900, mobile: false },
    { name: '1920px', width: 1920, height: 1080, mobile: false },
    { name: '768px', width: 768, height: 1024, mobile: false },
    { name: '430px', width: 430, height: 932, mobile: true },
    { name: '390px', width: 390, height: 844, mobile: true },
    { name: '360px', width: 360, height: 780, mobile: true },
    { name: '320px', width: 320, height: 568, mobile: true },
  ];

  for (const vp of viewports) {
    console.log(`Capturing viewport: ${vp.name} (${vp.width}x${vp.height})`);
    await page.setViewport({ width: vp.width, height: vp.height, dsf: 1, mobile: vp.mobile });
    await page.goto('http://localhost:5173/', { settleMs: 1000 });

    // Check for any horizontal overflow
    const overflow = await page.eval(`(() => {
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
      };
    })()`);
    console.log(`  Viewport ${vp.name} overflow check:`, overflow);

    // Capture hero section screenshot
    const b64 = await page.screenshot({ format: 'jpeg', quality: 90 });
    fs.writeFileSync(`${artifactDir}/redesign-hero-${vp.name}.jpg`, Buffer.from(b64, 'base64'));
  }

  // Capture desktop scrolled navbar
  console.log('Capturing scrolled navbar at 1440px...');
  await page.setViewport({ width: 1440, height: 900, dsf: 1, mobile: false });
  await page.goto('http://localhost:5173/', { settleMs: 800 });
  await page.eval(`window.scrollTo(0, 400)`);
  await sleep(400);
  const scrolledB64 = await page.screenshot({ format: 'jpeg', quality: 90 });
  fs.writeFileSync(`${artifactDir}/redesign-navbar-scrolled-1440px.jpg`, Buffer.from(scrolledB64, 'base64'));

  // Capture mobile drawer
  console.log('Capturing mobile drawer at 390px...');
  await page.setViewport({ width: 390, height: 844, dsf: 1, mobile: true });
  await page.goto('http://localhost:5173/', { settleMs: 800 });
  await page.eval(`(() => {
    const btn = document.querySelector('button[aria-label*="Open main menu"]');
    if (btn) btn.click();
  })()`);
  await sleep(500);
  const drawerB64 = await page.screenshot({ format: 'jpeg', quality: 90 });
  fs.writeFileSync(`${artifactDir}/redesign-mobile-drawer-390px.jpg`, Buffer.from(drawerB64, 'base64'));

  // Capture close up of desktop logo
  console.log('Capturing desktop logo close up...');
  await page.setViewport({ width: 1440, height: 900, dsf: 1, mobile: false });
  await page.goto('http://localhost:5173/', { settleMs: 800 });
  const logoBox = await page.eval(`(() => {
    const el = document.querySelector('header a[aria-label*="SAVELIX"]');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: Math.max(0, Math.floor(r.x - 20)), y: Math.max(0, Math.floor(r.y - 12)), width: Math.ceil(r.width + 40), height: Math.ceil(r.height + 24) };
  })()`);
  if (logoBox) {
    const logoB64 = await page.screenshot({
      format: 'jpeg',
      quality: 95,
      clip: {
        x: logoBox.x,
        y: logoBox.y,
        width: logoBox.width,
        height: logoBox.height
      }
    });
    fs.writeFileSync(`${artifactDir}/redesign-logo-close-up-desktop.jpg`, Buffer.from(logoB64, 'base64'));
  }

  // Capture close up of mobile logo
  console.log('Capturing mobile logo close up...');
  await page.setViewport({ width: 390, height: 844, dsf: 1, mobile: true });
  await page.goto('http://localhost:5173/', { settleMs: 800 });
  const mobileLogoBox = await page.eval(`(() => {
    const el = document.querySelector('header a[aria-label*="SAVELIX"]');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: Math.max(0, Math.floor(r.x - 15)), y: Math.max(0, Math.floor(r.y - 10)), width: Math.ceil(r.width + 30), height: Math.ceil(r.height + 20) };
  })()`);
  if (mobileLogoBox) {
    const mobileLogoB64 = await page.screenshot({
      format: 'jpeg',
      quality: 95,
      clip: {
        x: mobileLogoBox.x,
        y: mobileLogoBox.y,
        width: mobileLogoBox.width,
        height: mobileLogoBox.height
      }
    });
    fs.writeFileSync(`${artifactDir}/redesign-logo-close-up-mobile.jpg`, Buffer.from(mobileLogoB64, 'base64'));
  }

  await browser.close();
  console.log('All visual verification captures complete!');
}

main().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
