# Deploy

## Model

Static `build/` → Caddy serves `/opt/iconoclast-public/www/gift-for-alif/`.  
**Build locally** (Mac or CI); droplet is publish target only.

**Note:** `my-droplets/scripts/deploy-iconoclast-public.sh` rsyncs the main site with `--delete` into the same `www/` tree. That script excludes `gift-for-alif/` so a main-site deploy does not remove this app. If the live URL 404s after an iconoclast deploy, re-run `bash scripts/deploy-from-mac.sh`.

No GitHub Deploy keys. No Actions `DEPLOY_SSH_KEY` unless you switch back to CI rsync.

| Path on server | Purpose |
|----------------|---------|
| `/opt/iconoclast-public/sarir-e-khamma` | Optional git clone (pull source; build may OOM here) |
| `/opt/iconoclast-public/www/gift-for-alif/` | **Web root** (rsync target) |

## Recommended: deploy from Mac

```bash
bash scripts/deploy-from-mac.sh
```

Or manually:

```bash
npm run build
rsync -avz --delete -e "ssh -i ~/.ssh/sarir_e_khamma_deploy" \
  build/ root@137.184.161.182:/opt/iconoclast-public/www/gift-for-alif/
```

Override key: `DEPLOY_SSH_KEY_FILE=~/.ssh/other_key bash scripts/deploy-from-mac.sh`

## On-server build (often fails)

`scripts/deploy-on-server.sh` runs `git pull`, `npm ci`, `npm run build`, rsync.

**Known issue:** Vite client build (Excalidraw) is **killed with exit 137 (OOM)** on Droplet B without extra swap. Node 22 is installed; clone exists. Use Mac deploy instead, or add swap before retrying server build.

First-time server setup (installs Node, clones repo):

```bash
ssh root@137.184.161.182
bash /opt/iconoclast-public/sarir-e-khamma/scripts/server-first-install.sh
```

## Verify live

```bash
curl -sI https://iconoclastaud.io/gift-for-alif/ | head -1
```

Expect `HTTP/2 200`.

Deploy handoff archived: [DONE_HANDOFFS.md](../handoffs/DONE_HANDOFFS.md#2026-05-27--handoff_deploymd).
