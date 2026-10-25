import path from 'node:path';
import { Browser, sleep } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const outputDir = 'd:/Savelix-FDKode/.taste-skill/modal-audit';
const browser = await Browser.launch({ width: 1440, height: 900 });
const page = await browser.newPage({ width: 1440, height: 900 });
await page.goto('http://localhost:5173/', { timeoutMs: 30000, settleMs: 500 });
await sleep(400);

await page.eval(`(() => {
  const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Book an Appointment'));
  if (btn) btn.click();
})()`);
await sleep(300);

await page.eval(`(() => {
  const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  const nameInput = document.getElementById('fullName');
  const contactInput = document.getElementById('contactInfo');
  const serviceSelect = document.getElementById('service');
  const notesInput = document.getElementById('notes');

  nativeSetter.call(nameInput, 'Ananya Raman');
  nameInput.dispatchEvent(new Event('input', { bubbles: true }));

  nativeSetter.call(contactInput, '+91 98401 23456');
  contactInput.dispatchEvent(new Event('input', { bubbles: true }));

  serviceSelect.value = 'Psychological Counselling';
  serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));

  notesInput.value = 'Interested in individual counseling session, weekday evenings preferred.';
  notesInput.dispatchEvent(new Event('input', { bubbles: true }));

  const submitBtn = document.querySelector('div[role="dialog"] button[type="submit"]');
  if (submitBtn) submitBtn.click();
})()`);
await sleep(800);

await page.screenshot({ path: path.join(outputDir, 'modal-desktop-submitted-1440.jpg'), quality: 92, fullPage: false });
console.log('Saved modal-desktop-submitted-1440.jpg');

await browser.close();
