# Solutions-Blueprint

Personal portfolio of **Abdul Rahim Kattirithodi**, Solution Expert and Senior Python / Django Full Stack Engineer.

Built with **React 19 + Vite 8**, deployed on **Cloudflare Workers** (static assets).

## Tech

- React 19 function components and hooks, with no UI framework and only two runtime dependencies (`react`, `react-dom`)
- Vite 8 build, ESLint 10 (flat config)
- Plain CSS with design tokens (`src/styles/global.css`)
- Fully responsive, from 360px phones to tablets (portrait and landscape), short laptop screens (1366×768) and 1920px+ desktops, using fluid `clamp()` type and spacing and grids that adapt to the screen
- Motion without a library:
  - staggered page-load and scroll reveals
  - a timeline line that draws itself as you scroll
  - count-up stats and a rotating role title
  - 3D tilt and parallax on the hero card
  - a cursor spotlight on cards
  - a scrolling tech strip
  - project filtering animated with the View Transitions API
  - a scroll progress bar, and a navbar that hides as you scroll down
  - a back-to-top button with a progress ring
- Touch-first UX: hover effects only on devices with a mouse, 44px+ tap targets, a swipeable filter bar, safe-area (notch) insets, and lighter blur effects on phones
- SEO: meta and Open Graph tags, JSON-LD `Person` schema, `robots.txt`, `sitemap.xml`
- Security and caching headers for Cloudflare (`public/_headers`)
- Honors `prefers-reduced-motion`; includes a skip link, focus-visible styles and semantic landmarks

## Project structure

```
├── public/
│   ├── _headers          # Cloudflare security + cache headers
│   ├── favicon.svg
│   ├── og-image.png      # 1200×630 social share card
│   ├── profile.webp
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── data/profile.js   # ← ALL content lives here (edit this to update the site)
│   ├── components/       # Nav, Hero, Marquee, About, Experience, Projects, Capabilities, Contact, Footer, BackToTop, CountUp, RotatingWord
│   ├── hooks/            # useReveal, useScrollSpy, useScrollFx, useSpotlight, useTilt, useInView, useTimelineProgress
│   ├── styles/global.css
│   ├── App.jsx
│   └── main.jsx
├── .github/workflows/ci.yml   # lint + build on every push / PR
├── wrangler.toml              # Cloudflare Workers config
└── index.html
```

## Updating content

Everything is in **`src/data/profile.js`**: intro, stats, skills, experience, projects, capabilities and contact links. Components never hard-code personal data.

To add a project, append an object to `projects`:

```js
{
  name: 'New Project',
  kind: 'Short descriptor',
  category: 'Integrations',            // must match one of projectCategories
  description: 'One or two sentences.',
  stack: ['Django', 'PostgreSQL'],
  url: 'https://example.com',          // optional — omit for private client systems
}
```

## Local development

Requires Node ≥ 20.19 (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Deploy to Cloudflare (Workers static assets)

`wrangler.toml` deploys `./dist` as a static-assets Worker. `public/_headers` is applied automatically.

### Option A: Git integration (auto-deploys on every push)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Import a repository** → select **abdulrahim-uj/Solutions-Blueprint**.
2. Build settings:
   | Setting | Value |
   |---|---|
   | Build command | `npm run build` |
   | Deploy command | `npx wrangler deploy` |
   | Production branch | `main` |
3. The Worker name must match `name` in `wrangler.toml` (`solutions-blueprint`).

The site goes live at https://solutions-blueprint.abdulrahim-uj.workers.dev.

### Option B: Deploy from your machine

```bash
npm run build
npx wrangler login
npx wrangler deploy
```

### Custom domain (optional)

Worker → **Settings** → **Domains & Routes** → **Add** → Custom domain. If you add one, replace `https://solutions-blueprint.abdulrahim-uj.workers.dev` in `index.html`, `public/robots.txt` and `public/sitemap.xml` with your live URL.

## Contact

- Email: abdulrahim.uj@gmail.com
- WhatsApp: +91 98099 66231
- LinkedIn: https://www.linkedin.com/in/abdulrahim-uj/
- GitHub: https://github.com/abdulrahim-uj
