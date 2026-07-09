# Fairy Cauldron

The holding-company website for **Fairy Cauldron LLC** — a house of ventures
brewing brands across technology, wellness, and lifestyle.

Built with **Next.js 15** (App Router) + **Tailwind CSS v4** + **Framer Motion**.
Fully static, no database, deploys to **Vercel** out of the box.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build locally
```

---

## Editing the site

Almost everything you'll want to change lives in one file:

- **`lib/site.ts`** — company name, email, address, ventures, principles, nav,
  and social links. Edit ventures (name / status / blurb / accent) and copy here.
- **`app/globals.css`** — the design system: colors (sampled from the logo),
  typography, and the signature cauldron animation.
- **`components/`** — one file per section (`Hero`, `Ventures`, `Approach`,
  `Contact`, `Footer`, etc.).
- **`public/`** — brand assets (`logo-full.png`, `cauldron-mark.png`, `og.png`).

### Turn on social links

In `lib/site.ts`, fill in any of the `social` URLs (they're empty by default,
so no dead links show). Icons appear in the footer automatically once set:

```ts
social: {
  instagram: "https://instagram.com/fairycauldron",
  x: "",
  linkedin: "",
},
```

### Contact form

The form composes a pre-filled email and opens the visitor's mail app
(`mailto:` — no backend needed). If you later want messages delivered without
the visitor's mail client, drop in a free endpoint from
[Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io) inside
`components/Contact.tsx` — a one-line change to the submit handler.

---

## Deploy to Vercel

1. Push this folder to a GitHub repo (see **Git** below).
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repo.
3. Vercel auto-detects Next.js — no settings to change. Click **Deploy**.

You'll get a live `*.vercel.app` URL in ~1 minute.

### Point fairycauldron.com at Vercel (moving off Bluehost)

The domain is currently registered/hosted at Bluehost with a WordPress site.
To move the live site to Vercel without transferring the domain:

1. In Vercel: **Project → Settings → Domains → Add** `fairycauldron.com`
   (and `www.fairycauldron.com`). Vercel shows you the DNS records to set.
2. In **Bluehost → Domains → DNS**, update the records to what Vercel gives you:
   - **A record** `@` → `76.76.21.21`
   - **CNAME** `www` → `cname.vercel-dns.com`
   (Vercel will confirm the exact values — always use those.)
3. Wait for DNS to propagate (minutes to a few hours). Vercel issues an HTTPS
   certificate automatically.

> Keep the old WordPress site up at Bluehost until DNS has switched and you've
> confirmed the new site is live, then you can retire it. Nothing here touches
> Bluehost until you change those DNS records.

Alternatively, you can transfer the domain registration to Vercel entirely
(**Settings → Domains → Transfer in**) so everything lives in one place.

---

## Git

```bash
git init
git add .
git commit -m "New Fairy Cauldron holding-company site"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

---

## Notes

- `oldsite_pages/`, `out.txt`, and `Logo placeholder.png` are working files from
  the rebuild and are git-ignored.
- Design tokens are sampled from the brand logo so the palette always matches the
  mark. The whole visible spectrum is the brand system — one cauldron, many colors.
