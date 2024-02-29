import { StrapiImageType } from "../types/strapi";

export const mapImageUrl = (data: StrapiImageType) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

  return `${baseUrl}${data.data.attributes.url}`;
}

export const getImageData = (data?: StrapiImageType): [string | null, string] => {
  if (data?.data == null) return [null, ""];

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

  return [`${baseUrl}${data.data.attributes.url}`, data.data.attributes.alternativeText];
}