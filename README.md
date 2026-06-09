# MAT Digital LLC — Website

The marketing website for **MAT Digital**, a boutique performance-marketing
agency based in West Palm Beach, Florida. Built with the Next.js App Router,
TypeScript, and Tailwind CSS.

> **Marketing That Scales. Strategy That Lasts.**

## Tech stack

- **Framework:** [Next.js 14](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with a custom teal / cream / gold design system
- **Icons:** [lucide-react](https://lucide.dev) (thin-line)
- **Fonts:** Plus Jakarta Sans (display) + Inter (body) via `next/font`

## Pages

| Route       | Description                                                        |
| ----------- | ----------------------------------------------------------------- |
| `/`         | Home — hero, stats, services, differentiators, process, CTA       |
| `/services` | Detailed breakdown of all six services + engagement model         |
| `/about`    | Founder story, mission, the two founders, and core values         |
| `/contact`  | Contact details + inquiry form (name / email / phone / message)   |

Plus `sitemap.xml`, `robots.txt`, JSON-LD structured data, per-page Open Graph
metadata, and a custom 404 page.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available scripts

```bash
npm run dev     # Start the dev server
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # Run ESLint
```

## Contact form

The contact form posts to `src/app/api/contact/route.ts`, which validates the
submission and **logs the inquiry to the server console**. It is intentionally
not wired to any third-party CRM.

To deliver leads somewhere real, replace the section marked
`// TODO: webhook` in that route with a call to your email service, CRM, or
webhook of choice.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── contact/page.tsx
│   ├── api/contact/route.ts
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── not-found.tsx
│   └── globals.css
├── components/             # Header, Footer, ServiceCard, ContactForm, etc.
└── lib/
    └── site.ts             # Single source of truth for business content
```

All business copy, services, stats, and contact info live in
[`src/lib/site.ts`](src/lib/site.ts) — edit there to update the site.

## Assets

The MAT Digital logo lives in `public/assets/`. It was carried over from the
original site.

## Deployment

Optimized for [Vercel](https://vercel.com). Before going live, update the
canonical `url` in `src/lib/site.ts` if the production domain differs from
`https://mat-digital.com`.

---

© 2026 MAT Digital LLC. All rights reserved.
