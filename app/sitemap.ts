import { MetadataRoute } from "next"
import { cities } from "@/lib/cities"
import { services } from "@/lib/services"

const SITE_URL = "https://crawlspacesolutionsmo.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/process`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/reviews`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]

  // City + Service pages
  const cityServicePages: MetadataRoute.Sitemap = []
  for (const city of cities) {
    for (const service of services) {
      cityServicePages.push({
        url: `${SITE_URL}/${city.slug}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    }
  }

  return [...staticPages, ...cityServicePages]
}
