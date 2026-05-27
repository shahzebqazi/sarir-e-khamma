#!/usr/bin/env bash
# Run on iconoclast-public (Droplet B) after the repo is cloned.
set -euo pipefail

REPO_DIR="${REPO_DIR:-/opt/iconoclast-public/sarir-e-khamma}"
WWW_DIR="${WWW_DIR:-/opt/iconoclast-public/www/gift-for-alif}"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required. Run scripts/server-first-install.sh once, or install Node 22+." >&2
  exit 1
fi

cd "$REPO_DIR"
git pull --ff-only origin main
npm ci
npm run build
mkdir -p "$WWW_DIR"
rsync -avz --delete build/ "$WWW_DIR/"
echo "Deployed to $WWW_DIR"
