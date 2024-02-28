import { cache } from "react";
import { axiosClient } from "../lib/utils/api";

const getGlobalContent = cache(async (params: {}) => {
  try {
    const { data } = await axiosClient.get("/global", {
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
});

export default getGlobalContent;