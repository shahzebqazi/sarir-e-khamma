# Handoff: Deploy to production

**Status:** Live (2026-05-27)

## Goal

Publish latest `main` to `https://iconoclastaud.io/gift-for-alif/`.

## Recommended (Mac build + rsync)

```bash
cd ~/Git/sarir-e-khamma
bash scripts/deploy-from-mac.sh
```

Uses `~/.ssh/sarir_e_khamma_deploy` if present.

## On-server build (may OOM)

Only if droplet has enough RAM or swap:

```bash
ssh root@137.184.161.182 'bash /opt/iconoclast-public/sarir-e-khamma/scripts/deploy-on-server.sh'
```

Exit **137** during `vite build` = out of memory → use Mac deploy.

## Verify

```bash
curl -sI https://iconoclastaud.io/gift-for-alif/ | head -1
```

## Do not

- Use GitHub **Deploy keys** for this workflow
- Store private keys in the repo
