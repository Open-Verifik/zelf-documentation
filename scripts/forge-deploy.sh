#!/usr/bin/env bash
# Forge deploy script: static site only — no npm install or build on the server.
set -euo pipefail

cd /home/forge/documentation.zelf.world
git pull origin "${FORGE_SITE_BRANCH:-main}"

if [[ ! -f build/index.html ]]; then
	echo "ERROR: build/index.html missing after git pull. Run npm run build:release locally and push build/." >&2
	exit 1
fi

echo "Static docs deploy OK: $(git rev-parse --short HEAD)"
