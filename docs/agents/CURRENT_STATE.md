# Current state (handoff for new agents)

**Updated:** 2026-05-29  
**Read this first** if you have no prior chat context.

---

## Live site

| Item | Value |
|------|--------|
| URL | https://iconoclastaud.io/gift-for-alif/ |
| Status | **Live** (HTTP 200) — redeploy after pushing `main` if local `main` was ahead of production |
| Repo | https://github.com/shahzebqazi/sarir-e-khamma |
| Branch | `main` |
| Last local `main` tip | `352c8d8` (+ 6 commits through glossary pins, font deslop, nav Great Vibes, Ideas H1 removal) |

---

## What exists on `main` today

| Route | Status |
|-------|--------|
| `/` | Sacred epigraph (`EpigraphTitle`) + transparent portrait aside — **no** agent workshop lede |
| `/sessions` | Poster header + sacred body copy + portrait |
| `/about` | Poster header + intro paragraphs + Connect icons + portrait |
| `/testimonials` | W. Worst quote + nav link |
| `/ideas` | Excalidraw editor (client-only); no visible page H1 |
| `/glossary` | Trilingual terms + poets; pin unlock; search filter |
| `/pins` | Hidden facilitator pin entry (not in nav) |

---

## Routing fix (2026-05-29)

**Symptom:** Home worked; `/sessions`, `/about`, etc. returned **404** on production.  
**Cause:** Build emitted flat `sessions.html`; Caddy only tries `{path}/index.html`.  
**Fix:** `export const trailingSlash = 'always'` in `src/routes/+layout.ts`, then redeploy.

---

## Regression fix (2026-05-26) — still relevant

**Cause:** Completed handoff work lived only in **untracked files** and stash `stash@{0}: wip-unrelated` on `handoff/remove-ideas-title` — never merged to `main`. Commit `352c8d8` restored poster-faithful routes.

**Do not** `git stash pop` that stash blindly; it also touches glossary import overlays and deletes `muneem-portrait.jpg`. Prefer cherry-picking route/component files from `handoff/fix-merge-regressions` if needed.

**Do not merge** `handoff/fix-landing-copy` — it re-adds invented marketing copy (`Voice, craft, and performance…`). Poster-faithful landing is epigraph-only on `main`.

---

## Git / deploy workflow

| Step | Command |
|------|---------|
| Handoff work | `git checkout -b handoff/name` from `main` → implement → `npm run build` → merge to `main` |
| Publish | `git push origin main` then `bash scripts/deploy-from-mac.sh` |
| Archive handoff | See [HANDOFF_RULES.md](../handoffs/HANDOFF_RULES.md) → [DONE_HANDOFFS.md](../handoffs/DONE_HANDOFFS.md) |

**Preferred deploy:** build on Mac, rsync `build/` to droplet ([DEPLOY.md](DEPLOY.md)).

```bash
bash scripts/deploy-from-mac.sh
```

On-server `npm run build` often fails (exit 137 / OOM) on Droplet B — Excalidraw + Vite client build needs more RAM than the droplet has without swap.

---

## Content sources

| Data | Location |
|------|----------|
| Sacred poster strings | `src/lib/data/poster-copy.ts` |
| Artist links | `src/lib/data/about-links.ts` |
| About bridge copy | `src/lib/data/about-copy.ts` |
| Sarir glossary terms | `src/lib/data/sarir-terms.ts` |
| Ghazal terms (generated) | `src/lib/data/glossary-terms.ts` ← `npm run import:glossary` |
| Glossary import overlays | `scripts/glossary-citations.json`, `scripts/glossary-urdu-overlay.json` |
| Poets | `src/lib/data/poets.ts` |
| Pin groups | `src/lib/data/glossary-pin-groups.ts` |

---

## Local workspace notes

- Clone path: `~/Git/sarir-e-khamma`
- SSH deploy key (operator): `~/.ssh/sarir_e_khamma_deploy` → `root@137.184.161.182`
- Portrait: `static/images/alif-sessions-cutout-transparent.png` (live UI via `AlifPortraitAside`)
- Design reference PNGs: `docs/design/reference/`
- `.npmrc`: `legacy-peer-deps=true` (Vite 8 + React plugin)

---

## Active handoffs

**None** — testimonials, viewports, deploy, and content/UI work are archived in [DONE_HANDOFFS.md](../handoffs/DONE_HANDOFFS.md). Templates/references: [handoffs/README.md](../handoffs/README.md).

---

## Verify before closing work

```bash
npm run build
curl -sI https://iconoclastaud.io/gift-for-alif/ | head -1
# All routes:
for p in '' sessions about testimonials ideas glossary pins; do
  curl -sI "https://iconoclastaud.io/gift-for-alif/${p}" | head -1
done
```

See [VERIFY.md](VERIFY.md).
