# Safemove — Public Website

> **"Move with Confidence"** — South Africa's trusted vehicle subscription management partner.

**Repository:** [`MobilityOS-SA/safemove-website`](https://github.com/MobilityOS-SA/safemove-website)
**Live demo:** served via the Manus sandbox during development
**Production target:** `https://safemove.co.za` (Azure Static Web Apps, `planet42-rg`)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Business Context](#2-business-context)
3. [Site Architecture](#3-site-architecture)
4. [Pages & Content](#4-pages--content)
5. [Authentication Flows](#5-authentication-flows)
6. [Brand & Design System](#6-brand--design-system)
7. [Tech Stack](#7-tech-stack)
8. [Project Structure](#8-project-structure)
9. [Local Development](#9-local-development)
10. [Configuration](#10-configuration)
11. [Deployment](#11-deployment)
12. [Related Repositories](#12-related-repositories)
13. [Next Steps & Roadmap](#13-next-steps--roadmap)

---

## 1. Project Overview

`safemove-website` is the **public-facing marketing and customer information website** for Safemove. It serves two distinct audiences:

**General visitors** — prospective partners, media, regulators, and the public seeking to understand what Safemove is, how vehicle subscriptions work, and why Safemove is a credible, compliant operator in the South African market.

**Planet42 customers** — the ~16,400 existing Planet42 vehicle subscription customers who have been directed to this site via SMS, email, or in-app communications. These customers need to understand why their subscription has transferred to Safemove and what specific actions they must take (updating debit order mandates, EFT banking details, or credit card information) to ensure their payments continue without interruption.

The site acts as the **public gateway** to the authenticated customer portal (`my.safemove.co.za`), which is built separately in the `fleet-takeon` repository. Customers who have previously registered via a magic link can log in directly; new or unregistered customers can authenticate via OTP or request a magic link.

---

## 2. Business Context

### The Planet42 Transition

Planet42 was a South African vehicle subscription provider that entered business rescue proceedings in 2025. Safemove was appointed as the successor entity to manage the run-off portfolio of approximately 16,400 active vehicle subscriptions.

The transition requires Safemove to:

- Notify all Planet42 customers of the change in service provider
- Collect new debit order mandates from the ~65% of customers who pay by debit order
- Notify the ~25% of EFT customers of Safemove's new banking details
- Verify payment methods for the ~10% of credit card customers

This website is the primary digital touchpoint for that customer communication campaign.

### Payment Method Distribution

| Method | Share | Action Required |
|---|---|---|
| Debit Order | ~65% | Sign new debit order mandate |
| EFT | ~25% | Update banking details to Safemove account |
| Credit Card | ~10% | Verify card details on the customer portal |

### Safemove's Role

Safemove is not a vehicle subscription originator — it is a **fleet management and subscription servicing partner**. Its value proposition is:

- **Regulatory compliance** — NCA and CPA compliant subscription management
- **Continuity** — existing vehicle subscriptions continue uninterrupted under the same terms
- **Transparency** — clear communication, accessible customer portal, South African support team
- **Technology** — modern fleet management platform with real-time payment tracking

---

## 3. Site Architecture

```
safemove.co.za (this repo — public, static)
       │
       ├── Marketing pages (Home, About, How It Works, Contact)
       ├── Planet42 transition page (/planet42)
       ├── Authentication flows (/login)
       │       ├── OTP via SMS or email
       │       └── Magic link via email
       │
       └── → Redirect to my.safemove.co.za (fleet-takeon repo)
                       │
                       └── Authenticated customer portal
                               ├── Subscription overview
                               ├── Payment management
                               ├── Mandate signing
                               └── Support
```

The public website is a **fully static single-page application** (React + Vite). It has no backend of its own. All authenticated operations are handled by the `fleet-takeon` backend via API calls from the customer portal.

The `/login` page on this site is a **pre-authentication entry point** — it collects the customer's contact details and initiates the OTP or magic link flow against the `fleet-takeon` API, then redirects the authenticated session to `my.safemove.co.za`.

---

## 4. Pages & Content

### Home (`/`)

The landing page for all visitors. Key sections:

- **Alert bar** — persistent orange banner at the top of every page directing Planet42 customers to `/planet42`
- **Hero** — full-screen cinematic image (South African cityscape with vehicle) with the headline "Move with Confidence", two primary CTAs ("Access My Account" and "Planet42 Customers"), and a scroll indicator
- **Stats bar** — 16,000+ active subscribers, 99.2% payment success rate, <24h support response, 5-star satisfaction
- **Why Safemove** — four value proposition cards: compliance, continuity, flexible payments, local support
- **How it works** — four-step numbered process overview
- **Trust banner** — full-width image with compliance and consumer protection messaging
- **Planet42 feature card** — prominent orange call-to-action section explaining the transition and directing customers to `/planet42`

### Planet42 Transition (`/planet42`)

The most critical page for the take-on campaign. Designed specifically for existing Planet42 customers arriving via directed communications. Key sections:

- **Hero** — urgent but reassuring headline: "Your Subscription is Safe with Safemove", explanation of the transition, and three direct action CTAs
- **Interactive payment method selector** — three expandable cards (Debit Order / EFT / Credit Card). Clicking a card expands a full step-by-step action guide specific to that payment method:
  - **Debit Order:** Log in → navigate to mandate section → sign new mandate → confirmation
  - **EFT:** Note new banking details → update in internet banking → use contract number as reference
  - **Credit Card:** Log in → verify card details → set up recurring payment
- **Important dates timeline** — visual timeline showing key campaign milestones (communications sent, mandate deadline, EFT update deadline, first debit date)
- **FAQ accordion** — 8 frequently asked questions covering: what changed, whether the vehicle is safe, what happens if they do nothing, how to get help, whether their terms changed, what the debit order mandate is, how long it takes, and who to contact
- **Support CTA** — contact details and link to the customer portal

### About (`/about`)

Establishes Safemove's credibility and legitimacy. Key sections:

- Mission statement and founding purpose
- Key statistics (subscribers managed, years of experience, compliance certifications)
- Four core values: Transparency, Reliability, Consumer-First, Innovation
- Organisational structure overview (Safemove as fleet management partner, not originator)
- Regulatory compliance section (NCA, CPA, POPIA, NCR registration)

### How It Works (`/how-it-works`)

Detailed explanation of the vehicle subscription model and Safemove's role. Key sections:

- Four-phase process: Subscription Transfer → Payment Setup → Portal Access → Ongoing Management
- Payment options comparison table (Debit Order / EFT / Credit Card — features, setup time, recommended use)
- Support and escalation section

### Contact (`/contact`)

- Contact form with fields: name, email, mobile, subject (dropdown with options including "Planet42 Transition Query"), message
- Contact details: email (`support@safemove.co.za`), phone (`0800 SAFEMOVE`), support hours
- Physical address (Johannesburg)
- Response time commitment

### Login (`/login`)

See [Section 5 — Authentication Flows](#5-authentication-flows) for full detail.

### Legal (`/privacy`, `/terms`)

POPIA-aligned Privacy Policy and Terms of Service. Currently placeholder content — requires legal review before production launch.

---

## 5. Authentication Flows

The `/login` page supports two authentication methods. Both are fully implemented on the frontend; the backend API endpoints need to be wired from the `fleet-takeon` portal.

### Flow 1 — OTP (One-Time PIN)

```
Customer lands on /login
        │
        ▼
Step 1: Choose method → "OTP via SMS or Email"
        │
        ▼
Step 2: Enter registered mobile number or email address
        │
        ▼
Step 3: [API call] POST /api/auth/request-otp { contact }
        │           → Backend looks up subscriber by mobile/email
        │           → Sends 6-digit OTP via SMS (Twilio) or email
        │
        ▼
Step 4: Enter 6-digit OTP (auto-focus, auto-advance, backspace navigation)
        │           Resend available after 60-second countdown
        │
        ▼
Step 5: [API call] POST /api/auth/verify-otp { contact, otp }
        │           → Backend verifies OTP, issues JWT session cookie
        │
        ▼
Step 6: Redirect to https://my.safemove.co.za (CUSTOMER_PORTAL_URL)
```

### Flow 2 — Magic Link

```
Customer lands on /login (or /login?action=magic-link from email)
        │
        ▼
Step 1: Choose method → "Magic Link via Email"
        │
        ▼
Step 2: Enter registered email address
        │
        ▼
Step 3: [API call] POST /api/auth/request-magic-link { email }
        │           → Backend looks up subscriber by email
        │           → Sends time-limited magic link (15 min expiry)
        │
        ▼
Step 4: "Check your inbox" confirmation screen
        │
        ▼
Customer clicks link in email
        │
        ▼
Step 5: [API call] GET /api/auth/magic-link?token=xxx
        │           → Backend verifies token, issues JWT session cookie
        │
        ▼
Step 6: Redirect to https://my.safemove.co.za
```

### Backend Integration Points

The following endpoints need to be implemented in the `fleet-takeon` backend (`server/routers/auth.ts`):

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/auth/request-otp` | POST | Look up subscriber, send OTP via SMS/email |
| `/api/auth/verify-otp` | POST | Verify OTP, issue session cookie |
| `/api/auth/request-magic-link` | POST | Look up subscriber, send magic link email |
| `/api/auth/magic-link` | GET | Verify magic link token, issue session cookie |

The frontend calls these endpoints via `fetch` from `src/lib/constants.ts` → `API_BASE_URL`.

---

## 6. Brand & Design System

### Colour Palette

| Name | Hex | Tailwind Token | Usage |
|---|---|---|---|
| Navy | `#1A2B4A` | `navy` | Primary background, headings, body text |
| Teal | `#00B4A6` | `teal` | Primary CTAs, accents, icons, links |
| Teal Sky | `#E6F7F6` | `teal-sky` | Teal tint backgrounds, card fills |
| Teal Dark | `#007A72` | `teal-dark` | Teal hover states |
| Orange | `#E85D26` | `orange` | Planet42 CTAs, urgent actions, alert bar |
| Orange Light | `#FFF3EE` | `orange-light` | Orange tint backgrounds |
| Mist | `#6B7A8D` | `mist` | Secondary text, labels, captions |
| Green | `#2D6A4F` | `green` | Success states, compliance badges |

### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Headings | Sora | 600–800 | All `h1`–`h3`, hero text, section titles |
| Body / UI | Nunito Sans | 400–700 | Body copy, labels, buttons, navigation |

Both fonts are loaded via Google Fonts CDN in `index.html`.

### Component Conventions

| Class | Description |
|---|---|
| `.btn-primary` | Teal filled button with white text and arrow icon |
| `.btn-secondary` | Navy outlined button |
| `.btn-orange` | Orange filled button — Planet42 CTAs only |
| `.card` | White card with soft shadow and rounded-2xl corners |
| `.badge-teal` | Small teal pill badge |
| `.badge-orange` | Small orange pill badge |
| `.input-field` | Standard form input with navy border and teal focus ring |
| `.section-title` | Teal uppercase tracking-wide section label |

All tokens are defined in `tailwind.config.js` and `src/index.css`.

### Imagery

All imagery uses the Safemove brand asset library stored in `/home/ubuntu/webdev-static-assets/` on the build server and referenced via CDN URLs in `src/lib/constants.ts`:

| Asset | Description |
|---|---|
| `safemove-hero-main.jpg` | Wide cinematic hero — South African couple with silver sedan, city skyline |
| `safemove-planet42-hero.jpg` | Planet42 transition page hero — warm, reassuring |
| `safemove-how-it-works.jpg` | Process section background |
| `safemove-trust-banner.jpg` | Full-width trust/compliance banner |
| `safemove-logo-colour.png` | Full-colour logo (teal shield + navy wordmark) |
| `safemove-logo-light.png` | White-reversed logo for dark backgrounds |
| `safemove-icon.png` | Shield icon only |
| `safemove-favicon-shield.png` | Favicon source |

---

## 7. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19 |
| Language | TypeScript | 5.9 |
| Build tool | Vite | 6.4 |
| Styling | Tailwind CSS | 3.4 |
| Routing | React Router DOM | 6 |
| Icons | Lucide React | latest |
| Utilities | clsx | latest |
| Package manager | pnpm | 10 |
| Node | Node.js | 22 |

This is a **fully static SPA** — no server-side rendering, no backend, no database. The production build outputs to `dist/` and is deployable to any static hosting provider.

---

## 8. Project Structure

```
safemove-website/
├── index.html                    ← Entry HTML, Google Fonts, meta tags
├── vite.config.ts                ← Vite config with @ alias and allowedHosts
├── tailwind.config.js            ← Brand colour palette and font tokens
├── postcss.config.js             ← PostCSS with Tailwind and Autoprefixer
├── tsconfig.json                 ← TypeScript config
├── package.json                  ← Dependencies and scripts
├── serve.mjs                     ← Simple Node.js static server (dev/demo only)
│
└── src/
    ├── main.tsx                  ← React root, BrowserRouter provider
    ├── App.tsx                   ← Route definitions, layout wrapper
    ├── index.css                 ← Global styles, brand utility classes
    │
    ├── lib/
    │   └── constants.ts          ← Asset URLs, portal URL, API base, contact details
    │
    ├── components/
    │   ├── Navbar.tsx            ← Responsive nav with Planet42 alert bar, mobile menu
    │   └── Footer.tsx            ← Full footer with navigation, contact, legal links
    │
    └── pages/
        ├── Home.tsx              ← Landing page
        ├── Planet42.tsx          ← Planet42 transition page (critical)
        ├── About.tsx             ← About Safemove
        ├── HowItWorks.tsx        ← Process and payment options
        ├── Contact.tsx           ← Contact form
        ├── Login.tsx             ← OTP + magic link authentication flows
        └── Legal.tsx             ← Privacy Policy and Terms of Service
```

---

## 9. Local Development

### Prerequisites

- Node.js 18+ (22 recommended)
- pnpm 8+ (`npm install -g pnpm`)

### Setup

```bash
# Clone the repository
git clone https://github.com/MobilityOS-SA/safemove-website.git
cd safemove-website

# Install dependencies
pnpm install

# Start the development server (hot reload)
pnpm dev
# → http://localhost:5173
```

### Available Scripts

| Script | Command | Description |
|---|---|---|
| Dev server | `pnpm dev` | Vite HMR dev server on port 5173 |
| Production build | `pnpm build` | TypeScript check + Vite build → `dist/` |
| Preview build | `pnpm preview` | Serve the production build locally |
| Type check | `pnpm tsc --noEmit` | TypeScript type check without emitting |

### Serving the Production Build

For demo or staging purposes, a simple Node.js static server is included:

```bash
pnpm build
node serve.mjs
# → http://localhost:5173
```

This server handles SPA routing (all paths fall back to `index.html`).

---

## 10. Configuration

All configurable values are centralised in `src/lib/constants.ts`. Update this file before deploying to production.

```ts
// src/lib/constants.ts

// URL of the authenticated customer portal (fleet-takeon)
export const CUSTOMER_PORTAL_URL = 'https://my.safemove.co.za'

// Base URL for authentication API calls (fleet-takeon backend)
export const API_BASE_URL = 'https://api.safemove.co.za'

// Contact details displayed across the site
export const CONTACT = {
  email: 'support@safemove.co.za',
  phone: '0800 SAFEMOVE',
  address: 'Johannesburg, South Africa',
  supportHours: 'Monday–Friday 08:00–17:00 | Saturday 09:00–13:00',
}

// Asset URLs (CDN or relative paths)
export const ASSETS = {
  logoColour: '...',
  logoLight: '...',
  heroMain: '...',
  heroPlanet42: '...',
  // ...
}
```

### Environment-Specific Builds

For different environments (staging vs production), create `.env.staging` and `.env.production` files:

```bash
# .env.production
VITE_PORTAL_URL=https://my.safemove.co.za
VITE_API_BASE_URL=https://api.safemove.co.za
```

Then reference via `import.meta.env.VITE_PORTAL_URL` in `constants.ts`.

---

## 11. Deployment

### Target: Azure Static Web Apps (Recommended)

The existing `planet42-rg` Azure resource group already contains the infrastructure. Deploy as follows:

**Option A — GitHub Actions (recommended for CI/CD)**

1. In the Azure Portal, navigate to `planet42-rg` → Create → Static Web App
2. Connect to `MobilityOS-SA/safemove-website` on GitHub
3. Set build configuration:
   - **App location:** `/`
   - **Output location:** `dist`
   - **Build command:** `pnpm build`
4. Azure automatically creates a GitHub Actions workflow at `.github/workflows/azure-static-web-apps-*.yml`
5. Every push to `main` triggers a deployment

**Option B — Manual deployment via Azure CLI**

```bash
# Build the project
pnpm build

# Deploy to Azure Static Web Apps
az staticwebapp upload \
  --name safemove-website \
  --resource-group planet42-rg \
  --source dist/
```

**Option C — Azure CLI with SWA CLI**

```bash
npm install -g @azure/static-web-apps-cli

# Build and deploy
pnpm build
swa deploy dist/ \
  --deployment-token <AZURE_STATIC_WEB_APPS_API_TOKEN> \
  --env production
```

### Custom Domain Setup

Once deployed, configure `safemove.co.za` in the Azure Static Web Apps custom domain settings:

1. Azure Portal → Static Web App → Custom Domains → Add
2. Enter `safemove.co.za`
3. Add the provided CNAME or TXT record to your DNS provider
4. Azure provisions a free TLS certificate automatically

### SPA Routing

Azure Static Web Apps handles SPA routing natively. No `staticwebapp.config.json` is required for basic routing, but add one for custom 404 handling:

```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/*.{css,js,ico,png,jpg,webp,svg}"]
  }
}
```

### Alternative Hosting

| Provider | Notes |
|---|---|
| Netlify | Drag-and-drop `dist/` folder or connect GitHub repo. Add `_redirects` file for SPA routing. |
| Vercel | Connect GitHub repo. Vite is auto-detected. |
| Cloudflare Pages | Connect GitHub repo. Build command: `pnpm build`. Output: `dist`. |

---

## 12. Related Repositories

| Repository | Purpose | URL |
|---|---|---|
| `safemove-website` | **This repo** — public marketing and information website | [GitHub](https://github.com/MobilityOS-SA/safemove-website) |
| `fleet-takeon` | Authenticated customer portal — fleet management, payments, collections, take-on campaign engine | [GitHub](https://github.com/MobilityOS-SA/fleet-takeon) |

### How They Connect

```
safemove.co.za          →  /login  →  my.safemove.co.za
(safemove-website)                    (fleet-takeon)
     │                                      │
     │  POST /api/auth/request-otp          │
     │  POST /api/auth/verify-otp    ───────┘
     │  POST /api/auth/request-magic-link
     │  GET  /api/auth/magic-link
```

The `fleet-takeon` backend needs to expose public (unauthenticated) endpoints for OTP and magic link flows. These should be added as `publicProcedure` entries in `server/routers/auth.ts` or as dedicated Express routes in `server/_core/index.ts`.

---

## 13. Next Steps & Roadmap

### Immediate (before go-live)

- [ ] Wire `/login` OTP flow to `fleet-takeon` `POST /api/auth/request-otp` and `POST /api/auth/verify-otp`
- [ ] Wire `/login` magic link flow to `fleet-takeon` `POST /api/auth/request-magic-link`
- [ ] Update `CUSTOMER_PORTAL_URL` in `constants.ts` to `https://my.safemove.co.za`
- [ ] Add confirmed Safemove banking details to the Planet42 EFT section in `Planet42.tsx`
- [ ] Add specific campaign deadline dates to the Planet42 timeline section
- [ ] Legal review and finalisation of Privacy Policy and Terms of Service
- [ ] Deploy to Azure Static Web Apps under `safemove.co.za`
- [ ] Configure DNS for `safemove.co.za` and `my.safemove.co.za`
- [ ] Add `staticwebapp.config.json` for SPA routing on Azure

### Short-term

- [ ] Implement contact form backend (POST to `fleet-takeon` or a dedicated email service)
- [ ] Add Google Analytics / GA4 tracking
- [ ] Add Google Tag Manager for campaign tracking (Planet42 customer conversion events)
- [ ] SEO: add `sitemap.xml`, `robots.txt`, Open Graph meta tags
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Add WhatsApp contact button (prominent for South African customers)

### Medium-term

- [ ] Add a live chat widget for Planet42 customer support queries
- [ ] Add a "Track my transition" status page where customers can check their mandate/EFT status
- [ ] Localisation: add Zulu and Afrikaans translations for key Planet42 content
- [ ] Add a news/updates section for campaign progress communications

---

## Licence

Proprietary — MobilityOS (Pty) Ltd. All rights reserved.

---

*Built by MobilityOS — May 2026*
