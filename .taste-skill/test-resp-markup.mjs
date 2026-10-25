import { Browser } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const browser = await Browser.launch({ width: 1440, height: 900 });

const markup = `
  <span class="hidden md:block">
    <span class="block">Comprehensive Mental Healthcare</span>
    <span class="block font-serif italic font-normal text-savelix-lavender">for Better Living</span>
  </span>
  <span class="block md:hidden">
    <span class="block">Comprehensive Mental</span>
    <span class="block">Healthcare <span class="font-serif italic font-normal text-savelix-lavender">for Better Living</span></span>
  </span>
`;

const h1Class = 'text-2xl xs:text-[26px] sm:text-3xl md:text-[38px] lg:text-[52px] xl:text-[56px] 3xl:text-[72px] 4k:text-[84px] font-extrabold text-white tracking-tight leading-[1.15] text-center';

async function test(width) {
  const page = await browser.newPage({ width, height: 800, mobile: width < 768 });
  await page.goto('http://localhost:5173/', { timeoutMs: 20000, settleMs: 500 });
  const res = await page.eval(`((html, cls) => {
    const h1 = document.getElementById('hero-heading');
    h1.innerHTML = html;
    h1.className = cls;
    const r = h1.getBoundingClientRect();
    const style = window.getComputedStyle(h1);
    const lh = parseFloat(style.lineHeight) || parseFloat(style.fontSize);
    return {
      width: r.width,
      height: r.height,
      fontSize: style.fontSize,
      lineHeight: style.lineHeight,
      lines: Math.round(r.height / lh),
      text: h1.innerText
    };
  })(${JSON.stringify(markup)}, ${JSON.stringify(h1Class)})`);
  await page.close();
  return res;
}

console.log('390px mobile:', await test(390));
console.log('768px tablet:', await test(768));
console.log('1440px desktop:', await test(1440));

await browser.close();
