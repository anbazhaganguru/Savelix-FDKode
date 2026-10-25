import { Browser } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

async function capture() {
  const browser = await Browser.launch();
  const page = await browser.newPage();

  // Mobile 390px bottom card
  await page.setViewport({ width: 390, height: 844, mobile: true });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.eval(`(() => {
    const el = document.getElementById('services-overview');
    if (el) el.scrollIntoView({ behavior: 'instant' });
    window.scrollBy(0, 2400);
  })()`);
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: '.taste-skill/services-after/home-services-mobile-bottom.jpg' });

  await browser.close();
  console.log('Capture mobile bottom finished');
}

capture().catch(console.error);
