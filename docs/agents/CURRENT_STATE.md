# Current state (handoff for new agents)

**Updated:** 2026-05-27  
**Read this first** if you have no prior chat context.

---

## Live site

| Item | Value |
|------|--------|
| URL | https://iconoclastaud.io/gift-for-alif/ |
| Status | **Live** (HTTP 200) |
| Repo | https://github.com/shahzebqazi/sarir-e-khamma |
| Branch | `main` |

---

## What exists today

| Route | Status |
|-------|--------|
| `/` | Landing — baatin/zaahir, tagline |
| `/sessions` | Program copy + portrait |
| `/about` | Bio + Connect (2× Instagram, YouTube, Threads, Spotify) |
| `/ideas` | Excalidraw editor (client-only, large bundle) |
| `/glossary` | Trilingual terms + poets; search filter |

**Not built yet** (see handoffs):

- `/testimonials` — [HANDOFF_TESTIMONIALS.md](../handoffs/HANDOFF_TESTIMONIALS.md)
- Mobile-first polish — [HANDOFF_VIEWPORTS.md](../handoffs/HANDOFF_VIEWPORTS.md)

---

## Deploy (important)

**Preferred:** build on Mac (or CI runner with enough RAM), rsync `build/` to droplet.

```bash
npm run build
rsync -avz --delete -e "ssh -i ~/.ssh/sarir_e_khamma_deploy" \
  build/ root@137.184.161.182:/opt/iconoclast-public/www/gift-for-alif/
```

Or: `bash scripts/deploy-from-mac.sh` (if present).

**On-server `npm run build` often fails (exit 137 / OOM)** on Droplet B — Excalidraw + Vite client build needs more RAM than the droplet has without swap. Node 22 and git clone **are** on the server at `/opt/iconoclast-public/sarir-e-khamma`; web root is `/opt/iconoclast-public/www/gift-for-alif/`.

- Do **not** use GitHub **Deploy keys** (wrong direction).
- Do **not** need Actions secret `DEPLOY_SSH_KEY` for current workflow.
- CI (`.github/workflows/ci.yml`) only verifies `npm run build` on push.

Full detail: [DEPLOY.md](DEPLOY.md).

---

## Content sources

| Data | Location |
|------|----------|
| Artist links | `src/lib/data/about-links.ts` |
| Sarir glossary terms | `src/lib/data/sarir-terms.ts` |
| Ghazal terms (generated) | `src/lib/data/glossary-terms.ts` ← `npm run import:glossary` |
| Poets | `src/lib/data/poets.ts` |
| Ghazal archive upstream | [kashmiri-language-poetry](https://github.com/shahzebqazi/kashmiri-language-poetry) `legacy/` |

---

## Local workspace notes

- Clone path: `~/Git/sarir-e-khamma`
- SSH deploy key (operator): `~/.ssh/sarir_e_khamma_deploy` → `root@137.184.161.182`
- `static/images/alif-sessions-cutout.png` — sessions aside portrait (Alif cutout)
- `.npmrc`: `legacy-peer-deps=true` (Vite 8 + React plugin)

---

## Suggested next tasks (priority)

1. **Testimonials page** — handoff ready, copy included
2. **iPhone / mobile layout** — handoff ready
3. Commit any pending `docs/` + agent doc updates if not yet on `origin/main`

---

## Verify before closing work

```bash
npm run check
npm run build
curl -sI https://iconoclastaud.io/gift-for-alif/ | head -1
```

See [VERIFY.md](VERIFY.md).
