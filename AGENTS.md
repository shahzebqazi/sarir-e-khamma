# AGENTS.md — sarir-e-khamma

Entry point for AI agents. **Fresh context?** Read **[docs/agents/CURRENT_STATE.md](docs/agents/CURRENT_STATE.md)** first.

**Site:** https://iconoclastaud.io/gift-for-alif/ (**live**)  
**Repo:** https://github.com/shahzebqazi/sarir-e-khamma  
**Contact:** `Sarirekhamma.alif@gmail.com`

---

## Read first

| Doc | When |
|-----|------|
| **[docs/agents/CURRENT_STATE.md](docs/agents/CURRENT_STATE.md)** | **No prior chat — start here** |
| [docs/agents/README.md](docs/agents/README.md) | Full agent doc index |
| [docs/agents/CONVENTIONS.md](docs/agents/CONVENTIONS.md) | Svelte 5, base path, styling |
| [docs/agents/VERIFY.md](docs/agents/VERIFY.md) | Before you finish |
| [docs/handoffs/README.md](docs/handoffs/README.md) | Active scoped tasks |
| [docs/handoffs/HANDOFF_RULES.md](docs/handoffs/HANDOFF_RULES.md) | Branch workflow, merge, archive |
| [docs/handoffs/DONE_HANDOFFS.md](docs/handoffs/DONE_HANDOFFS.md) | Completed handoff archive |

---

## What this site is

Gift site for **Sarir e Khamma** — Mohammad Muneem Nazir (Alif): creative writing, poetry, songwriting sessions. Not Iconoclast marketing.

---

## Git and branches

| Rule | Detail |
|------|--------|
| **`main`** | Production branch — deploy only from here |
| **Handoff branch** | One `handoff/<short-name>` per scoped task; branch from `main`, merge back when done |
| **Push** | Operator may ask to push; never force-push `main` |
| **Stash** | `stash@{0}` (`wip-unrelated` on `handoff/remove-ideas-title`) — **do not** `git stash pop` blindly; it touches glossary overlays and can delete `muneem-portrait.jpg` |
| **Abandoned** | `handoff/fix-landing-copy` reintroduces agent marketing copy — **do not merge**; `main` landing is epigraph-only per [HANDOFF_BAATIN_ZAAHIR](docs/handoffs/DONE_HANDOFFS.md#2026-05-27--handoff_baatin_zaahirmd) |

---

## Quick commands

```bash
npm install
npm run import:glossary
npm run dev
npm run check
npm run build
npm run preview
bash scripts/deploy-from-mac.sh   # publish (build locally, rsync to droplet)
```

---

## Deploy

| Item | Value |
|------|--------|
| Droplet | `137.184.161.182` (Droplet B) |
| Web root | `/opt/iconoclast-public/www/gift-for-alif/` |
| **Use** | `scripts/deploy-from-mac.sh` (server `npm run build` often OOM) |

[docs/agents/DEPLOY.md](docs/agents/DEPLOY.md)

---

## On `main` now (2026-05-27)

Poster-faithful routes (landing epigraph + portrait, sessions, about, testimonials), glossary pin unlock + `/pins`, Great Vibes nav/brand, single font-token path, Ideas page without visible H1. See [CURRENT_STATE.md](docs/agents/CURRENT_STATE.md).

**Pending handoffs:** none — see [handoffs/README.md](docs/handoffs/README.md) for templates/references only.

---

## Rules

- `{base}` from `$app/paths`; never hardcode `/gift-for-alif` in `src/`
- Copy/URLs in `src/lib/data/`; sacred poster strings in `poster-copy.ts` — verbatim only
- Run `npm run build` before done (`npm run check` has known Excalidraw TS noise)
- No GitHub Deploy keys for current workflow
- Minimize scope; match terracotta design in `src/app.css`
- Follow [HANDOFF_RULES.md](docs/handoffs/HANDOFF_RULES.md) for scoped work
