# Surraya — Deployment Guide

## Prerequisites

- Node.js 20+ installed
- Git repository on GitHub (or GitLab / Bitbucket)
- [Vercel account](https://vercel.com) (free tier works)

---

## Step 1 — Final Local Checks

```bash
# From the project root:

# 1. TypeScript — must pass with zero errors
npm run build

# 2. Check bundle sizes (look for routes > 200kB First Load JS)
# The build output table shows this automatically

# 3. Verify all 5 routes render correctly
npm run dev
# Open: / /academics /admissions /donate /contact
```

---

## Step 2 — Environment Variables

Copy `.env.local.example` to `.env.local` and fill in real values:

```bash
cp .env.local.example .env.local
```

Key variables to set before deploy:

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your production domain |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | [Cloudinary Console](https://cloudinary.com/console) |
| `CLOUDINARY_API_KEY` | Cloudinary Console |
| `CLOUDINARY_API_SECRET` | Cloudinary Console |
| `RESEND_API_KEY` | [Resend Dashboard](https://resend.com) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | [Stripe Dashboard](https://dashboard.stripe.com) |
| `STRIPE_SECRET_KEY` | Stripe Dashboard |

> ⚠️ Never commit `.env.local` — it is in `.gitignore` by default.

---

## Step 3 — Push to GitHub

```bash
# If you haven't initialised Git yet:
git init
git remote add origin https://github.com/YOUR_USERNAME/surraya.git

# Commit everything
git add .
git commit -m "feat(day5): polish, SEO, animations, sitemap — production ready"
git push origin main
```

---

## Step 4 — Deploy on Vercel

### Option A — Vercel Dashboard (recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your `surraya` repo
4. Framework preset will auto-detect as **Next.js** ✓
5. Click **"Environment Variables"** and add every key from Step 2
6. Click **"Deploy"**

Vercel will:
- Install dependencies
- Run `npm run build`
- Deploy to a `*.vercel.app` URL
- Re-deploy automatically on every push to `main`

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

Follow the prompts. Environment variables can be added via:

```bash
vercel env add NEXT_PUBLIC_SITE_URL
# repeat for each variable
```

---

## Step 5 — Custom Domain

1. In the Vercel dashboard → your project → **Settings → Domains**
2. Add `surraya.ac.ug`
3. Add the DNS records Vercel shows you at your domain registrar:
   - **A record**: `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
4. Wait 5–30 minutes for DNS to propagate
5. Vercel auto-provisions an SSL certificate via Let's Encrypt ✓

---

## Step 6 — Post-Deploy Checklist

```
□ All 5 routes load on production URL
□ /sitemap.xml returns valid XML
□ /robots.txt allows crawlers correctly
□ Navbar links work on mobile (375px)
□ Contact form submits without page reload
□ Donation form amount toggle works
□ FAQ accordion opens/closes
□ Open Graph preview: https://opengraph.xyz — paste your URL
□ PageSpeed Insights: https://pagespeed.web.dev — target ≥ 85 Performance
□ Lighthouse Accessibility: target ≥ 95
```

---

## Step 7 — Swap Placeholders for Real Content

| Placeholder | File to edit | What to replace with |
|---|---|---|
| `PhotoBlock` components | Each section component | `next/image` with real photos or `CldImage` from next-cloudinary |
| Map placeholder | `ContactForm.tsx` | Google Maps / Mapbox `<iframe>` embed |
| `href="#"` links | Navbar Apply, Footer | Real admissions form URL |
| Phone / Email | `lib/constants.ts` | Real school contact details |
| Social links | `lib/constants.ts` | Real Facebook / Instagram / etc. URLs |
| Donation flow | `DonationForm.tsx` | Wire to Stripe Checkout or PayPal SDK |
| Contact form submit | `ContactForm.tsx` | Wire to Resend API route (`/api/contact`) |

---

## Swapping PhotoBlock → Real Images

```tsx
// Before (placeholder)
<PhotoBlock aspectRatio="video" label="Morning Circle" />

// After (next/image)
import Image from "next/image";
<Image
  src="/images/morning-circle.jpg"
  alt="Children in morning circle at Surraya"
  width={800}
  height={450}
  className="rounded-2xl w-full object-cover"
/>

// After (Cloudinary via next-cloudinary)
import { CldImage } from "next-cloudinary";
<CldImage
  src="surraya/morning-circle"
  alt="Children in morning circle at Surraya"
  width={800}
  height={450}
  format="auto"
  quality="auto"
  className="rounded-2xl w-full object-cover"
/>
```

---

## Recommended Next Steps

- **Analytics**: Enable [Vercel Analytics](https://vercel.com/analytics) — zero config from the dashboard
- **Speed Insights**: Enable Vercel Speed Insights for real-user CWV data
- **Contact API route**: Create `app/api/contact/route.ts` using [Resend](https://resend.com/docs/send-with-nextjs)
- **Donation API route**: Create `app/api/donate/route.ts` using [Stripe Checkout Sessions](https://stripe.com/docs/payments/checkout)
- **Image CDN**: Upload all school photos to Cloudinary and replace `PhotoBlock` with `CldImage`
- **CMS**: Consider [Sanity](https://sanity.io) or [Contentful](https://contentful.com) for the headmaster to update gallery and news without touching code

---

*Built with Next.js 16, Tailwind CSS v4, Framer Motion, and Lucide React.*
*Deployed on Vercel. — Surraya Islamic Nursery School, Kampala, Uganda.*
