import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hariharasudhan.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://hariharasudhan.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://hariharasudhan.vercel.app/skills",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://hariharasudhan.vercel.app/experience",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://hariharasudhan.vercel.app/projects",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    // {
    //   url: "https://hariharasudhan.vercel.app/HariharasudhanResume.pdf",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
  ]
}
