# FLEXWEAR TM LIMITED — Ecosystem Website

**Building Better Systems for Papua New Guinea.**

A modern, institutional-grade website for FLEXWEAR TM LIMITED and the Atomic PNG ecosystem — apparel, education, leadership, innovation, digital systems, and community transformation.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, and structured for future database, ecommerce, CMS, AI, and dashboard integration.

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Google Fonts via `next/font` (Fraunces + Archivo)
- Zero external UI dependencies — clean, portable, fast

---

## Project Structure

```
flexwear-website/
├── app/                      # App Router pages (one folder per route)
│   ├── layout.tsx            # Root layout: fonts, metadata, navbar, footer, JSON-LD
│   ├── page.tsx              # Home
│   ├── globals.css           # Tailwind layers + design system utilities
│   ├── sitemap.ts            # Auto-generated sitemap
│   ├── robots.ts             # robots.txt
│   ├── about/ apparel/ shop/ projects/ media/ partnerships/ contact/
│   └── atomic-*/             # The five Atomic division pages
├── components/               # Reusable UI components
│   ├── Navbar.tsx  Footer.tsx  Logo.tsx
│   ├── HeroSection.tsx  PageHeader.tsx  Section.tsx
│   ├── DivisionCard.tsx  ProductCard.tsx  ProjectCard.tsx  BlogCard.tsx
│   ├── CTASection.tsx  StatsSection.tsx  ContactForm.tsx
│   └── DivisionPage.tsx      # Shared division page template
├── data/                     # Single source of truth (edit content here)
│   ├── site.ts  navigation.ts  divisions.ts  products.ts  projects.ts  articles.ts
├── lib/
│   └── seo.ts                # Metadata builder used by every page
├── public/
│   ├── logo.png              # Primary logo (replace with official artwork)
│   └── logo-badge.png        # Circular emblem (header / favicon / hero)
├── styles/                   # (reserved)
├── tailwind.config.ts        # Design tokens (palette, fonts, animations)
├── next.config.mjs
└── .env.example              # Copy to .env.local and fill in
```

---

## Local Development

