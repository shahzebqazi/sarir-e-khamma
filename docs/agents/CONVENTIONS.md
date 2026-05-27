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

| Token / class | Use |
|---------------|-----|
| `--bg` / `--bg-deep` | Terracotta background |
| `--text` | White body |
| `--accent` | Black subheads (`.subhead-accent`) |
| `--font-script` | Great Vibes — `ScriptTitle`, `SiteShell` brand + nav |
| `--font-script-accent` | Caveat — `ScriptSubhead` |
| `--font-epigraph-accent` | Helvetica stack — bold phrase spans in `EpigraphTitle` |
| `--font-body` | Montserrat / Inter |
| `.tone-dark` / `.tone-light` | Black / white inline spans in `.prose-mixed` paragraphs |
| `--font-urdu` | Noto Nastaliq Urdu (glossary RTL) |
| `.def-line` | Poster-style `Term : defs` bullets |
| `ConnectIcon` + `ConnectLink.kind` | About social icons (`instagram` \| `youtube` \| `threads` \| `spotify`) |

## External links

```html
target="_blank" rel="noopener noreferrer"
```

## Responsive

Reuse these breakpoints when adding layout:

| Breakpoint | Use |
|------------|-----|
| `48rem` (~768px) | Stack header nav (full-width links); tighten Excalidraw at `40rem` |
| `40rem` (~640px) | Excalidraw mobile height; glossary term-card two-column defs |
| `56rem` (~896px) | `PageGrid` main + portrait aside side-by-side (~28rem column) |

## Portrait assets (`static/images/`)

| File | Use |
|------|-----|
| `alif-sessions-cutout.png` | Source / archive (orange background) |
| `alif-sessions-cutout-transparent.png` | **Live UI** — `AlifPortraitAside` (blend with `--bg`) |

Mobile: nav links use `min-height: 2.75rem` (44px tap target); prose blocks `max-width: 52ch`; glossary search `width: 100%`.

## Dependencies

- Do not bump packages unless the task requires it.
- `.npmrc` uses `legacy-peer-deps=true` (Vite 8 + React plugin peers).

## Commits

Only commit when the user asks. Match existing terse commit style.
