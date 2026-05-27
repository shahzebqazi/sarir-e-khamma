#!/usr/bin/env bash
# Build locally and publish to iconoclast-public (avoids droplet OOM during vite build).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HOST="${DEPLOY_HOST:-137.184.161.182}"
USER="${DEPLOY_USER:-root}"
WWW="${DEPLOY_WWW:-/opt/iconoclast-public/www/gift-for-alif}"
KEY="${DEPLOY_SSH_KEY_FILE:-$HOME/.ssh/sarir_e_khamma_deploy}"

cd "$ROOT"
npm run build

RSYNC_SSH="ssh -o StrictHostKeyChecking=accept-new"
if [[ -f "$KEY" ]]; then
  RSYNC_SSH="ssh -i $KEY -o StrictHostKeyChecking=accept-new"
fi

rsync -avz --delete -e "$RSYNC_SSH" build/ "${USER}@${HOST}:${WWW}/"
echo "Deployed to https://iconoclastaud.io/gift-for-alif/"
