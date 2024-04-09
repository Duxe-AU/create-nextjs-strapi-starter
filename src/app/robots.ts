import { PageType } from "@/lib/types/common";
import { StrapiCollectionType } from "@/lib/types/strapi";
import { axiosClient } from "@/lib/utils/api";
import { MetadataRoute } from "next";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;

export default async function robots(): Promise<MetadataRoute.Robots> {
  const { data: { data: pages } } = await axiosClient.get<StrapiCollectionType<PageType>>("/pages");

  return {
    rules: {
      userAgent: "*",
      allow: pages.map(({ attributes: { pagePath } }) => pagePath).concat([
        // Add other custom routes here manually
      ])
    },
    sitemap: `${baseURL}/sitemap.xml`,
  }
}