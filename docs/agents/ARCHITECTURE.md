# Architecture

## Stack

- **SvelteKit 2** + **Svelte 5** (runes) + **TypeScript**
- **Vite 8** build
- **`@sveltejs/adapter-static`** — full prerender (`entries: ['*']`)
- **Base path:** `/gift-for-alif` (`svelte.config.js` → `kit.paths.base`)

Production URL: `https://iconoclastaud.io/gift-for-alif/`

## Request flow

```
Browser → Caddy (Droplet B) → /srv/www/gift-for-alif/*.html
```

No SSR in production; static HTML + client JS.

## Routes

| Path | File | Notes |
|------|------|--------|
| `/` | `src/routes/+page.svelte` | Landing |
| `/sessions` | `src/routes/sessions/+page.svelte` | Program copy + portrait |
| `/about` | `src/routes/about/+page.svelte` | Bio + Connect links |
| `/ideas` | `src/routes/ideas/+page.svelte` | Excalidraw; `+page.ts` sets `ssr = false` |
| `/glossary` | `src/routes/glossary/+page.svelte` | Terms + poets |

Layout: `src/routes/+layout.svelte` wraps all pages in `SiteShell`.

## Excalidraw (Ideas only)

- `ExcalidrawHost.svelte` — client mount
- `ExcalidrawReact.tsx` — React wrapper for `@excalidraw/excalidraw`
- `@vitejs/plugin-react` in `vite.config.ts`
- Large client bundle; do not import on other routes

## External content

- Ghazal glossary terms: imported from [kashmiri-language-poetry](https://github.com/shahzebqazi/kashmiri-language-poetry) `legacy/pages/02-ghazals.html`
- Sarir terms / poets: hand-maintained in `src/lib/data/`

## CI

`.github/workflows/ci.yml` — `npm ci` + `npm run build` on push/PR. No deploy from Actions.
