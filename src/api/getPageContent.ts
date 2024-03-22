import { PageType } from "@/lib/types/common";
import { StrapiCollectionType } from "@/lib/types/strapi";
import { axiosClient } from "@/lib/utils/api";

const getPageContent = async (slug: string, params: {}) => {
  try {
    const { data } = await axiosClient.get<StrapiCollectionType<PageType>>("/pages", {
      params: {
        filters: { slug: { ["$eq"]: slug } },
        ...params,
      }
    });

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default getPageContent;