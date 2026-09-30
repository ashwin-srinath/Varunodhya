# VARUNA CONSULTANCY SERVICES LLP — Website

A React + Vite + TypeScript conversion of the single-page VARUNA website. The design,
dark palette, sonar hero animation, scroll reveals, hover effects, responsive layout,
mobile menu, form validation and reduced-motion support are all preserved.

---

## 1. Extract the ZIP

**Windows** — right-click `varuna-website.zip` → *Extract All…* → choose a folder.
**macOS** — double-click the ZIP.
**Linux** — `unzip varuna-website.zip`

You will get a folder named `varuna-website`.

## 2. Open in VS Code

Open VS Code → **File → Open Folder…** → select `varuna-website`.
Or from a terminal: `code varuna-website`

Recommended extensions: *ESLint*, *Prettier*, *ES7+ React snippets*.

## 3. Install dependencies

You need **Node.js 18 or newer** (`node -v` to check; download from nodejs.org).

Open the VS Code terminal (**Ctrl + `** / **Cmd + `**) in the project folder and run:

```bash
npm install
```

## 4. Run the website

```bash
npm run dev
```

Vite prints a local address (usually **http://localhost:5173**) and opens it in your
browser. Edits to any file reload instantly.

Other scripts:

```bash
npm run typecheck   # TypeScript check only
npm run build       # production build into dist/
npm run preview     # preview the production build locally
```

---

## Project structure

```
varuna-website/
├── index.html                # page shell, <title>, meta tags, Google Fonts link
├── package.json
├── vite.config.ts
├── tsconfig*.json
├── original-website.html     # the original single-file version, for reference
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx              # React entry point
    ├── App.tsx               # assembles all nine sections
    ├── index.css             # the complete original stylesheet
    ├── hooks/
    │   └── useScrollReveal.ts   # fade-in-on-scroll observer
    ├── config/
    │   ├── site.ts           # ← company name, contact details, nav links
    │   └── images.ts         # ← image URLs and how to replace them
    └── components/
        ├── Navbar.tsx  Hero.tsx      Services.tsx  About.tsx
        ├── Expertise.tsx Training.tsx Projects.tsx  Careers.tsx
        └── Contact.tsx  Footer.tsx
```

## How to edit company information

Almost everything you'll want to change lives in **`src/config/site.ts`**: company
name, wordmark, tagline, hero headline and intro, and the email / telephone /
address placeholders. Replace the bracketed placeholders such as
`[ business email — to be added ]` with real values when you have them.

Section-specific text lives in its own component:

| What you want to change | File |
|---|---|
| Navigation items | `src/config/site.ts` (`navItems`) |
| Three service cards | `src/components/Services.tsx` |
| About paragraphs / values | `src/components/About.tsx` |
| Expertise list | `src/components/Expertise.tsx` |
| Training topics and their `Planned` / `On request` labels | `src/components/Training.tsx` |
| Projects placeholder (add real case studies here later) | `src/components/Projects.tsx` |
| Careers list | `src/components/Careers.tsx` |
| Form fields and dropdown options | `src/components/Contact.tsx` |
| Footer links and policy pages | `src/components/Footer.tsx` |
| Colours, spacing, typography | `src/index.css` (CSS variables at the top: `--bg`, `--cy`, `--ink`, …) |

## How to replace images

The site ships with **no external images** — the underwater background, light beams
and sonar rings are pure CSS, so nothing can break or expire. To use real
photography, follow the instructions in **`src/config/images.ts`**: put the file in
`public/images/`, set `heroBackground: '/images/hero.jpg'`, and uncomment the
`heroImageStyle` block in `src/components/Hero.tsx`. Only use imagery you are
legally permitted to use, and always give it descriptive `alt` text.

Fonts (Fraunces + Inter) load from Google Fonts via a `<link>` in `index.html`.
`src/config/images.ts` explains how to self-host them if you'd rather not depend on
an external CDN.

## Connecting the contact form

The form validates in the browser and deliberately does **not** claim to send
anything. In `src/components/Contact.tsx`, find the comment marked
*"No backend is connected"* inside `onSubmit` and POST the `values` object to your
endpoint — Formspree, Web3Forms, a Netlify function, or your own API. Replace the
success message and the disclaimer paragraph below the form once it really sends.

## Deploying later

Run `npm run build`; the output lands in `dist/`.

- **Netlify / Vercel** — connect the Git repo; build command `npm run build`,
  publish directory `dist`. Or drag the `dist` folder onto netlify.com/drop.
- **Cloudflare Pages** — same settings.
- **GitHub Pages** — push `dist/` to a `gh-pages` branch. `vite.config.ts` already
  sets `base: './'` so relative asset paths work from a subdirectory.
- **Any web host** — upload the contents of `dist/` to your web root.

Before going live: add the real contact details, replace the Privacy Policy and
Terms links in `Footer.tsx`, and add a favicon/social preview image if you want one.

## A note on content accuracy

No founders, clients, completed projects, certifications, awards, affiliations or
contact details have been invented. Training topics are marked *Planned* or
*On request*, the projects section states that case studies will appear as work
develops, and contact details are visible placeholders.

## Licence

Site content © Varuna Consultancy Services LLP. Fonts are licensed under the SIL
Open Font License via Google Fonts; `lucide-react` icons are ISC-licensed.
