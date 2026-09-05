import type { MetadataRoute } from "next"

const siteUrl = "https://v0-redesign-de-marca-premium.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/shop", "/labios", "/rosto", "/olhos", "/blush", "/best-sellers"]
  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : .8,
  }))
}
