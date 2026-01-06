# Agent Guidelines for raapisdingman

## Project Overview

Astro 5.x static site for Josta Raapis Dingman Massages (Dutch massage therapy site). Uses TypeScript, MDX, Decap CMS, and Prettier for formatting.

## Build & Development Commands

```bash
# Development
pnpm dev                    # Start dev server (http://localhost:4321)

# Build
pnpm build                  # Build for production
pnpm preview                # Preview production build

# Astro CLI
pnpm astro <command>        # Run Astro CLI commands

# Pre-commit (runs automatically)
pnpm dlx lint-staged         # Format staged files with Prettier
```

**Note:** No test framework is currently configured in this project.

## Code Style Guidelines

### TypeScript & Astro Components

- TypeScript strict mode enabled with `strictNullChecks: true`
- Astro components use `.astro` extension with frontmatter fences `---`
- Define props using `interface Props` at top of frontmatter
- Access props via `Astro.props`
- Use TypeScript types from `astro:content` for collections

Example:

```astro
---
import { getCollection } from "astro:content";
import { SITE_TITLE } from "../consts";

interface Props {
  title: string;
  image?: ImageMetadata;
}

const { title, image } = Astro.props;
const items = await getCollection("collectionName");
---
```

### Content Collections

- All collections defined in `src/content.config.ts`
- Use Zod schemas for validation with `defineCollection()`
- Use glob loaders: `glob({ base: "./src/content/...", pattern: "**/*.md" })`
- Collections include: siteSettings, heroContent, stoelmassageContent, contactInfo, testimonials, aboutContent, benefits, navigation

Example:

```ts
const testimonials = defineCollection({
  loader: glob({ base: "./src/content/testimonials", pattern: "**/*.md" }),
  schema: z.object({
    name: z.string(),
    text: z.string(),
    rating: z.number().min(1).max(5),
    featured: z.boolean().default(false),
  }),
});
```

### Styling

- CSS custom properties in `:root` for design tokens (colors, shadows, spacing)
- Utility classes: `.text-center`, `.mb-2`, `.p-3`, `.grid-2`, `.flex-between`
- BEM-inspired naming: `.nav-brand`, `.mobile-menu-toggle`
- Component-scoped styles in `<style>` tags within `.astro` files
- Mobile-first responsive design with `@media (max-width: 768px)`

### Imports

- Relative imports for local files: `import { SITE_TITLE } from "../consts"`
- Absolute imports for Astro: `import { getCollection } from "astro:content"`
- Third-party: `import { defineCollection, z } from "astro:content"`

### Naming Conventions

- Components: PascalCase (`Header.astro`, `Hero.astro`)
- Variables/Functions: camelCase (`siteSettings`, `getCollection`)
- Constants: UPPERCASE (`SITE_TITLE`, `BUSINESS_HOURS`)
- Files: kebab-case for utilities, PascalCase for components
- Classes: kebab-case (`.mobile-menu-toggle`, `.nav-brand`)

### Data Handling

- Use optional chaining `?.` for safe access to collection data
- Provide fallback values: `siteData?.siteTitle || SITE_TITLE`
- Filter collections with predicate functions: `(entry) => entry.data.featured`
- Sort arrays: `.sort((a, b) => a.data.order - b.data.order)`

### Client-Side Scripts

- Wrap in DOMContentLoaded event listener
- Use `querySelector` with class selectors
- Null checks before adding event listeners

Example:

```astro
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".mobile-menu-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => toggle.classList.toggle("active"));
    }
  });
</script>
```

### Formatting

- Prettier configured with `prettier-plugin-astro`
- Pre-commit hook runs `lint-staged` to format staged files
- DO NOT add comments unless asked
- Follow existing code patterns

### Language

- Content (UI text, markdown files): Dutch (Nederlands)
- Code/Comments: English

### File Structure

```
src/
├── components/       # Reusable Astro components
├── content/         # MDX/Markdown content collections
├── pages/           # Route pages
├── styles/          # Global CSS
└── consts.ts        # Global constants (imports: SITE_TITLE, CONTACT_INFO, etc.)
```

### When Working on Files

1. Always read the file first before editing
2. Mimic existing patterns for similar components
3. Check `src/consts.ts` for available constants before creating new ones
4. Use `getCollection()` for content access, not direct imports
5. Ensure responsive breakpoints match existing patterns (768px, 900px)

### Content Management

- Content files live in `src/content/*/` directories
- Use frontmatter with `---` delimiters
- Validate against schemas in `content.config.ts`
- Admin interface at `/admin.html` (Decap CMS)
