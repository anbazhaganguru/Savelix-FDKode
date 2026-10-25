# SAVELIX Psychiatric Clinic & Rehabilitation Centre

> Premium, calm, and trustworthy web platform for SAVELIX Psychiatric Clinic & Rehabilitation Centre. Built with React 19, Vite, Tailwind CSS, and a custom Apple-inspired GSAP ScrollTrigger animation engine.

---

## 1. Quick Start

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:5173)
npm run dev

# Run Oxlint linter
npm run lint

# Production build verification
npm run build

# Run Apple motion & responsive layout automated verification suite
npm run test:motion

# Run sticky navbar across all routes verification suite
npm run test:navbar
```

---

## 2. Directory Structure & Architecture

```text
Savelix-FDKode/
├── public/
│   ├── assets/
│   │   ├── hero/                  # Responsive homepage hero art (desktop, tablet, mobile)
│   │   ├── heroes/                # Hero imagery for all inner and service detail pages
│   │   ├── images/founder/        # High-res founder portrait
│   │   ├── services/              # Homepage service card imagery
│   │   ├── education-clinic.jpg   # Editorial education section photo
│   │   ├── rehab-clinic.jpg       # Editorial rehabilitation section photo
│   │   ├── savelix-logo.jpg       # Primary reference brand emblem asset
│   │   └── savelix-symbol.png     # Official high-res floral brand mark
│   ├── favicon.svg                # Application browser icon
│   ├── icons.svg                  # SVG symbol sprite
│   └── sw.js                      # Service worker caching script
├── src/
│   ├── components/
│   │   ├── about/                 # Inner About page components (FounderProfile)
│   │   ├── common/                # Shared utilities (BackButton, ErrorBoundary, MotionOrchestrator, ScrollToTop)
│   │   ├── home/                  # Homepage sections (Hero, AboutTeaser, ServicesOverview, ConditionsTeaser,
│   │   │   │                      #   RehabilitationTeaser, EducationTeaser, WhySavelixTeaser, FinalCta)
│   │   │   └── founder/           # Founder portrait, botanical glow, and interactive nameplate
│   │   ├── layout/                # Shell layout (Layout, Navbar, Footer, PageHero)
│   │   └── ui/                    # Shared UI primitives (AppointmentModal, Logo)
│   │       └── decor/             # Art-directed SVG background elements (Botanical, Branching, Flow, Orbits)
│   ├── config/
│   │   ├── navigation.js          # Navigation link hierarchy and service routes
│   │   └── tokens.js              # Brand color constants, typography, spacing, and elevation
│   ├── context/
│   │   ├── SmoothScrollContext.js # Context definition for scroll coordination
│   │   └── SmoothScrollProvider.jsx # Native browser scroll provider (zero-friction compositor thread)
│   ├── hooks/
│   │   └── useSmoothScroll.js     # Hook to access scroll controls (e.g. modal scroll locking)
│   ├── lib/
│   │   └── gsap.js                # Central GSAP registration, Apple motion tokens, reduced-motion helper
│   ├── pages/
│   │   ├── services/              # 7 dedicated service detail pages (PsychiatricCare, PsychologicalCounselling, etc.)
│   │   ├── About.jsx              # About Us inner page
│   │   ├── Conditions.jsx         # Conditions We Support page
│   │   ├── Contact.jsx            # Contact Us & clinic locations page
│   │   ├── EducationInternship.jsx# Education & Internship programmes page
│   │   ├── Home.jsx               # Homepage assembling hero and teaser sections
│   │   ├── NotFound.jsx           # 404 fallback page
│   │   ├── Services.jsx           # Services directory overview page
│   │   └── WhySavelix.jsx         # Why Savelix differentiators page
│   ├── services/
│   │   └── serviceWorkerRegistration.js # PWA service worker lifecycle manager
│   ├── styles/
│   │   └── index.css              # Tailwind base, typography fonts, and custom CSS utilities
│   ├── utils/
│   │   └── navigation.js          # In-app history detection and sensible fallback routing
│   ├── App.jsx                    # Root application router with route definitions
│   └── main.jsx                   # React 19 root bootstrap and ErrorBoundary mount
├── tests/
│   └── verify-performance-and-reveals.mjs # CDP-based automated test suite for GSAP motion & viewports
├── tailwind.config.js             # Tailwind CSS tokens (savelix-plum, savelix-purple, etc.)
└── vite.config.js                 # Vite bundler configuration
```

---

## 3. Developer Cheat Sheet — Where to Make Changes

| When you want to... | Look in this file / directory |
| :--- | :--- |
| **Add or rename a navigation link** | [`src/config/navigation.js`](file:///src/config/navigation.js) |
| **Update brand colors, fonts, or tokens** | [`src/config/tokens.js`](file:///src/config/tokens.js) & [`tailwind.config.js`](file:///tailwind.config.js) |
| **Modify the global Navbar or mobile drawer** | [`src/components/layout/Navbar.jsx`](file:///src/components/layout/Navbar.jsx) |
| **Modify the global Footer** | [`src/components/layout/Footer.jsx`](file:///src/components/layout/Footer.jsx) |
| **Change the Homepage Hero layout or copy** | [`src/components/home/Hero.jsx`](file:///src/components/home/Hero.jsx) |
| **Swap responsive Hero images** | [`public/assets/hero/`](file:///public/assets/hero/) (`hero-desktop.png`, `hero-tablet.png`, `hero-mobile.png`) |
| **Update a Service Detail page** | [`src/pages/services/`](file:///src/pages/services/) |
| **Adjust Apple-style motion curves / timing** | [`src/lib/gsap.js`](file:///src/lib/gsap.js) & [`src/components/common/MotionOrchestrator.jsx`](file:///src/components/common/MotionOrchestrator.jsx) |
| **Update Appointment Booking popup** | [`src/components/ui/AppointmentModal.jsx`](file:///src/components/ui/AppointmentModal.jsx) |
| **Modify decorative background SVGs** | [`src/components/ui/decor/`](file:///src/components/ui/decor/) |
| **Update inner page hero banners** | [`src/components/layout/PageHero.jsx`](file:///src/components/layout/PageHero.jsx) & [`public/assets/heroes/`](file:///public/assets/heroes/) |

---

## 4. GSAP Motion & Scroll Architecture

The animation system is engineered around **Apple-style cubic deceleration (`power3.out`)** and uninhibited 100% native browser scrolling:

1. **Native Compositor Scrolling:** Scrolling is driven directly by the browser's hardware compositor thread with zero virtual-scroll interception (`scroll-behavior: auto;`). Modal open/close manages scroll locking safely via [`SmoothScrollProvider.jsx`](file:///src/context/SmoothScrollProvider.jsx).
2. **Master Section Timelines:** Rather than attaching isolated ScrollTriggers to every paragraph, each content section utilizes a single unified timeline (`start: 'top 85%'`, `once: true`) inside [`MotionOrchestrator.jsx`](file:///src/components/common/MotionOrchestrator.jsx). This cuts active triggers per route by >75%.
3. **Pacing Hierarchy:**
   - Section Headings: `0.85s` (`power3.out`)
   - Paragraphs & Subtitles: `0.75s` (reveals `0.13s` after heading for natural breathing room)
   - Cards & Containers: `0.80s` with natural stagger capped at `0.28s` total (preventing cascading blank spaces on long grids)
   - Images: `0.90s` (subtle `scale: 1.03 -> 1.0` settling)
4. **DOM Restoration:** All completed animations execute `clearProps: 'opacity,transform'` upon settling, returning elements to pure CSS layout and guaranteeing uninterrupted native hover states (e.g. founder nameplate hover lift).
5. **Reduced Motion Accessibility:** System honors `prefers-reduced-motion` through `isReducedMotion()`, instantly granting 100% visibility without animation delays.

---

## 5. Automated Verification Suite

Run the full verification suite anytime motion, layouts, or assets are modified:

```bash
# Verify Apple reveals and scroll frame pacing
npm run test:motion

# Verify sticky navbar across all 14 routes and viewports
npm run test:navbar
```

This automated CDP suite validates:
- Native scroll continuity and frame pacing from Hero into About.
- GSAP Apple timing tokens and deceleration curves.
- Multi-page progressive reveal across 10 key routes (asserting 0 elements stuck at 0 opacity).
- Viewport layout and overflow integrity at mobile (`390px`), tablet (`768px`), and desktop (`1440px`).
