# Sarir e Khamma

Gift site for creative writing sessions with Mohammad Muneem Nazir and Alif.

**Live URL:** https://iconoclastaud.io/gift-for-alif/

## Develop

```bash
npm install
npm run import:glossary
npm run dev
```

## Build & preview

```bash
npm run build
npm run preview
```

Preview serves the static `build/` output with `paths.base` `/gift-for-alif`.

## Glossary import

```bash
npm run import:glossary
```

Ghazal terms come from [kashmiri-language-poetry](https://github.com/shahzebqazi/kashmiri-language-poetry). Sarir terms and poets live in `src/lib/data/sarir-terms.ts` and `src/lib/data/poets.ts`.

## Deploy

**Live:** https://iconoclastaud.io/gift-for-alif/

Build locally, rsync to Droplet B (`137.184.161.182`). On-server `npm run build` often hits OOM (Excalidraw); use:

```bash
bash scripts/deploy-from-mac.sh
```

See [docs/agents/DEPLOY.md](docs/agents/DEPLOY.md) and [docs/agents/CURRENT_STATE.md](docs/agents/CURRENT_STATE.md).

## CI

GitHub Actions only verifies `npm run build` on push/PR (`.github/workflows/ci.yml`). Deploy is manual on the droplet via `git pull`.

## Agent docs

- [AGENTS.md](AGENTS.md) — entry point for AI agents
- [docs/agents/](docs/agents/) — architecture, conventions, deploy
- [docs/handoffs/](docs/handoffs/) — scoped task prompts

## License

MIT — see [LICENSE](LICENSE).
