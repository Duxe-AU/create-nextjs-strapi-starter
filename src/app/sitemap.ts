import { MetadataRoute } from "next";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseURL}/the-core`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseURL}/success-stories`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseURL}/events`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseURL}/faqs`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseURL}/contact`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ]
}