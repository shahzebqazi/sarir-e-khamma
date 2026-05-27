# Handoff: New static route

**Status:** Template

## Goal

Add a new prerendered page at `src/routes/<slug>/` following repo conventions.

## Checklist

- [ ] `src/routes/<slug>/+page.svelte` with `PageGrid`, `ScriptTitle`
- [ ] `<svelte:head>` title + description
- [ ] Content in `src/lib/data/<slug>.ts` if more than a few lines
- [ ] Nav entry in `SiteShell.svelte`
- [ ] Scoped styles; use `src/app.css` tokens
- [ ] `npm run check` && `npm run build`
- [ ] Preview at `{base}/<slug>.html` in production build

## Constraints

- `{base}` from `$app/paths` only
- `ssr = false` only if browser-only APIs (see Ideas route)
- External links: `rel="noopener noreferrer"`

## Examples

- Testimonials: see [DONE_HANDOFFS.md](DONE_HANDOFFS.md#2026-05-26--handoff_testimonialsmd)
