import { StrapiImageType, StrapiPageType, StrapiSingleType } from "./strapi";

export type Link = {
  text: string;
  url: string;
  imageUrl: StrapiImageType;
}

export type GlobalType = StrapiSingleType & {
  attributes: StrapiSingleType["attributes"] & {
    siteName: string;
    siteLogo: StrapiImageType;
    siteLogoDark: StrapiImageType;
    header: {
      navLinks: Link[];
    };
    footer: {
      navLinks: Link[];
      termLinks: Link[];
    };
  }
}

export type PageType = StrapiSingleType & {
  attributes: StrapiSingleType["attributes"] & StrapiPageType;
}