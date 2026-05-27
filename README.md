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

## Deploy (droplet — git clone)

Production is **Droplet B** (`137.184.161.182`). Caddy serves static files from `/opt/iconoclast-public/www/gift-for-alif/`. No GitHub Actions SSH secret or deploy keys are required.

### First time (on the server)

```bash
ssh root@137.184.161.182
curl -fsSL https://raw.githubusercontent.com/shahzebqazi/sarir-e-khamma/main/scripts/server-first-install.sh | bash
```

Or clone and run locally on the droplet:

```bash
ssh root@137.184.161.182
git clone https://github.com/shahzebqazi/sarir-e-khamma.git /opt/iconoclast-public/sarir-e-khamma
bash /opt/iconoclast-public/sarir-e-khamma/scripts/server-first-install.sh
```

That installs Node 22 (if missing), clones the repo, builds, and copies `build/` into `www/gift-for-alif/`.

### Updates

```bash
ssh root@137.184.161.182
bash /opt/iconoclast-public/sarir-e-khamma/scripts/deploy-on-server.sh
```

### Optional: deploy from your Mac

```bash
ssh root@137.184.161.182 'bash /opt/iconoclast-public/sarir-e-khamma/scripts/deploy-on-server.sh'
```

## CI

GitHub Actions only verifies `npm run build` on push/PR (`.github/workflows/ci.yml`). Deploy is manual on the droplet via `git pull`.

## License

MIT — see [LICENSE](LICENSE).
