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
| [docs/handoffs/README.md](docs/handoffs/README.md) | Scoped tasks |

---

## What this site is

Gift site for **Sarir e Khamma** — Mohammad Muneem Nazir (Alif): creative writing, poetry, songwriting sessions. Not Iconoclast marketing.

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

## Pending work (handoffs)

| Task | File |
|------|------|
| Testimonials page | [HANDOFF_TESTIMONIALS.md](docs/handoffs/HANDOFF_TESTIMONIALS.md) |
| iPhone / mobile layout | [HANDOFF_VIEWPORTS.md](docs/handoffs/HANDOFF_VIEWPORTS.md) |

---

## Rules

- `{base}` from `$app/paths`; never hardcode `/gift-for-alif` in `src/`
- Copy/URLs in `src/lib/data/`
- Run `npm run check` and `npm run build` before done
- No GitHub Deploy keys for current workflow
- Minimize scope; match terracotta design in `src/app.css`
