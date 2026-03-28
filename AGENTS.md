# PROJECT KNOWLEDGE BASE

**Generated:** 2026-03-28
**Commit:** 303db40
**Branch:** main

## OVERVIEW

Astro 5.x static site for Josta Raapis Dingman Massages — Dutch stoelmassage (chair massage) therapy business. Astro + TypeScript + Decap CMS. No frameworks, no layouts dir, content-driven via 9 collections.

## STRUCTURE

```
.
├── src/
│   ├── components/       # 6 Astro components (no layouts/ — flat composition)
│   ├── content/          # 9 collections, each subdir has *.md files
│   │   ├── benefits/     # 4 benefit items with icons + order
│   │   └── */main.md     # Most collections use single main.md
│   ├── pages/            # index.astro, about.astro, admin.html, rss.xml.js
│   ├── styles/global.css # Design tokens + utility classes
│   ├── consts.ts         # Business data (SITE_TITLE, CONTACT_INFO, etc.)
│   └── content.config.ts # Zod schemas for all 9 collections
├── public/
│   ├── admin/config.yml  # Decap CMS config
│   └── fonts/            # Atkinson Hyperlegible
├── astro.config.mjs      # MDX + sitemap (filters /admin)
└── mise.toml             # Node 22, pnpm 10.26.2
```

## WHERE TO LOOK

| Task             | Location                                           | Notes                                                  |
| ---------------- | -------------------------------------------------- | ------------------------------------------------------ |
| Add a page       | `src/pages/*.astro`                                | Import BaseHead, Header, Footer                        |
| Add/edit content | `src/content/{collection}/`                        | All Dutch language                                     |
| Add a collection | `src/content.config.ts`                            | Zod schema + glob loader                               |
| Styling          | `src/styles/global.css` + component `<style>`      | Design tokens in `:root`                               |
| Business data    | `src/consts.ts`                                    | SITE_TITLE, CONTACT_INFO, BUSINESS_HOURS, SOCIAL_LINKS |
| Navigation items | `src/content/navigation/`                          | Content-driven, not hardcoded                          |
| CMS admin        | `public/admin/config.yml` + `src/pages/admin.html` | Decap CMS                                              |
| SEO/metadata     | `src/components/BaseHead.astro`                    | JSON-LD LocalBusiness, OG tags                         |
| Deploy           | `.github/workflows/deploy.yml`                     | GitHub Pages via withastro/action                      |

## CODE MAP

| Symbol         | Type      | Location                       | Role                           |
| -------------- | --------- | ------------------------------ | ------------------------------ |
| SITE_TITLE     | const     | consts.ts                      | Fallback site title            |
| CONTACT_INFO   | const     | consts.ts                      | Phone, email, address          |
| BUSINESS_HOURS | const     | consts.ts                      | Opening hours                  |
| SOCIAL_LINKS   | const     | consts.ts                      | Facebook, Instagram, Yelp      |
| collections    | export    | content.config.ts              | All 9 collection definitions   |
| BaseHead       | component | components/BaseHead.astro      | SEO, meta, global.css, JSON-LD |
| Header         | component | components/Header.astro        | Nav from content collection    |
| BookingButton  | component | components/BookingButton.astro | CTA with variant/size props    |

## CONVENTIONS

- **Dutch content, English code**: All UI text in markdown is Dutch; code/comments in English
- **No layouts/ directory**: Pages import BaseHead directly, compose Header/Footer inline
- **Content-driven nav**: Navigation items come from `src/content/navigation/` markdown, not hardcoded arrays
- **Single main.md pattern**: Most collections use one `main.md` file; `benefits/` uses multiple with `order` field
- **Fallback pattern**: `siteData?.siteTitle || SITE_TITLE` — collections provide data, consts.ts provides fallbacks
- **Responsive breakpoints**: Mobile-first, `@media (max-width: 768px)` and `900px`
- **CSS architecture**: `:root` design tokens → global utility classes (`.text-center`, `.mb-2`, `.grid-2`, `.flex-between`) → component-scoped `<style>` tags. BEM-inspired class names (`.nav-brand`, `.mobile-menu-toggle`)
- **Props pattern**: `interface Props` at top of frontmatter → destructure from `Astro.props`
- **Client scripts**: Wrap in `DOMContentLoaded`, null-check before `addEventListener`
- **Collection access**: Always `await getCollection("name")`, never direct file imports
- **Optional chaining**: Use `?.` for all collection data access

## ANTI-PATTERNS (THIS PROJECT)

- DO NOT add comments unless explicitly asked
- DO NOT use `as any`, `@ts-ignore`, or `@ts-expect-error`
- DO NOT hardcode business data in components — use `consts.ts` or content collections
- DO NOT use inline styles — use utility classes or component-scoped `<style>`
- DO NOT add files to `src/layouts/` — this project uses flat component composition
- DO NOT mix Dutch into code/comments or English into content/markdown
- DO NOT use npm or yarn — pnpm only (enforced by mise.toml)
- DO NOT add blog posts without a valid Zod schema (title, description, pubDate required)
- DO NOT bypass pre-commit hooks — Prettier formatting is mandatory

## COMMANDS

```bash
pnpm dev                 # Dev server at http://localhost:4321
pnpm build               # Production build to ./dist/
pnpm preview             # Preview production build
pnpm astro <command>     # Astro CLI (add, check, etc.)
```

**No test framework configured.** Pre-commit runs `pnpm dlx lint-staged` (Prettier).

## NOTES

- `blog` collection defined in content.config.ts but has no content files yet
- RSS feed at `/rss.xml.js` reads from blog collection (currently empty output)
- Sitemap explicitly filters out `/admin` and `/admin/` routes
- `fnox.toml` is secrets management (age encryption) — do not commit decrypted values
- `mise.toml` pins Node 22 and pnpm 10.26.2 — use these exact versions
- Site deployed to `stoelmassagebyjosta.nl` via GitHub Pages
- CNAME file in root for custom domain
