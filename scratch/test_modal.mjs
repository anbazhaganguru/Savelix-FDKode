import fs from 'node:fs';
import path from 'node:path';
import { Browser, sleep } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const outputDir = 'd:/Savelix-FDKode/.taste-skill/modal-audit';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const browser = await Browser.launch({ width: 1440, height: 900 });

// 1. Desktop 1440px - Open Modal
{
  const page = await browser.newPage({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { timeoutMs: 30000, settleMs: 500 });
  await sleep(400);

  // Click navbar "Book an Appointment" button
  await page.eval(`(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Book an Appointment'));
    if (btn) btn.click();
  })()`);
  await sleep(400);

  // Capture desktop modal open
  await page.screenshot({ path: path.join(outputDir, 'modal-desktop-open-1440.jpg'), quality: 92, fullPage: false });
  console.log('Saved modal-desktop-open-1440.jpg');

  // 2. Test Validation: Click Submit Request while empty
  await page.eval(`(() => {
    const submitBtn = document.querySelector('div[role="dialog"] button[type="submit"]');
    if (submitBtn) submitBtn.click();
  })()`);
  await sleep(300);

  await page.screenshot({ path: path.join(outputDir, 'modal-desktop-validation-1440.jpg'), quality: 92, fullPage: false });
  console.log('Saved modal-desktop-validation-1440.jpg');

  // 3. Fill Form and Submit
  await page.eval(`(() => {
    const nameInput = document.getElementById('fullName');
    const contactInput = document.getElementById('contactInfo');
    const serviceSelect = document.getElementById('service');
    const notesInput = document.getElementById('notes');

    if (nameInput) {
      nameInput.value = 'Ananya Raman';
      nameInput.dispatchEvent(new Event('input', { bubbles: true }));
      nameInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
    if (contactInput) {
      contactInput.value = '+91 98401 23456';
      contactInput.dispatchEvent(new Event('input', { bubbles: true }));
      contactInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
    if (serviceSelect) {
      serviceSelect.value = 'Psychological Counselling';
      serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
    if (notesInput) {
      notesInput.value = 'Interested in individual counseling session, weekday evenings preferred.';
      notesInput.dispatchEvent(new Event('input', { bubbles: true }));
    }

    const submitBtn = document.querySelector('div[role="dialog"] button[type="submit"]');
    if (submitBtn) submitBtn.click();
  })()`);
  await sleep(700);

  await page.screenshot({ path: path.join(outputDir, 'modal-desktop-submitted-1440.jpg'), quality: 92, fullPage: false });
  console.log('Saved modal-desktop-submitted-1440.jpg');

  // 4. Test Closing via Done
  await page.eval(`(() => {
    const doneBtn = Array.from(document.querySelectorAll('div[role="dialog"] button')).find(b => b.innerText.trim() === 'Done');
    if (doneBtn) doneBtn.click();
  })()`);
  await sleep(300);

  const modalOpenAfterDone = await page.eval(`!!document.querySelector('div[role="dialog"]')`);
  console.log('Modal closed successfully after Done:', !modalOpenAfterDone);

  await page.close();
}

// 5. Tablet 768px
{
  const page = await browser.newPage({ width: 768, height: 1024 });
  await page.goto('http://localhost:5173/about', { timeoutMs: 30000, settleMs: 500 });
  await sleep(400);

  await page.eval(`(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Book an Appointment'));
    if (btn) btn.click();
  })()`);
  await sleep(400);

  await page.screenshot({ path: path.join(outputDir, 'modal-tablet-768.jpg'), quality: 92, fullPage: false });
  console.log('Saved modal-tablet-768.jpg');
  await page.close();
}

// 6. Mobile 390px, 360px, 320px
for (const w of [390, 360, 320]) {
  const page = await browser.newPage({ width: w, height: 800, mobile: true });
  await page.goto('http://localhost:5173/', { timeoutMs: 30000, settleMs: 500 });
  await sleep(400);

  // In mobile, click navbar menu or open modal
  await page.eval(`(() => {
    // try direct button if visible, else open mobile menu
    let btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Book an Appointment'));
    if (btn && btn.offsetParent !== null) {
      btn.click();
    } else {
      const menuBtn = document.querySelector('button[aria-label*="menu" i], button[aria-expanded]');
      if (menuBtn) menuBtn.click();
      setTimeout(() => {
        btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Book an Appointment'));
        if (btn) btn.click();
      }, 100);
    }
  })()`);
  await sleep(500);

  // If modal still not open, trigger from Hero CTA
  const isModalOpen = await page.eval(`!!document.querySelector('div[role="dialog"]')`);
  if (!isModalOpen) {
    await page.eval(`(() => {
      const heroBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Book an Appointment'));
      if (heroBtn) heroBtn.click();
    })()`);
    await sleep(300);
  }

  // Check overflow
  const overflow = await page.eval(`(() => {
    const modal = document.querySelector('div[role="dialog"] > div');
    const docW = document.documentElement.scrollWidth;
    const winW = window.innerWidth;
    return {
      docW,
      winW,
      hasOverflow: docW > winW,
      modalW: modal ? modal.getBoundingClientRect().width : 0,
      modalH: modal ? modal.getBoundingClientRect().height : 0,
    };
  })()`);
  console.log(`Mobile ${w}px modal check:`, overflow);

  await page.screenshot({ path: path.join(outputDir, `modal-mobile-${w}.jpg`), quality: 90, fullPage: false });
  console.log(`Saved modal-mobile-${w}.jpg`);
  await page.close();
}

await browser.close();
console.log('All modal audit tests completed successfully.');
