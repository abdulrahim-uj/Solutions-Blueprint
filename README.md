# Solutions-Blueprint

Personal portfolio of **Abdul Rahim Kattirithodi**, Solution Expert and Senior Python / Django Full Stack Engineer.

Built with **React 19 + Vite 8**, deployed on **Cloudflare Pages**.

## Tech

- React 19 function components and hooks, with no UI framework and only two runtime dependencies (`react`, `react-dom`)
- Vite 8 build, ESLint 10 (flat config)
- Plain CSS with design tokens (`src/styles/global.css`)
- Scroll-reveal via `IntersectionObserver`, scroll-spy navigation, accessible mobile menu, project filtering
- SEO: meta and Open Graph tags, JSON-LD `Person` schema, `robots.txt`, `sitemap.xml`
- Security and caching headers for Cloudflare Pages (`public/_headers`)
- Honors `prefers-reduced-motion`; includes a skip link, focus-visible styles and semantic landmarks

## Project structure

```
├── public/
│   ├── _headers          # Cloudflare Pages security + cache headers
│   ├── favicon.svg
│   ├── og-image.png      # 1200×630 social share card
│   ├── profile.webp
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── data/profile.js   # ← ALL content lives here (edit this to update the site)
│   ├── components/       # Nav, Hero, About, Experience, Projects, Capabilities, Contact, Footer
│   ├── hooks/            # useReveal, useScrollSpy
│   ├── styles/global.css
│   ├── App.jsx
│   └── main.jsx
├── .github/workflows/ci.yml   # lint + build on every push / PR
├── wrangler.toml              # Cloudflare Pages config
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

## Deploy to Cloudflare Pages

### Option A: Git integration (recommended; auto-deploys on every push)

1. Push this repo to GitHub (`main` branch).
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** tab → **Connect to Git**.
3. Authorise GitHub and select **abdulrahim-uj/Solutions-Blueprint**.
4. Build settings:
   | Setting | Value |
   |---|---|
   | Framework preset | `React (Vite)` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Production branch | `main` |
5. **Save and Deploy**. The site goes live at `https://solutions-blueprint.pages.dev`.

Every push to `main` then deploys to production, and every other branch or PR gets a preview URL.

### Option B: Direct upload from your machine

```bash
npm run build
npx wrangler login
npx wrangler pages deploy        # reads wrangler.toml → uploads ./dist
```

### Custom domain (optional)

Pages project → **Custom domains** → **Set up a custom domain**. If you use one, replace `https://solutions-blueprint.pages.dev` in `index.html`, `public/robots.txt` and `public/sitemap.xml`.

## Contact

- Email: abdulrahim.uj@gmail.com
- WhatsApp: +91 98099 66231
- LinkedIn: https://www.linkedin.com/in/abdulrahim-uj/
- GitHub: https://github.com/abdulrahim-uj
