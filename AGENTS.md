# AGENTS.md — sarir-e-khamma

Static SvelteKit site for **Sarir e Khamma**, served at `https://iconoclastaud.io/gift-for-alif/`.

## Stack

- SvelteKit 2 + Svelte 5 + TypeScript
- `@sveltejs/adapter-static`, `paths.base: '/gift-for-alif'`
- Excalidraw on `/ideas` (client-only, React bridge)

## Commands

```bash
npm install
npm run import:glossary   # refresh ghazal terms from kashmiri-language-poetry
npm run dev
npm run build
npm run preview           # serves with base path
```

## Deploy

- **CI:** `.github/workflows/deploy.yml` — build + rsync to `root@137.184.161.182:/opt/iconoclast-public/www/gift-for-alif/`
- Requires GitHub secret `DEPLOY_SSH_KEY` (private key). Workflow skips rsync with a warning if unset.

## Key paths

| Path | Role |
|------|------|
| `src/lib/components/SiteShell.svelte` | Nav + footer |
| `src/lib/data/glossary-terms.ts` | Generated ghazal glossary |
| `scripts/import-glossary.mjs` | Glossary importer |
| `static/images/muneem-portrait.jpg` | Sessions portrait |

## Conventions

- Terracotta palette (`#E95D35` / `#D9532D`), white text, black accent subheads
- Script titles: Great Vibes; body: Montserrat/Inter; Urdu: Noto Nastaliq Urdu
- External links: `rel="noopener noreferrer"`, `target="_blank"`
