import type { MetadataRoute } from "next";
import { SITE_URL } from "./sitemap";

// This app is `output: "export"`, so metadata routes must render at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Absolute, not relative — crawlers ignore a relative Sitemap: directive.
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
