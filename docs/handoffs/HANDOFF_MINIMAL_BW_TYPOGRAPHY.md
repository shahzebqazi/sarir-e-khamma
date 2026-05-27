# Handoff: Minimal B&W typography prompt

**Status:** Reference (design prompt — not a pending implementation)

## Goal

Apply a **strict monochromatic** layout spec: Playlist Script for main headings, Caveat for subheadings and nav/menu, web-safe body text. Use this file as the operator or agent prompt when building a standalone page, prototype, or a future B&W variant of site chrome.

## Read first

- [docs/agents/CONVENTIONS.md](../agents/CONVENTIONS.md) — current tokens (`--font-script`, `--font-script-accent`, `--font-nav-menu`)
- `src/app.css`, `src/app.html`
- `src/lib/components/SiteShell.svelte` — nav structure and active state

**Note:** Production site uses terracotta background and mixed tones; this prompt describes a **pure #000 / #FFF** aesthetic. Map tokens deliberately if porting into `app.css`.

---

## Agent prompt (copy from here)

Create a single-file HTML page with embedded `<style>` only—no external CSS files except Google Fonts for Caveat. The page must be semantic, extremely minimal, and strictly monochromatic: pure black (`#000000`) on pure white (`#FFFFFF`). No grays, shadows, gradients, decorative borders, or modern CSS bloat. The layout should feel functional and early-web: structure, typography, and whitespace only.

### Typography (apply exactly)

| Element | Font | Source |
|--------|------|--------|
| **H1, H2** (main headings) | `'Playlist Script', cursive` | Local `@font-face` (assume font files are in the project; document expected paths in a comment) |
| **H3, H4** (subheadings) | `'Caveat', cursive` | Google Fonts (`@import` or `<link>` in `<head>`) |
| **Navigation / menu bar** (`<nav>` links, `<ul>/<li>` items) | `'Caveat', cursive` | Same Google Fonts load as H3/H4 |
| **Body** (`<p>`, lists, etc.) | System stack only, e.g. `Georgia, 'Times New Roman', serif` or `Arial, Helvetica, sans-serif` | No custom webfont — contrast with script/handwritten headings |

- Set `font-family` on `h1, h2`, `h3, h4`, and `nav a` (or `nav`) explicitly; do not rely on inheritance alone for headings vs menu.
- All headings and nav text: `color: #000000`.

### Color & styling

- Background: `#FFFFFF`. Default text: `#000000`.
- Menu: semantic `<nav>` with a plain `<ul>/<li>` list (horizontal or vertical). Links must be black — remove default link blue and underlines unless used for active state.
- **Active/current page** menu item: clearly distinct via **inverted** styling (`background: #000000; color: #FFFFFF`) **or** a stark black underline/border — one approach, applied consistently.
- No `box-shadow`, `filter`, opacity tricks, or pseudo-decorative effects.

### Structure

Include at minimum:

- `<header>` with site title (H1)
- `<nav>` with several links (one marked active, e.g. `aria-current="page"` or a class)
- `<main>` with at least one H2, H3, H4, and body paragraphs
- Simple `<footer>`

### Deliverable

One complete `.html` file with:

1. Google Fonts link/import for Caveat
2. `@font-face` block for Playlist Script (placeholder paths OK)
3. Minimal reset/normalize for links and lists only
4. Brief HTML comment listing font files expected for Playlist Script

Keep CSS under ~80 lines where possible; no frameworks, no preprocessors.

---

## Short prompt (one paragraph)

Build a single-file semantic HTML page with embedded CSS: strict `#000` on `#FFF` only, no grays or effects. H1/H2 use local `@font-face` **Playlist Script**; H3, H4, and all **nav/menu** items use **Caveat** from Google Fonts; body uses a web-safe serif or sans-serif stack. Nav is an unstyled `<ul>/<li>` with black links; active item is inverted (black bg, white text) or a heavy black underline. Include header, nav, main (H2–H4 + paragraphs), footer. Minimal CSS, early-web aesthetic.

---

## If integrating into Sarir (SvelteKit)

| Prompt element | Suggested mapping |
|----------------|-------------------|
| H1/H2 Playlist Script | New `--font-heading-main` + `@font-face` in `app.css` / `static/fonts/` |
| H3/H4 + nav Caveat | Reuse or narrow `--font-script-accent`; align `--font-nav-menu` with Caveat if operator approves |
| B&W palette | Separate layout class (e.g. `.tone-bw`) — do not replace terracotta site-wide without operator sign-off |
| Active nav | Match `SiteShell` `aria-current` / existing active link pattern |

## Verify (when implemented)

- H1/H2 render Playlist Script; H3/H4 and nav render Caveat
- No link blue; active nav state visible at a glance
- Only `#000` and `#FFF` in computed styles for the B&W scope
- `npm run check` && `npm run build` if changes land in `src/`

## Do not

- Change production palette or nav fonts without operator approval
- Add grayscale, shadows, or gradients to satisfy “minimal” spec
- Commit font files with unclear licensing — confirm Playlist Script rights first
