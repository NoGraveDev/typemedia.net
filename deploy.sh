#!/bin/bash
# Deploy only public site files to Cloudflare Pages
# Excludes: server.js, package*.json, .gitignore, node_modules, .git, deploy.sh

set -e
DEPLOY_DIR=$(mktemp -d)

# Copy only site files
cp -r avatars dogs seals "$DEPLOY_DIR/"
cp *.html *.css *.js *.jpg *.png "$DEPLOY_DIR/" 2>/dev/null || true
cp _headers "$DEPLOY_DIR/" 2>/dev/null || true
cp _redirects "$DEPLOY_DIR/" 2>/dev/null || true

# Remove files that should NOT be public
rm -f "$DEPLOY_DIR/server.js"
rm -f "$DEPLOY_DIR/package.json"
rm -f "$DEPLOY_DIR/package-lock.json"
rm -f "$DEPLOY_DIR/deploy.sh"

# Overwrite previously-deployed sensitive files with empty redirects
# (Cloudflare Pages caches files from old deployments by content hash)
echo '<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=/"></head></html>' > "$DEPLOY_DIR/server.js"
echo '<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=/"></head></html>' > "$DEPLOY_DIR/package.json"
echo '<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=/"></head></html>' > "$DEPLOY_DIR/package-lock.json"
echo '<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=/"></head></html>' > "$DEPLOY_DIR/.gitignore"

echo "Deploying from: $DEPLOY_DIR"
ls -la "$DEPLOY_DIR"

CLOUDFLARE_EMAIL="scribblexrb@gmail.com" \
CLOUDFLARE_API_KEY="d2b0c2d6a0548d81e9bd4785d5ee1e4de2406" \
CLOUDFLARE_ACCOUNT_ID="99c0d1111c8f056c9c0699872b05f0c3" \
npx wrangler pages deploy "$DEPLOY_DIR" --project-name typemedia-net --branch main --commit-dirty=true

rm -rf "$DEPLOY_DIR"
echo "✅ Clean deploy complete"
