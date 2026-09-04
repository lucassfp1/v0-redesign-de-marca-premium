import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://v0-redesign-de-marca-premium.vercel.app/sitemap.xml",
  }
}
