# Surraya CMS — Sanity Setup Guide

The admin studio lives at **`/studio`** on the website.
All site content is editable there — no code required after setup.

---

## Step 1 — Create a Sanity Project (5 minutes)

1. Go to [sanity.io](https://sanity.io) and sign up (free)
2. Click **"New Project"**
3. Name it: `Surraya`
4. Dataset: `production` (default)
5. Copy your **Project ID** from the project dashboard

---

## Step 2 — Add Environment Variables

Open `.env.local` (copy from `.env.local.example` if it doesn't exist):

```bash
cp .env.local.example .env.local
```

Fill in:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz   # from sanity.io/manage
NEXT_PUBLIC_SANITY_DATASET=production
```

---

## Step 3 — Add Your Domain to CORS

Sanity blocks requests from unknown domains by default.

1. Go to [sanity.io/manage](https://sanity.io/manage) → your project
2. **API → CORS Origins**
3. Add:
   - `http://localhost:3000` (for local development)
   - `https://surraya.ac.ug` (your production domain)
   - Check **"Allow Credentials"** for both

---

## Step 4 — Run the Studio Locally

```bash
npm run dev
```

Open: **http://localhost:3000/studio**

Sign in with your Sanity account. You'll see the full admin panel.

---

## Step 5 — Create the Initial Content Documents

The Studio uses singleton documents (one per page). You need to create them once.

In the Studio sidebar:

1. Click **⚙️ Site Settings** → fill in school name, contact details, social links → **Publish**
2. Click **🏠 Home Page** → fill in hero text, stats, pillars → **Publish**
3. Click **📚 Academics Page** → fill in EYFS areas, Islamic studies section → **Publish**
4. Click **🎓 Admissions Page** → fill in classes, steps, fees → **Publish**
5. Click **❤️ Donate Page** → fill in causes, hadith, form copy → **Publish**
6. Click **📞 Contact Page** → fill in FAQs, form subjects → **Publish**

> **Tip:** Leave any field blank — the website automatically falls back to the
> hardcoded content from `lib/constants.ts`. Nothing will break.

---

## Step 6 — Upload Gallery Photos

1. In the sidebar → **🖼️ Gallery Photos** → **+ New Gallery Photo**
2. Upload a photo, add a label, choose a category and aspect ratio
3. Check **"Show on Home Page"** for photos to appear in the home gallery preview
4. Set the **Display Order** (lower = appears first)
5. **Publish**

The gallery updates on the website within 60 seconds (ISR revalidation).

---

## Step 7 — Deploy with Sanity on Vercel

Add environment variables in the Vercel dashboard:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | From sanity.io/manage |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_API_READ_TOKEN` | Optional — for draft previews |

Then add your Vercel production URL to Sanity CORS origins (Step 3).

---

## How the Admin Edits Content (Day-to-Day)

1. Go to `https://surraya.ac.ug/studio`
2. Log in with their Sanity account
3. Click the page they want to edit in the left sidebar
4. Make changes in the form fields on the right
5. Click **Publish** (green button, top right)
6. The website updates within **60 seconds** automatically — no deployment needed

---

## Adding a New Team Member to the Studio

1. Go to [sanity.io/manage](https://sanity.io/manage) → your project → **Members**
2. Click **"Invite Member"**
3. Enter their email and choose role:
   - **Editor** — can create and edit content, cannot delete
   - **Administrator** — full access
4. They receive an email invite and create a free Sanity account
5. They can then access `/studio` on the website

---

## What the Admin Can Edit Without Code

| Section | What they can change |
|---|---|
| Site Settings | School name, tagline, phone, email, address, social links |
| Home Page | Hero headline, stat numbers, pillar titles/descriptions, payment card copy |
| Academics Page | EYFS area descriptions, Islamic studies hadith, enrichment club descriptions |
| Admissions Page | Class descriptions, age ranges, class sizes, fee amounts, steps, documents required |
| Donate Page | Cause descriptions, progress bar %, hadith quote, preset donation amounts |
| Contact Page | FAQ questions and answers, form subject options |
| Gallery | Add, remove, reorder photos — with category and aspect ratio control |

## What Still Requires a Developer

- Adding a brand new page or section
- Changing layout, colours, or design
- Wiring the contact form or donation form to a live payment/email provider
- Changing navigation links

---

*Content changes go live within 60 seconds via Next.js ISR — no redeployment needed.*
