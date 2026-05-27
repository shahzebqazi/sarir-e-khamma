# Handoff: Mobile-first layout (iPhone)

**Status:** Pending

## Goal

Ensure the site works on desktop but **prioritize iPhone mobile** — readable nav, typography, touch targets, sessions portrait layout, glossary cards, and Ideas/Excalidraw viewport.

## Read first

- [docs/agents/ARCHITECTURE.md](../agents/ARCHITECTURE.md)
- `src/app.css`, `src/lib/components/SiteShell.svelte`, `PageGrid.svelte`
- `src/routes/sessions/+page.svelte`, `glossary/+page.svelte`, `ideas/+page.svelte`

## Constraints

- Keep terracotta palette and script titles
- No new dependencies unless required for layout
- Test at widths: **390×844** (iPhone 14/15), **375×667** (SE), and **1280+** desktop
- Run `npm run check` when done

## Tasks

1. **Global** — Review `--space`, font sizes, `max-width`; avoid horizontal scroll at 320–390px.
2. **Header / nav** — Mobile: nav wraps or stacks cleanly; tap targets ≥ 44px; brand + links don’t overlap.
3. **Sessions** — Portrait + text: stack on narrow viewports (portrait below or above copy per design); no overflow/clipped image.
4. **Glossary** — Search/filter input full width; term cards readable; Urdu RTL doesn’t break layout.
5. **About / Home** — Comfortable line length (`max-width` on prose).
6. **Ideas** — Excalidraw container `min-height` usable on mobile; no double scroll traps.
7. **Document** — Add brief notes to `docs/agents/CONVENTIONS.md` under a “Responsive” bullet if you introduce breakpoints worth reusing.

## Verify

- DevTools device mode: iPhone SE + iPhone 15 Pro
- No layout shift breaking footer email link
- `npm run build` succeeds

## Do not

- Redesign color system or replace fonts
- Add testimonials or unrelated features in this handoff
