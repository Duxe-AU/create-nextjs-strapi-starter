import { StrapiCollectionType, StrapiDynamicZoneType, StrapiImageType, StrapiSEOType, StrapiSingleType } from "./strapi";

export type LinkType = {
  text: string;
  url: string;
  imageUrl: StrapiImageType;
}

export type PageType = {
  slug: string;
  name: string;
  navLinkText: string;
  footerLinkText: string;
  pagePath: string;
  seo: StrapiSEOType;
  sections: StrapiDynamicZoneType[];
}

export type GlobalType = StrapiSingleType<{
  seo: StrapiSEOType;
  siteName: string;
  siteLogo: StrapiImageType;
  siteLogoDark: StrapiImageType;
  header: {
    links: StrapiCollectionType<PageType>;
    brand: {
      text: string;
      logo: StrapiImageType;
      link: StrapiSingleType<PageType>;
    }
  };
  footer: {
    navLinks: LinkType[];
    termLinks: LinkType[];
  };
}>