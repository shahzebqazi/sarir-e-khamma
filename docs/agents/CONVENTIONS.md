# Conventions

## Base path

```svelte
import { base } from '$app/paths';
<a href="{base}/sessions">Sessions</a>
```

Nav in `SiteShell.svelte` already handles `base`. New routes: add to `nav` array there.

## Svelte 5

- Use runes: `$props()`, `$state()`, `$derived()` — not legacy `export let`.
- Snippets for `SiteShell` children.
- Page-specific styles: scoped `<style>` in `+page.svelte`.

## Content

- Copy, links, lists → `src/lib/data/*.ts`
- Types → `src/lib/types/` when shared

## Design tokens (`src/app.css`)

| Token | Use |
|-------|-----|
| `--bg` / `--bg-deep` | Terracotta background |
| `--text` | White body |
| `--accent` | Black subheads (`.subhead-accent`) |
| `--font-script` | Great Vibes titles |
| `--font-body` | Montserrat / Inter |
| `--font-urdu` | Noto Nastaliq Urdu (glossary RTL) |

## External links

```html
target="_blank" rel="noopener noreferrer"
```

## Dependencies

- Do not bump packages unless the task requires it.
- `.npmrc` uses `legacy-peer-deps=true` (Vite 8 + React plugin peers).

## Commits

Only commit when the user asks. Match existing terse commit style.
