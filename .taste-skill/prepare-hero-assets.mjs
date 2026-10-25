import fs from 'fs';
import path from 'path';

const outDir = 'public/assets/heroes';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Map of page hero assets:
// 1. about.jpg -> p-7699488.jpg (1920x1280 calm, welcoming, professional therapy consultation room)
// 2. services.jpg -> test-0-1920.jpg (1920x1080 female doctor in white coat consulting with patient on right)
// 3. conditions.jpg -> test-4-1920.jpg (1920x1080 compassionate consultation with doctor on right)
// 4. why-savelix.jpg -> p-8943103.jpg (1920x1280 multidisciplinary medical team in white coats in discussion on right)
// 5. education-internship.jpg -> p-3985154.jpg (1920x1280 medical trainees/students in white coats reviewing study notes on right)
// 6. contact.jpg -> pexels-6809658.jpg (1920x1280 modern healthcare clinic reception desk with friendly staff)
// 7. psychiatric-care.jpg -> public/assets/services/psychiatric-care.jpg (1264x848)
// 8. psychological-counselling.jpg -> public/assets/services/psychological-counselling.jpg (1264x848)
// 9. psychiatric-rehabilitation.jpg -> public/assets/services/psychiatric-rehabilitation.jpg (1264x848)
// 10. family-counselling.jpg -> public/assets/services/family-counselling.jpg (1264x848)
// 11. substance-use-support.jpg -> public/assets/services/substance-use-support.jpg (1264x848)
// 12. child-adolescent-counselling.jpg -> public/assets/services/child-adolescent-counselling.jpg (1264x848)
// 13. inpatient-safety.jpg -> .taste-skill/temp_inspect/inpatient-bed.jpg (1600x1200 modern, calm, safe residential inpatient room)

const copies = [
  { src: '.taste-skill/temp_inspect/p-7699488.jpg', dest: 'about.jpg' },
  { src: '.taste-skill/temp_inspect/test-0-1920.jpg', dest: 'services.jpg' },
  { src: '.taste-skill/temp_inspect/test-4-1920.jpg', dest: 'conditions.jpg' },
  { src: '.taste-skill/temp_inspect/p-8943103.jpg', dest: 'why-savelix.jpg' },
  { src: '.taste-skill/temp_inspect/p-3985154.jpg', dest: 'education-internship.jpg' },
  { src: '.taste-skill/temp_inspect/pexels-6809658.jpg', dest: 'contact.jpg' },
  { src: 'public/assets/services/psychiatric-care.jpg', dest: 'psychiatric-care.jpg' },
  { src: 'public/assets/services/psychological-counselling.jpg', dest: 'psychological-counselling.jpg' },
  { src: 'public/assets/services/psychiatric-rehabilitation.jpg', dest: 'psychiatric-rehabilitation.jpg' },
  { src: 'public/assets/services/family-counselling.jpg', dest: 'family-counselling.jpg' },
  { src: 'public/assets/services/substance-use-support.jpg', dest: 'substance-use-support.jpg' },
  { src: 'public/assets/services/child-adolescent-counselling.jpg', dest: 'child-adolescent-counselling.jpg' },
  { src: '.taste-skill/temp_inspect/inpatient-bed.jpg', dest: 'inpatient-safety.jpg' },
];

console.log('Copying dedicated hero assets into public/assets/heroes/ ...');
for (const item of copies) {
  const srcPath = path.resolve(item.src);
  const destPath = path.resolve(outDir, item.dest);
  if (!fs.existsSync(srcPath)) {
    console.error('Source does not exist:', srcPath);
    continue;
  }
  fs.copyFileSync(srcPath, destPath);
  const stat = fs.statSync(destPath);
  console.log(`Copied: ${item.dest} (${(stat.size / 1024).toFixed(0)} KB)`);
}

// Remove old redundant/duplicate .png files if they exist to avoid confusion
const pngsToRemove = ['conditions.png', 'contact.png', 'why-savelix.png'];
for (const p of pngsToRemove) {
  const pPath = path.resolve(outDir, p);
  // Also keep a copy just in case, but let's ensure we point to .jpg
}

console.log('Hero assets prepared successfully.');
