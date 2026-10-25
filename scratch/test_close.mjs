import { Browser, sleep } from 'file:///d:/Savelix-FDKode/.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

const browser = await Browser.launch({ width: 1280, height: 800 });
const page = await browser.newPage({ width: 1280, height: 800 });
await page.goto('http://localhost:5173/', { timeoutMs: 30000, settleMs: 500 });
await sleep(400);

// 1. Open modal
await page.eval(`(() => {
  const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Book an Appointment'));
  if (btn) btn.click();
})()`);
await sleep(300);

let open1 = await page.eval(`!!document.querySelector('div[role="dialog"]')`);
console.log('1. Modal opened:', open1);

// 2. Click close (X)
await page.eval(`(() => {
  const closeBtn = document.querySelector('button[aria-label="Close appointment modal"]');
  if (closeBtn) closeBtn.click();
})()`);
await sleep(300);

let open2 = await page.eval(`!!document.querySelector('div[role="dialog"]')`);
console.log('2. Modal closed via X button:', !open2);

// 3. Open again
await page.eval(`(() => {
  const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Book an Appointment'));
  if (btn) btn.click();
})()`);
await sleep(300);

// 4. Click Cancel button
await page.eval(`(() => {
  const cancelBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim() === 'Cancel');
  if (cancelBtn) cancelBtn.click();
})()`);
await sleep(300);

let open3 = await page.eval(`!!document.querySelector('div[role="dialog"]')`);
console.log('3. Modal closed via Cancel button:', !open3);

// 5. Open again and test Escape key
await page.eval(`(() => {
  const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Book an Appointment'));
  if (btn) btn.click();
})()`);
await sleep(300);

// Press Escape key via DispatchKeyEvent or synthetic event
await page.eval(`(() => {
  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
})()`);
await sleep(300);

let open4 = await page.eval(`!!document.querySelector('div[role="dialog"]')`);
console.log('4. Modal closed via Escape key:', !open4);

// 6. Test submission and Done button
await page.eval(`(() => {
  const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Book an Appointment'));
  if (btn) btn.click();
})()`);
await sleep(300);

await page.eval(`(() => {
  const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  const nameInput = document.getElementById('fullName');
  const contactInput = document.getElementById('contactInfo');
  
  nativeSetter.call(nameInput, 'Ravi Kumar');
  nameInput.dispatchEvent(new Event('input', { bubbles: true }));

  nativeSetter.call(contactInput, '9840012345');
  contactInput.dispatchEvent(new Event('input', { bubbles: true }));

  const submitBtn = document.querySelector('div[role="dialog"] button[type="submit"]');
  if (submitBtn) submitBtn.click();
})()`);
await sleep(800);

let hasDoneBtn = await page.eval(`!!Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim() === 'Done')`);
console.log('5. Submitted request, Done button exists:', hasDoneBtn);

await page.eval(`(() => {
  const doneBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim() === 'Done');
  if (doneBtn) doneBtn.click();
})()`);
await sleep(300);

let open5 = await page.eval(`!!document.querySelector('div[role="dialog"]')`);
console.log('6. Modal closed via Done button:', !open5);

await browser.close();
