import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: ["Applebot", "Bingbot", "Googlebot"],
      allow: "/",
    },
    sitemap: "https://hariharasudhan.vercel.app/sitemap.xml",
  }
}
