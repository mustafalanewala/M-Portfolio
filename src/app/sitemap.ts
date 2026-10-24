import type { MetadataRoute } from "next"
import { SITE_URL } from "@/data/profile"

// Generated at build time, so lastmod always matches the latest deploy.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, lastModified: new Date() }]
}
