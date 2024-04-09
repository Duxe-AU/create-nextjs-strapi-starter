import { PageType } from "@/lib/types/common";
import { StrapiCollectionType } from "@/lib/types/strapi";
import { axiosClient } from "@/lib/utils/api";
import { concatURL } from "@/lib/utils/url";
import { MetadataRoute } from "next";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: { data: pages } } = await axiosClient.get<StrapiCollectionType<PageType>>("/pages");

  return pages.map(({ attributes: { pagePath, updatedAt } }) => ({
    url: concatURL(baseURL, pagePath),
    lastModified: updatedAt,
    priority: 1,
  })).concat([
    // Add other custom routes here manually
  ]);
}