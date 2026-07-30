#!/bin/bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PATCH_DIR="$ROOT/scripts/_sidebar_patches"
cp "$PATCH_DIR/sidebars.js" "$ROOT/sidebars.js"
cp "$PATCH_DIR/sidebars-es.js" "$ROOT/sidebars-es.js"
chown "$(logname 2>/dev/null || echo miguel):staff" "$ROOT/sidebars.js" "$ROOT/sidebars-es.js" 2>/dev/null || true
echo "Sidebars updated."
