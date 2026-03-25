#!/usr/bin/env bash
# Launches @modelcontextprotocol/server-github with a PAT from env (no secrets in mcp.json).
# Order matches scripts/safe-github-push.sh plus GITHUB_PERSONAL_ACCESS_TOKEN for MCP-native setups.
set -euo pipefail
token="${GITHUB_PERSONAL_ACCESS_TOKEN:-${GITHUB_TOKEN:-${GH_TOKEN:-${Github:-}}}}"
if [[ -z "${token}" ]]; then
  echo "GitHub MCP: set GITHUB_PERSONAL_ACCESS_TOKEN, GITHUB_TOKEN, GH_TOKEN, or Github (Paperclip)." >&2
  exit 1
fi
export GITHUB_PERSONAL_ACCESS_TOKEN="${token}"
exec npx -y @modelcontextprotocol/server-github "$@"
