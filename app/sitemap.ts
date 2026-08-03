import type { MetadataRoute } from "next";
import { getAllStores } from "@/lib/stores";

// Canonical production host. Read from the environment when present, but trim
// whitespace and strip trailing slashes first — a stray newline on a Vercel env
// var silently corrupts every absolute URL in the sitemap.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.shopbestplaza.com"
).replace(/\/+$/, "");

// This app is `output: "export"`, so metadata routes must render at build time.
export const dynamic = "force-static";

// `trailingSlash: true` in next.config.ts — every <loc> ends in "/" so no URL
// in the sitemap eats a 308 before it resolves.
function url(path: string): string {
  return `${SITE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), changeFrequency: "monthly", priority: 1 },
    { url: url("/stores/"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/about/"), changeFrequency: "yearly", priority: 0.7 },
    { url: url("/contact/"), changeFrequency: "yearly", priority: 0.7 },
  ];

  // Store detail pages are prerendered from in-repo data (lib/stores.ts) via
  // generateStaticParams, so enumerating them here stays in sync with the build.
  const storeRoutes: MetadataRoute.Sitemap = getAllStores().map((store) => ({
    url: url(`/stores/${store.slug}/`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...storeRoutes];
}
