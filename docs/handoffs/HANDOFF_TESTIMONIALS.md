# Handoff: Testimonials page

**Status:** Pending

## Goal

Add a **Testimonials** page and nav link. Match existing layout, typography, and data-file patterns.

## Read first

- [docs/agents/CONVENTIONS.md](../agents/CONVENTIONS.md)
- [docs/agents/ROUTES.md](../agents/ROUTES.md)
- `src/routes/about/+page.svelte` — page structure reference

## Constraints

- SvelteKit static, `prerender.entries: ['*']`
- Svelte 5 runes; `PageGrid`, `ScriptTitle` from `$lib/components/`
- Use `{base}` only via existing `SiteShell` / `$app/paths`; do not hardcode `/gift-for-alif`
- Run `npm run check` and `npm run build` when done

## Tasks

1. **Nav** — In `SiteShell.svelte`, add `{ href: '/testimonials', label: 'Testimonials' }` (e.g. after About).
2. **Data** — `src/lib/data/testimonials.ts`:
   ```ts
   export type Testimonial = {
     quote: string;
     author: string;
     roleOrSite?: string;
     href?: string;
   };
   ```
3. **Route** — `src/routes/testimonials/+page.svelte`:
   - `PageGrid`, `ScriptTitle as="h1">Testimonials</ScriptTitle>`
   - Accessible `<section>` / `blockquote` per item
   - `<svelte:head>` with page `<title>` and `meta description`
4. **Content** — Include this testimonial (verbatim unless operator asks to fix typos):

   **Quote:**
   > Thank you for instilling a passion for poetry in me. I enrolled in Sarir-e-khamma as a complete beginner to Shaeri; after quite an engaging, exciting and challenging course, I feel confidence in my voice, have a framework for composing poems and songs and managed to break some plateaus I had hit in self study.
   >
   > Sarir-e-Khamma is very enjoyable and rewarding; I highly recommend signing up for the program. I gurantee you will take something or a lot away from it.

   **Attribution:** W. Worst — optional link subtitle [iconoclastaud.io](https://iconoclastaud.io/) (`rel="noopener noreferrer"`, `target="_blank"`).

5. **Styles** — Scoped CSS consistent with About; use `.subhead-accent` where appropriate.

## Verify

- `/testimonials` loads in dev and preview
- Nav active state works for testimonials route
- `npm run check` passes

## Do not

- Change unrelated pages, dependencies, or `svelte.config.js` base path
- Normalize spelling in the quote unless explicitly requested
