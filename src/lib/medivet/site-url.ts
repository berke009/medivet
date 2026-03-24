/**
 * Canonical public site URL for metadata, Open Graph, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL on Vercel to the production domain (no trailing slash).
 * Falls back to VERCEL_URL on Vercel previews, then a placeholder for local builds.
 */
export function getMedivetSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }
  return "https://medivet.example.com";
}
