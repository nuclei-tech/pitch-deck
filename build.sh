#!/bin/bash
set -e

DIST="dist"
rm -rf "$DIST"
mkdir -p "$DIST"

# Copy HTML, CSS, JS
cp index.html deck.css deck.js "$DIST/"

# Copy all image assets
cp *.png *.jpeg "$DIST/" 2>/dev/null || true

# Minify CSS (if csso available), otherwise just copy
if command -v csso &>/dev/null; then
  csso deck.css -o "$DIST/deck.css"
fi

echo "Build complete → $DIST/"
ls -lh "$DIST/"
