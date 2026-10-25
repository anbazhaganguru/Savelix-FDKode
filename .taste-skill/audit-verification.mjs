import { Browser, sleep } from '../.agents/skills/design-taste-frontend/scripts/lib/cdp.mjs';

async function runAudit() {
  console.log('--- STARTING SAVELIX FUNCTIONAL & ROUTING AUDIT ---');
  const browser = await Browser.launch({ width: 1440, height: 900 });
  const results = {
    navbar: false,
    logoNavbar: false,
    servicesDropdown: false,
    appointmentModal: false,
    mobileDrawer: false,
    footer: false,
    logoFooter: false,
    routes: {},
    consoleErrors: []
  };

  try {
    const page = await browser.newPage({ width: 1440, height: 900 });
    


    await page.goto('http://localhost:5173/', { timeoutMs: 30000, settleMs: 1000 });
    await sleep(1000);

    // 1. Verify Logo rendering in Navbar
    const navLogoStatus = await page.eval(`(() => {
      const img = document.querySelector('header img[alt*="SAVELIX"]');
      if (!img) return { found: false, error: 'Nav logo img not found' };
      return { found: true, complete: img.complete, naturalWidth: img.naturalWidth, src: img.src };
    })()`);
    console.log('Navbar logo:', navLogoStatus);
    results.logoNavbar = navLogoStatus.found && navLogoStatus.naturalWidth > 0;

    // 2. Verify Desktop Navbar links
    const navLinks = await page.eval(`(() => {
      const links = Array.from(document.querySelectorAll('header nav a')).map(a => ({
        text: a.innerText.trim(),
        href: a.getAttribute('href')
      }));
      return links;
    })()`);
    console.log('Desktop Nav links found:', navLinks);
    results.navbar = navLinks.length >= 5;

    // 3. Verify Services dropdown interaction
    await page.eval(`(() => {
      const btn = Array.from(document.querySelectorAll('header button')).find(b => b.innerText.includes('Services'));
      if (btn) btn.click();
    })()`);
    await sleep(400);

    const dropdownStatus = await page.eval(`(() => {
      const menu = document.querySelector('[role="menu"]');
      if (!menu) return { open: false };
      const items = Array.from(menu.querySelectorAll('a')).map(a => ({ text: a.innerText.trim(), href: a.getAttribute('href') }));
      return { open: true, itemsCount: items.length, sample: items[0] };
    })()`);
    console.log('Services dropdown status:', dropdownStatus);
    results.servicesDropdown = dropdownStatus.open && dropdownStatus.itemsCount >= 5;

    // 4. Verify Appointment Modal interaction
    await page.eval(`(() => {
      const bookBtn = Array.from(document.querySelectorAll('header button')).find(b => b.innerText.includes('Book an Appointment'));
      if (bookBtn) bookBtn.click();
    })()`);
    await sleep(500);

    const modalStatus = await page.eval(`(() => {
      const dialog = document.querySelector('[role="dialog"]');
      if (!dialog) return { open: false };
      const title = dialog.querySelector('h2, h3, [id*="modal-title"]')?.innerText || '';
      const nameInput = !!dialog.querySelector('input[name="fullName"], input[id*="name"], input[placeholder*="Name"], input[type="text"]');
      const phoneInput = !!dialog.querySelector('input[name="phone"], input[type="tel"]');
      const closeBtn = !!dialog.querySelector('button[aria-label*="close" i], button[aria-label*="Close" i]');
      return { open: true, title, nameInput, phoneInput, closeBtn };
    })()`);
    console.log('Appointment modal open status:', modalStatus);

    // Close modal
    await page.eval(`(() => {
      const closeBtn = document.querySelector('[role="dialog"] button[aria-label*="close" i], [role="dialog"] button[aria-label*="Close" i]');
      if (closeBtn) closeBtn.click();
    })()`);
    await sleep(400);

    const modalClosed = await page.eval(`!document.querySelector('[role="dialog"]')`);
    console.log('Appointment modal closed cleanly:', modalClosed);
    results.appointmentModal = modalStatus.open && modalClosed;

    // 5. Verify Footer content, links, and logo
    const footerStatus = await page.eval(`(() => {
      const footer = document.querySelector('footer');
      if (!footer) return { found: false };
      const img = footer.querySelector('img[alt*="SAVELIX"]');
      const links = Array.from(footer.querySelectorAll('a')).map(a => a.getAttribute('href'));
      const text = footer.innerText;
      return {
        found: true,
        logoLoaded: img ? (img.complete && img.naturalWidth > 0) : false,
        linksCount: links.length,
        hasCopyright: text.includes('SAVELIX Psychiatric Clinic & Rehabilitation Centre'),
        hasEthicalNotice: text.includes('Care Principle:')
      };
    })()`);
    console.log('Footer status:', footerStatus);
    results.footer = footerStatus.found && footerStatus.linksCount >= 10 && footerStatus.hasCopyright;
    results.logoFooter = footerStatus.logoLoaded;

    // 6. Verify Mobile Drawer at 390px
    await page.close();
    const mobilePage = await browser.newPage({ width: 390, height: 844, mobile: true });
    await mobilePage.goto('http://localhost:5173/', { timeoutMs: 30000, settleMs: 1000 });
    await sleep(800);

    // Click mobile hamburger
    await mobilePage.eval(`(() => {
      const toggle = document.querySelector('button[aria-label*="menu" i], button[aria-label*="navigation" i]');
      if (toggle) toggle.click();
    })()`);
    await sleep(500);

    const drawerStatus = await mobilePage.eval(`(() => {
      const drawer = document.querySelector('[data-ui], nav[aria-label="Mobile navigation"]')?.closest('.fixed') || document.querySelector('.fixed.inset-y-0.right-0');
      if (!drawer) return { open: false };
      const links = Array.from(drawer.querySelectorAll('a')).map(a => a.innerText.trim());
      const hasCta = Array.from(drawer.querySelectorAll('button')).some(b => b.innerText.includes('Book an Appointment'));
      return { open: true, linksCount: links.length, hasCta, sampleLinks: links.slice(0, 4) };
    })()`);
    console.log('Mobile drawer status:', drawerStatus);
    results.mobileDrawer = drawerStatus.open && drawerStatus.linksCount >= 5 && drawerStatus.hasCta;

    await mobilePage.close();

    // 7. Test Routing across all 6 inner pages + 1 service subpage
    const innerRoutes = [
      { path: '/about', expectedHeading: 'About' },
      { path: '/services', expectedHeading: 'Services' },
      { path: '/conditions', expectedHeading: 'Conditions' },
      { path: '/education-internship', expectedHeading: 'Education' },
      { path: '/why-savelix', expectedHeading: 'Why Savelix' },
      { path: '/contact', expectedHeading: 'Contact' },
      { path: '/services/psychiatric-care', expectedHeading: 'Psychiatric' }
    ];

    const routePage = await browser.newPage({ width: 1440, height: 900 });
    for (const r of innerRoutes) {
      const fullUrl = `http://localhost:5173${r.path}`;
      await routePage.goto(fullUrl, { timeoutMs: 20000, settleMs: 800 });
      await sleep(500);
      const pageCheck = await routePage.eval(`(() => {
        const h1 = document.querySelector('h1, h2')?.innerText || '';
        const bodyText = document.body.innerText;
        return {
          h1,
          hasMain: !!document.querySelector('main'),
          hasNavbar: !!document.querySelector('header'),
          hasFooter: !!document.querySelector('footer'),
          bodyLen: bodyText.length
        };
      })()`);
      console.log(`Route [${r.path}]:`, pageCheck.h1.slice(0, 50), `(body length: ${pageCheck.bodyLen})`);
      results.routes[r.path] = {
        ok: pageCheck.hasMain && pageCheck.hasNavbar && pageCheck.hasFooter && pageCheck.bodyLen > 500,
        heading: pageCheck.h1
      };
    }
    await routePage.close();

  } catch (err) {
    console.error('Audit run error:', err);
  } finally {
    await browser.close();
  }

  console.log('\n--- AUDIT VERIFICATION SUMMARY ---');
  console.log(JSON.stringify(results, null, 2));
}

runAudit();
