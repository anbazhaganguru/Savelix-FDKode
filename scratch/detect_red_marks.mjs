import { Browser } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';
import fs from 'node:fs';

async function main() {
  const browser = await Browser.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Read image as base64
  const imgB64 = fs.readFileSync('C:/Users/akash/.gemini/antigravity-ide/brain/1b5ee948-13ba-4b76-8cbf-1a8f622d209e/.tempmediaStorage/media_1792942979169.png').toString('base64');

  await page.goto('http://localhost:5173/');

  const redMarks = await page.eval(`(async () => {
    const img = new Image();
    img.src = 'data:image/png;base64,${imgB64}';
    await new Promise(r => img.onload = r);

    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const idata = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = idata.data;
    const w = canvas.width;
    const h = canvas.height;

    // Detect red stroke: high R (> 200), low G (< 140), low B (< 160)
    const points = [];
    for (let y = 0; y < h; y += 4) {
      for (let x = 0; x < w; x += 4) {
        const idx = (y * w + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        if (r > 190 && g < 140 && b < 160) {
          points.push({ x, y });
        }
      }
    }

    // Cluster points
    const clusters = [];
    for (const p of points) {
      let matched = false;
      for (const c of clusters) {
        if (Math.abs(c.y - p.y) < 120 && Math.abs(c.x - p.x) < 150) {
          c.pts.push(p);
          c.x = c.pts.reduce((s, pt) => s + pt.x, 0) / c.pts.length;
          c.y = c.pts.reduce((s, pt) => s + pt.y, 0) / c.pts.length;
          matched = true;
          break;
        }
      }
      if (!matched) {
        clusters.push({ pts: [p], x: p.x, y: p.y });
      }
    }

    return clusters
      .filter(c => c.pts.length > 30)
      .sort((a, b) => a.y - b.y)
      .map((c, i) => ({
        id: i + 1,
        y: Math.round(c.y),
        x: Math.round(c.x),
        relY: +(c.y / h).toFixed(3),
        relX: +(c.x / w).toFixed(3),
        side: c.x > w / 2 ? 'RIGHT' : 'LEFT',
        count: c.pts.length,
        imgW: w,
        imgH: h
      }));
  })()`);

  console.log('Detected Red Mark Locations:', JSON.stringify(redMarks, null, 2));
  await browser.close();
}

main();
