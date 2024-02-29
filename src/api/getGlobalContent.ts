import { cache } from "react";
import { axiosClient } from "../lib/utils/api";
import { GlobalType } from "@/lib/types/common";

const getGlobalContent = cache(async (params: {}) => {
  try {
    const { data } = await axiosClient.get<GlobalType>("/global", {
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
});

export default getGlobalContent;