**Requirements:** Node.js 18.17+ (Node 20 LTS recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.example .env.local

# 3. Start the dev server
npm run dev
```

Open **http://localhost:3000**.

> **Note:** The build downloads Google Fonts (Fraunces + Archivo) at build time, so an internet connection is required when running `npm run build` or `npm run dev` for the first time.

---

## Production Build

```bash
npm run build   # creates an optimised production build in .next/
npm run start   # serves the production build on port 3000
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://flexwearltd.com`) — used in metadata & sitemap. |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | Optional. URL of a form handler/API. If empty, the contact form falls back to opening the user's email client to `enquiries@flexwearltd.com`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email. |
| `NEXT_PUBLIC_WHATSAPP` | Optional WhatsApp number for the contact page. |

---

## Replacing the Logo

The official logo is referenced in two files in `public/`:

- **`public/logo.png`** — the full primary logo.
- **`public/logo-badge.png`** — the circular emblem used in the navbar, hero, and as the favicon.

Replace these two files with the official artwork **using the same filenames** — no code changes are required. For best results use transparent PNGs; the badge should be roughly square.

---

## Editing Content

All content lives in the **`data/`** folder — no need to touch components:

- **`data/site.ts`** — company name, tagline, email, registration number, socials.
- **`data/navigation.ts`** — top navigation and the Divisions dropdown.
- **`data/divisions.ts`** — the six divisions (summaries, taglines, focus areas). Division pages render from here automatically.
- **`data/products.ts`** — shop/apparel products (name, category, price, blurb).
- **`data/projects.ts`** — projects and their status badges (`In Development`, `Pilot Ready`, `Coming Soon`).
- **`data/articles.ts`** — media/blog entries.

Brand colours, fonts, and animations are defined in **`tailwind.config.ts`**.

> **Integrity note:** Impact metrics in `components/StatsSection.tsx` are intentionally honest and forward-looking (e.g. "Projects in development"). Please keep them truthful — do not replace them with fabricated achievements, certifications, or scale.

---

## Deployment to a Hostinger VPS

These steps deploy the Next.js app on a Hostinger VPS (Ubuntu) using Node.js, **PM2** (process manager), and **Nginx** (reverse proxy).

### 1. Prepare the server

```bash
# SSH into the VPS
ssh root@YOUR_SERVER_IP

# Install Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Install PM2 and Nginx
npm install -g pm2
apt-get install -y nginx
```

### 2. Upload and build the app

```bash
# Copy the project to the server (from your local machine)
#   scp -r flexwear-website root@YOUR_SERVER_IP:/var/www/
# or clone from your git repository into /var/www/flexwear-website

cd /var/www/flexwear-website
cp .env.example .env.local      # then edit values
npm install
npm run build
```

### 3. Run with PM2

```bash
pm2 start npm --name flexwear -- start
pm2 save
pm2 startup        # follow the printed instruction to enable on boot
```

The app now runs on `http://localhost:3000` on the server.

### 4. Configure Nginx as a reverse proxy

Create `/etc/nginx/sites-available/flexwearltd.com`:

```nginx
server {
    listen 80;
    server_name flexwearltd.com www.flexwearltd.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable it and reload:

```bash
ln -s /etc/nginx/sites-available/flexwearltd.com /etc/nginx/sites-enabled/
nginx -t          # test config
systemctl reload nginx
```

### 5. Point the domain & add HTTPS

- In your DNS (Hostinger), point an **A record** for `flexwearltd.com` (and `www`) to the VPS IP.
- Install a free SSL certificate with Certbot:

```bash
apt-get install -y certbot python3-certbot-nginx
certbot --nginx -d flexwearltd.com -d www.flexwearltd.com
```

### 6. Updating the site later

```bash
cd /var/www/flexwear-website
git pull            # or re-upload files
npm install
npm run build
pm2 restart flexwear
```

> **Alternative:** This app also deploys with zero configuration to Vercel or Netlify if you prefer managed hosting — connect the repository and it builds automatically.

---

## Future Integration Recommendations

The codebase is structured to grow. Suggested next steps:

- **Database** — add a layer such as **Prisma + PostgreSQL** (or Hostinger MySQL). Create `lib/db.ts`, move the arrays in `data/` into database tables, and replace the static imports with queries. Add `DATABASE_URL` to `.env.local`.
- **Ecommerce** — the `ProductCard` grid and `data/products.ts` are shaped for a store. Integrate **Stripe** or a PNG-friendly payment gateway, add a cart (e.g. React context or Zustand), and create `/api` routes for checkout.
- **CMS** — the `data/articles.ts` and division content can be driven by a headless CMS (**Sanity**, **Contentful**, or **Payload**). Swap the static imports for CMS fetches in each page's server component.
- **Contact form** — set `NEXT_PUBLIC_CONTACT_ENDPOINT` and add an `app/api/contact/route.ts` handler using **Resend** or **Nodemailer** to deliver to `enquiries@flexwearltd.com`.
- **AI systems / dashboards** — add authenticated routes under `app/(dashboard)/` and API routes under `app/api/` for Atomic Digital PNG tools.
- **Analytics & SEO** — add Google Analytics / Plausible, and submit `sitemap.xml` to Google Search Console.

---

## Accessibility & Performance

- Semantic HTML, labelled form fields, keyboard-navigable menus, and focus-visible states.
- Mobile-first responsive layout with a dedicated mobile menu.
- Static generation for fast first loads; system-level font loading via `next/font`.
- Respect for reduced-motion is recommended as a future enhancement.

---

## Company

**FLEXWEAR TM LIMITED**
Papua New Guinea · Company Registration No: 1-137944928
Email: enquiries@flexwearltd.com

*Built in PNG. Inspiring the World.*
