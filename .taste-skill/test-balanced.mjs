import { Browser } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const browser = await Browser.launch({ width: 1440, height: 900 });

async function testHeadlineHtml(width, html, h1Class) {
  const page = await browser.newPage({ width, height: 800, mobile: width < 768 });
  await page.goto('http://localhost:5173/', { timeoutMs: 20000, settleMs: 500 });
  const result = await page.eval(`((html, h1Class) => {
    const h1 = document.getElementById('hero-heading');
    if (html) h1.innerHTML = html;
    if (h1Class) h1.className = h1Class;
    const rect = h1.getBoundingClientRect();
    const style = window.getComputedStyle(h1);
    const lh = parseFloat(style.lineHeight) || parseFloat(style.fontSize);
    const lines = Math.round(rect.height / lh);

    return {
      width: rect.width,
      height: rect.height,
      fontSize: style.fontSize,
      lineHeight: style.lineHeight,
      lines,
      innerText: h1.innerText
    };
  })(${JSON.stringify(html)}, ${JSON.stringify(h1Class)})`);
  await page.close();
  return result;
}

// Test A: Mobile 2-line break: "Comprehensive Mental" / "Healthcare for Better Living"
const htmlA = '<span class="block md:inline">Comprehensive Mental </span><span class="block md:inline">Healthcare </span><span class="block font-serif italic font-normal text-savelix-lavender">for Better Living</span>';
// Wait, at md: "Comprehensive Mental Healthcare" on line 1, "for Better Living" on line 2!
const htmlB = '<span class="block md:block"><span class="block sm:inline">Comprehensive Mental </span><span class="block sm:inline">Healthcare</span></span><span class="block font-serif italic font-normal text-savelix-lavender">for Better Living</span>';

const htmlBalanced = '<span class="block md:block"><span class="block md:inline">Comprehensive Mental </span><span class="inline">Healthcare</span></span> <span class="block md:block font-serif italic font-normal text-savelix-lavender">for Better Living</span>';

console.log('--- Test at 390px ---');
console.log('Balanced at 390px (28px):', await testHeadlineHtml(390, 
  '<span class="block">Comprehensive Mental</span><span class="block">Healthcare <span class="font-serif italic font-normal text-savelix-lavender">for Better Living</span></span>',
  'text-2xl sm:text-3xl md:text-[38px] lg:text-[56px] 3xl:text-[72px] 4k:text-[84px] font-extrabold text-white tracking-tight leading-[1.15] text-center'
));

console.log('--- Test at 768px ---');
console.log('At 768px (38px):', await testHeadlineHtml(768, 
  '<span class="block md:block">Comprehensive Mental Healthcare</span><span class="block font-serif italic font-normal text-savelix-lavender">for Better Living</span>',
  'text-2xl sm:text-3xl md:text-[38px] lg:text-[56px] 3xl:text-[72px] 4k:text-[84px] font-extrabold text-white tracking-tight leading-[1.15] text-center'
));

console.log('--- Test at 1440px ---');
console.log('At 1440px (56px):', await testHeadlineHtml(1440, 
  '<span class="block md:block">Comprehensive Mental Healthcare</span><span class="block font-serif italic font-normal text-savelix-lavender">for Better Living</span>',
  'text-2xl sm:text-3xl md:text-[38px] lg:text-[56px] 3xl:text-[72px] 4k:text-[84px] font-extrabold text-white tracking-tight leading-[1.15] text-center'
));

await browser.close();
