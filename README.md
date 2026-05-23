# Safemove — Public Website

**Repository:** `MobilityOS-SA/safemove-website`
**Stack:** React 19 + TypeScript + Vite + Tailwind CSS 3
**Purpose:** Public-facing marketing and customer information website for Safemove, South Africa's vehicle subscription management partner.

---

## Overview

This website serves two primary audiences:

1. **General visitors** — prospective partners, media, and the public seeking information about Safemove's services and credentials.
2. **Planet42 customers** — existing Planet42 vehicle subscription customers who have been directed to this site to understand the transition to Safemove and take the required payment actions.

The site provides a link to the authenticated customer portal (`my.safemove.co.za`), which is built separately in the `MobilityOS-SA/fleet-takeon` repository.

---

## Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero, value propositions, stats, how it works, Planet42 CTA |
| `/planet42` | Planet42 Transition | Payment method guide (DO/EFT/CC), FAQ, timeline, login CTAs |
| `/about` | About | Mission, values, structure, compliance |
| `/how-it-works` | How It Works | 4-phase process, payment options, support |
| `/contact` | Contact | Contact form, phone, email, support hours |
| `/login` | Login | OTP (SMS/email) and magic link authentication flows |
| `/privacy` | Privacy Policy | POPIA-aligned privacy policy |
| `/terms` | Terms of Service | Terms of service |

---

## Brand

Safemove uses a consistent brand identity across all digital touchpoints:

| Token | Value | Usage |
|---|---|---|
| Navy | `#1A2B4A` | Primary background, headings, body text |
| Teal | `#00B4A6` | Primary CTA, accents, icons |
| Orange | `#E85D26` | Urgent actions, Planet42 CTAs |
| Green | `#2D6A4F` | Success states, compliance badges |
| Heading font | Sora | All `h1`–`h3` elements |
| Body font | Nunito Sans | All body text and UI elements |

---

## Planet42 Transition Page

The `/planet42` page is the most critical page for the take-on campaign. It:

- Explains why the subscription transferred (Planet42 restructuring)
- Provides payment-method-specific action guides:
  - **Debit order (65% of customers):** Step-by-step mandate signing instructions
  - **EFT (25% of customers):** Banking details update instructions
  - **Credit card (10% of customers):** Card verification instructions
- Displays an important dates timeline
- Answers 8 frequently asked questions
- Provides direct links to the customer portal login

---

## Authentication Flow

The `/login` page supports two authentication methods for customers accessing the portal:

### OTP (One-Time PIN)
1. Customer enters their registered mobile number or email address
2. A 6-digit OTP is sent via SMS or email
3. Customer enters the OTP on the verification screen
4. On success, customer is redirected to `my.safemove.co.za`

### Magic Link
1. Customer enters their registered email address
2. A secure, time-limited login link is sent to their email
3. Customer clicks the link to be authenticated and redirected to the portal

> **Note:** The backend OTP/magic link API is to be implemented in the customer portal backend (`fleet-takeon` repo). The frontend flows are fully built and ready to integrate.

---

## Project Structure

```
src/
  components/
    Navbar.tsx          ← Responsive nav with Planet42 alert bar
    Footer.tsx          ← Full footer with navigation and contact
  pages/
    Home.tsx            ← Landing page
    Planet42.tsx        ← Planet42 transition page (critical)
    About.tsx           ← About Safemove
    HowItWorks.tsx      ← Process and payment options
    Contact.tsx         ← Contact form
    Login.tsx           ← OTP + magic link auth flows
    Legal.tsx           ← Privacy policy and terms
  lib/
    constants.ts        ← Asset URLs, portal URL, contact details
  App.tsx               ← Router and layout
  index.css             ← Brand tokens and global styles
tailwind.config.js      ← Brand colour palette and font tokens
```

---

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview
```

---

## Environment Configuration

Update `src/lib/constants.ts` to configure:

```ts
// Customer portal URL (authenticated site)
export const CUSTOMER_PORTAL_URL = 'https://my.safemove.co.za'

// Contact details
export const CONTACT = {
  email: 'support@safemove.co.za',
  phone: '0800 SAFEMOVE',
  address: 'Johannesburg, South Africa',
}
```

---

## Deployment

This is a static Vite build. It can be deployed to:

- **Azure Static Web Apps** (recommended — existing Azure infrastructure in `planet42-rg`)
- **Netlify / Vercel** (alternative)
- **Manus Webdev** (for preview and staging)

Build output is in `dist/` after running `pnpm build`.

---

## Related Repositories

| Repo | Purpose |
|---|---|
| `MobilityOS-SA/fleet-takeon` | Authenticated customer portal (fleet management, payments, collections) |
| `MobilityOS-SA/safemove-website` | This repo — public marketing and information website |

---

## Next Steps

- [ ] Connect `/login` OTP and magic link flows to the `fleet-takeon` backend API
- [ ] Add real banking details to the Planet42 EFT section once confirmed
- [ ] Add specific dates to the Planet42 timeline section
- [ ] Deploy to Azure Static Web Apps under `safemove.co.za`
- [ ] Set up DNS for `safemove.co.za` and `my.safemove.co.za`
- [ ] Add Google Analytics / tracking
- [ ] Implement the contact form backend endpoint

---

*Built by MobilityOS — May 2026*
