# Medivet server environment (Vercel / Node)

This project’s **server-only** configuration for Medivet API routes. None of these keys should be exposed as `NEXT_PUBLIC_*`.

## Used by API routes

| Variable | Required for | Used in |
| --- | --- | --- |
| `RESEND_API_KEY` | Sending email via [Resend](https://resend.com) | `POST /api/medivet/contact`, `POST /api/medivet/appointments` |
| `MEDIVET_RESEND_FROM` | Verified sender address (e.g. `Medivet <hello@yourdomain.com>`) | Same |
| `MEDIVET_CONTACT_TO` | Inbox for **consultation** form submissions | `POST /api/medivet/contact` |
| `MEDIVET_APPOINTMENTS_TO` | Inbox for **appointment** requests | `POST /api/medivet/appointments` |

If any of the above are missing, those POST routes respond with **503** and a short JSON error (by design for local/staging without mail).

## Blog / CMS (filesystem)

| Mechanism | Notes |
| --- | --- |
| `content/medivet-blog/*.json` | Source posts shipped with the repo. `GET /api/medivet/blog` and `GET /api/medivet/blog/[slug]` read this directory at **runtime** via `process.cwd()`. |

On Vercel, ensure the deployment includes the `content/` tree (normal Git deploy does). No env vars are required for the JSON blog unless you later swap in a database or headless CMS.

## Client / `NEXT_PUBLIC_*`

| Variable | Required for | Used in |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for **metadata**, Open Graph `og:url`, and **JSON-LD** `url` (no trailing slash, e.g. `https://www.medivet.com`) | `src/lib/medivet/site-url.ts` → `layout.tsx`, `json-ld.tsx` |

If unset, production builds on Vercel still pick up `https://${VERCEL_URL}` automatically; local dev falls back to `https://medivet.example.com` until you set `NEXT_PUBLIC_SITE_URL` in `.env.local`.

Current Medivet **API** handlers do **not** read other `NEXT_PUBLIC_*` variables.

## Standard Node / Next

- `NODE_ENV` — set by Next (`development` / `production`). Do not rely on it for secrets.

## Vercel project (dashboard)

1. **Import** the Git repo (`berke009/medivet` or your fork) in Vercel; framework **Next.js** is auto-detected.
2. **Node:** use **20.x** (or newer matching `package.json` → `engines.node`). Vercel reads `engines` for the default runtime.
3. **Build:** default `next build` / output `.next` — no custom `vercel.json` required unless you add redirects or regions later.
4. **Environment variables** (Production + Preview as needed):

   | Name | Suggested scope | Notes |
   | --- | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | Production | Production apex/www URL, no trailing slash |
   | `RESEND_API_KEY` | Production (Preview optional) | Required for live contact/appointment email |
   | `MEDIVET_RESEND_FROM` | Same | Verified domain in Resend |
   | `MEDIVET_CONTACT_TO` | Same | |
   | `MEDIVET_APPOINTMENTS_TO` | Same | |

5. After the first production deployment, record the **live URL** in a comment on the parent website epic (see project task checklist).

## Local development

Copy `.env.example` to `.env.local` and fill in Resend values to exercise `POST` routes end-to-end.
