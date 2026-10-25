import fs from 'node:fs';
import { Browser } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const sourceSymbolPath = 'C:/Users/akash/.gemini/antigravity-ide/brain/1b5ee948-13ba-4b76-8cbf-1a8f622d209e/.user_uploaded/media_1792937328637.jpg';
const destJpg = 'd:/Savelix-FDKode/public/assets/savelix-symbol.jpg';
const destPng = 'd:/Savelix-FDKode/public/assets/savelix-symbol.png';

// 1. Copy exact original symbol asset
fs.copyFileSync(sourceSymbolPath, destJpg);
console.log('Copied original symbol asset to:', destJpg);

// 2. Also generate a high-quality transparent PNG using CDP canvas
const browser = await Browser.launch({ width: 800, height: 800 });
const page = await browser.newPage({ width: 800, height: 800 });

const b64 = fs.readFileSync(sourceSymbolPath).toString('base64');
const pngDataUrl = await page.eval(`(() => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const cvs = document.createElement('canvas');
      cvs.width = img.width;
      cvs.height = img.height;
      const ctx = cvs.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, cvs.width, cvs.height);
      const data = imgData.data;

      // Alpha mask for white background
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];

        // Background is pure white / near-white (#FAFAFA - #FFFFFF)
        const minVal = Math.min(r, g, b);
        if (minVal > 240) {
          // Soft falloff between 240 and 255
          const alphaFactor = (255 - minVal) / 15;
          data[i+3] = Math.max(0, Math.min(255, Math.round(data[i+3] * alphaFactor)));
        }
      }

      ctx.putImageData(imgData, 0, 0);
      resolve(cvs.toDataURL('image/png'));
    };
    img.src = 'data:image/jpeg;base64,${b64}';
  });
})()`);

if (pngDataUrl.startsWith('data:image/png;base64,')) {
  const buf = Buffer.from(pngDataUrl.split(',')[1], 'base64');
  fs.writeFileSync(destPng, buf);
  console.log('Saved transparent symbol PNG to:', destPng, 'size:', buf.length);
}

await browser.close();
