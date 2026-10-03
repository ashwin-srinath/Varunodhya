# VARUNODHYA CONSULTANCY SERVICES — Website

A React + Vite + TypeScript rebuild of the single-page VARUNODHYA website. This
matches the live site exactly: the dark navy/cyan theme, animated sonar hero with
cursor-glow and depth scale, scroll-spy navigation with a sliding underline,
magnetic buttons, six image-backed service cards with cursor-tilt and shine-sweep,
the interactive training topic picker, contact-form validation, and reduced-motion
support throughout.

> **Note on the company name:** your conversion request said "VARUNA CONSULTANCY
> SERVICES LLP," but the live site you've been iterating on was renamed to
> **VARUNODHYA CONSULTANCY SERVICES** a few turns ago. This project matches what's
> actually live (VARUNODHYA, no "LLP," six services). If you did want the old name
> back, it's one find-and-replace in `src/config/site.ts`.

---

## 1. Extract the ZIP

**Windows** — right-click `varunodhya-website.zip` → *Extract All…*
**macOS** — double-click the ZIP.
**Linux** — `unzip varunodhya-website.zip`

## 2. Open in VS Code

**File → Open Folder…** → select the extracted `varunodhya-website` folder.
Or: `code varunodhya-website`

## 3. Install dependencies

Requires **Node.js 18+** (`node -v` to check).

```bash
npm install
```

## 4. Run the website

```bash
npm run dev
```

Opens at **http://localhost:5173** by default, with instant hot-reload on edits.

```bash
npm run typecheck   # TypeScript check only
npm run build        # production build into dist/
npm run preview      # preview the production build locally
```

---

## Project structure

```
varunodhya-website/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig*.json
├── original-website.html        # exact copy of the live single-page site
├── public/
│   ├── favicon.svg
│   └── images/services/         # the six service-card photos (JPEG, ~60-90KB each)
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css                 # full stylesheet, ported 1:1 from the live site
    ├── vite-env.d.ts
    ├── hooks/
    │   ├── useScrollReveal.ts    # fade-up-on-scroll for .rev elements
    │   ├── useScrollSpy.ts       # tracks which section is in view
    │   ├── useBackToTop.ts       # show/hide + scroll-to-top
    │   └── useReducedMotion.ts   # live prefers-reduced-motion state
    ├── utils/
    │   └── interactions.ts       # shared magnetic-button + card-tilt handlers
    ├── config/
    │   ├── site.ts                # ← company name, tagline, contact details, nav
    │   ├── services.ts            # ← the six service cards (title/text/image/link)
    │   ├── expertise.ts           # the eight expertise items
    │   ├── training.ts            # the six training topics + status
    │   └── images.ts              # notes on the service images
    └── components/
        ├── GrainOverlay.tsx  Navbar.tsx    Hero.tsx      Services.tsx
        ├── About.tsx         Expertise.tsx Training.tsx  Projects.tsx
        ├── Careers.tsx       Contact.tsx   Footer.tsx    BackToTop.tsx
```

## What's interactive, and how it's built

- **Scroll-spy nav** (`useScrollSpy` + `Navbar.tsx`) — an `IntersectionObserver`
  tracks which section is in view; a `<span className="nav-slider">` glides under
  the active link using measured `getBoundingClientRect()` positions.
- **Magnetic buttons** (`utils/interactions.ts`) — `magneticMove`/`magneticLeave`
  are shared mouse handlers wired onto every `.btn`; they nudge the button a few
  pixels toward the cursor via CSS custom properties `--tx`/`--ty`. Automatically
  inert when `prefers-reduced-motion` is on.
- **Card tilt + shine** (`tiltMove`/`tiltLeave` in the same file, used in
  `Services.tsx`) — a subtle 3D perspective tilt on hover; the shine sweep itself
  is pure CSS (`.cell::before`), no JS needed.
- **Hero cursor-glow** (`Hero.tsx`) — mousemove sets `--mx`/`--my` custom
  properties that drive a radial-gradient layer.
- **Training topic picker** (`Training.tsx` + `Contact.tsx`) — selecting chips is
  local component state; clicking "use this in your enquiry" dispatches a
  `CustomEvent` (`varunodhya:use-topics`) that `Contact.tsx` listens for and uses
  to pre-fill the message field. No global state library needed.
- **Contact form** — validates in the browser, then reveals a plain `mailto:`
  link (not an automatic redirect — browsers/hosts can flag silent protocol
  redirects as suspicious, so the visitor clicks it themselves).

## How to edit company information

**`src/config/site.ts`** — name, tagline, hero headline/intro, email, phone,
address, nav items.

| What to change | File |
|---|---|
| The six service cards | `src/config/services.ts` |
| Expertise list | `src/config/expertise.ts` |
| Training topics / Planned vs On-request | `src/config/training.ts` |
| About paragraphs, values list | `src/components/About.tsx` |
| Projects placeholder text | `src/components/Projects.tsx` |
| Careers list | `src/components/Careers.tsx` |
| Contact form fields/dropdown | `src/components/Contact.tsx` |
| Footer links | `src/components/Footer.tsx` |
| Colours, spacing, every animation timing | `src/index.css` (CSS variables at
  the top: `--bg`, `--cy`, `--ink`, etc.) |

## How to replace images

The six service photos live in `public/images/services/`. To swap one:

1. Drop the new file into `public/images/services/` (any name).
2. Update the matching `image:` path in `src/config/services.ts`.

They're already compressed to ~60–90KB JPEGs for fast loading — if you add a much
larger replacement, consider resizing it to roughly 1500px wide and re-exporting
at ~70–75% JPEG quality first.

All other visuals (sonar rings, depth scale, grid, expertise icons, the About
pull-quote) are pure CSS/SVG — nothing to replace, nothing that can break.

## Connecting the contact form to send automatically

Right now, **Send Enquiry** validates the fields, then shows a `mailto:` link
addressed to the email in `src/config/site.ts` — no backend, no account needed. To
send automatically with no click-through, replace the `mailto` block inside
`onSubmit` in `src/components/Contact.tsx` with a `fetch()` POST to a form-backend
service (Formspree, Web3Forms, a Netlify function, your own API), then update the
success message and the disclaimer paragraph below the form to match.

## Deploying later

```bash
npm run build
```

Output lands in `dist/`.

- **Netlify / Vercel** — connect the repo; build command `npm run build`, publish
  directory `dist`. Or drag `dist` onto netlify.com/drop.
- **Cloudflare Pages** — same settings.
- **GitHub Pages** — push `dist/` to a `gh-pages` branch (`vite.config.ts` already
  sets `base: './'` so it works from a subdirectory).
- **Any static host** — upload the contents of `dist/`.

## A note on content accuracy

No founders, clients, completed projects, certifications, awards, government
affiliations, or achievements have been invented anywhere in this project.
Training topics are marked *Planned* or *On request*; the Projects section states
that case studies will appear as work develops; contact details are the ones
you've provided (csvaruna@gmail.com / +91 88489 92917 / Kochi address).

## Licence

Site content © Varunodhya Consultancy Services. Service-card photography is
yours, as supplied. Fonts via Google Fonts (SIL Open Font License). `lucide-react`
icons are ISC-licensed.
