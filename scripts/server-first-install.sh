#!/usr/bin/env bash
# One-time setup on Ubuntu 22.04 (iconoclast-public). Run as root on the droplet.
set -euo pipefail

REPO_DIR="${REPO_DIR:-/opt/iconoclast-public/sarir-e-khamma}"
REPO_URL="${REPO_URL:-https://github.com/shahzebqazi/sarir-e-khamma.git}"

if ! command -v node >/dev/null 2>&1; then
  apt-get update
  apt-get install -y ca-certificates curl git
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi

if [[ ! -d "$REPO_DIR/.git" ]]; then
  git clone "$REPO_URL" "$REPO_DIR"
fi

bash "$REPO_DIR/scripts/deploy-on-server.sh"
