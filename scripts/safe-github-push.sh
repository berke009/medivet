#!/usr/bin/env bash
# One-shot authenticated git push when origin is https://github.com/... and the
# environment cannot prompt (Cursor/Paperclip). Does not write tokens into .git/config.
# Token: GITHUB_TOKEN, GH_TOKEN, or Paperclip CEO env Github.
set -euo pipefail
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$root"

token="${GITHUB_TOKEN:-${GH_TOKEN:-${Github:-}}}"
if [[ -z "${token}" ]]; then
  echo "Missing token: set GITHUB_TOKEN, GH_TOKEN, or Github (Paperclip)." >&2
  exit 1
fi

remote_url="$(git remote get-url origin)"
if [[ "${remote_url}" != *"github.com"* ]]; then
  echo "origin must be a github.com URL (got: ${remote_url})" >&2
  exit 1
fi

path="${remote_url#*github.com/}"
path="${path%.git}"

branch="$(git branch --show-current)"
auth_url="https://x-access-token:${token}@github.com/${path}"

export GIT_TERMINAL_PROMPT=0
git push "${auth_url}" "HEAD:refs/heads/${branch}"
git fetch origin || true
git branch --set-upstream-to="origin/${branch}" "${branch}"
