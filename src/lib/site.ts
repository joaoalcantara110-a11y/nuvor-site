const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nuvor.pt";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
