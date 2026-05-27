# AGENTS.md — sarir-e-khamma

Static SvelteKit site at `https://iconoclastaud.io/gift-for-alif/`.

## Stack

- SvelteKit 2 + Svelte 5 + TypeScript
- `@sveltejs/adapter-static`, `paths.base: '/gift-for-alif'`
- Excalidraw on `/ideas` (client-only)

## Commands

```bash
npm install
npm run import:glossary
npm run dev
npm run build
npm run preview
```

## Deploy

**Droplet B** (`137.184.161.182`): clone to `/opt/iconoclast-public/sarir-e-khamma`, build on server, rsync output to `/opt/iconoclast-public/www/gift-for-alif/`.

```bash
bash scripts/deploy-on-server.sh   # on droplet, after first install
```

First install: `scripts/server-first-install.sh` (Node 22 + clone + deploy). No `DEPLOY_SSH_KEY` or GitHub deploy keys.

## Key paths

| Path | Role |
|------|------|
| `scripts/deploy-on-server.sh` | `git pull`, build, publish to `www/gift-for-alif/` |
| `src/lib/data/glossary-terms.ts` | Generated ghazal glossary |
| `static/images/muneem-portrait.jpg` | Sessions portrait |
