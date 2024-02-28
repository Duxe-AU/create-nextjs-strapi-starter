import { StrapiPageType } from "@/lib/types/strapi";
import { axiosClient } from "@/lib/utils/api";

const getPageContent = async <T = {}>(slug: string, params: {}) => {
  try {
    const { data } = await axiosClient.get<StrapiPageType & T>("/pages", {
      params: {
        filters: { slug: { ["$eq"]: slug } },
        ...params,
      }
    })
  } catch (error) {
    console.error(error);
  }
}

export default getPageContent;