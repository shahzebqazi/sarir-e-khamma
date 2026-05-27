# Sarir e Khamma

Gift site for creative writing sessions with Mohammad Muneem Nazir and Alif.

**Live URL:** https://iconoclastaud.io/gift-for-alif/

## Develop

```bash
npm install
npm run import:glossary
npm run dev
```

Open the dev server; routes are under the configured base path in production.

## Build & preview

```bash
npm run build
npm run preview
```

Preview serves the static `build/` output with `paths.base` `/gift-for-alif`.

## Glossary import

Ghazal terms are pulled from [kashmiri-language-poetry](https://github.com/shahzebqazi/kashmiri-language-poetry) `legacy/pages/02-ghazals.html`:

```bash
npm run import:glossary
```

Sarir terms and poet bios live in `src/lib/data/sarir-terms.ts` and `src/lib/data/poets.ts`.

## Deploy

### GitHub Actions

On push to `main`, the workflow builds and rsyncs `build/` to:

`root@137.184.161.182:/opt/iconoclast-public/www/gift-for-alif/`

Add repository secret **`DEPLOY_SSH_KEY`** (PEM private key authorized on the server). If the secret is missing, CI still runs `npm run build` but skips rsync with a warning.

### Manual rsync

```bash
npm run build
rsync -avz --delete build/ root@137.184.161.182:/opt/iconoclast-public/www/gift-for-alif/
```

## License

MIT — see [LICENSE](LICENSE).
