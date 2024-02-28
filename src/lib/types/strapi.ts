export type StrapiSingleType = {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    seo: StrapiSEOType;
  },
  meta: object;
}

export type StrapiImageType = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats?: string;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string;
      provider: string;
      provider_metadata?: string;
      createdAt: string;
      updatedAt: string;
    }
  }
}

export type StrapiDynamicZoneType = {
  id: string;
  __component: string;
  [key: string]: any;
}

export type StrapiPageType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  shortName: string;
  sections: StrapiDynamicZoneType[];
}

export type StrapiSEOSocialType = {
  socialNetwork: string[];
  title: string;
  description: string;
  image: StrapiImageType;
}

export type StrapiSEOType = {
  metaTitle: string;
  metaDescription: string;
  metaImage: StrapiImageType;
  metaSocial: StrapiSEOSocialType[];
  keywords: string;
  metaRobots: string;
  structuredData: {
    [key: string]: any;
  }
  metaViewport: string;
  canonicalUrl: string;
}