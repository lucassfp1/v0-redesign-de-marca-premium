import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://v0-redesign-de-marca-premium.vercel.app",
      lastModified: new Date("2026-09-04"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
