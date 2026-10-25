import fs from 'fs';
import path from 'path';

const dirs = [
  '.taste-skill/temp_inspect',
  'public/assets/heroes',
  'public/assets/services'
];

let html = `<!DOCTYPE html><html><head><style>
body { font-family: system-ui, sans-serif; background: #18181b; color: #f4f4f5; padding: 24px; margin: 0; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 20px; }
.card { background: #27272a; border-radius: 12px; overflow: hidden; padding: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3); }
.img-wrap { width: 100%; height: 240px; background: #09090b; border-radius: 8px; overflow: hidden; position: relative; }
img { width: 100%; height: 100%; object-fit: contain; }
h4 { margin: 10px 0 4px; font-size: 14px; word-break: break-all; color: #e4e4e7; }
p { margin: 0; font-size: 12px; color: #a1a1aa; }
</style></head><body>
<h1 style="font-size:24px;margin-bottom:20px;">SAVELIX Hero Image Candidates Contact Sheet</h1>
<div class="grid">
`;

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (!fs.statSync(full).isFile()) continue;
    const data = fs.readFileSync(full);
    const ext = path.extname(file).slice(1).toLowerCase();
    const mime = ext === 'png' ? 'image/png' : 'image/jpeg';
    const b64 = `data:${mime};base64,${data.toString('base64')}`;
    html += `
    <div class="card">
      <div class="img-wrap">
        <img src="${b64}" alt="${file}" />
      </div>
      <h4>${dir}/${file}</h4>
      <p>${(data.length / 1024).toFixed(0)} KB</p>
    </div>`;
  }
}

html += `</div></body></html>`;
fs.writeFileSync('.taste-skill/contact-sheet.html', html);
console.log('Successfully wrote .taste-skill/contact-sheet.html');
