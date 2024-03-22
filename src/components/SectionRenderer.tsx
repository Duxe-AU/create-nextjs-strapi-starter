import type { ComponentType } from "react";
import Hero from "./Hero";
import TextImageSplit from "./TextImageSplit";
import ColumnLayout from "./ColumnLayout";
import getPageContent from "@/api/getPageContent";
import type { StrapiDynamicZoneType } from "@/lib/types/strapi";

type SectionRendererProps = {
  slug: string;
  sections?: {
    queryParam: {
      [key: string]: {
        populate: string | string[];
      };
    };
    component: ComponentType;
  }[]
}

export default async function SectionRenderer({ slug, sections = [] }: SectionRendererProps) {
  const page = await getPageContent(slug, {
    populate: {
      sections: {
        on: Object.assign({
          "element.breaker-text": { populate: "message" },
          "element.hero": { populate: ["backgroundImage", "cta"] },
          "element.text-image-split": { populate: ["content", "image", "direction"] },
          "layout.columns": { populate: "items.content" },
          "layout.split-section": { populate: ["firstColumnImage", "firstColumnContent", "secondColumnImage", "secondColumnContent"] },
        }, ...((sections ?? []).map(({ queryParam }) => queryParam)))
      }
    }
  });

  if ((page?.data?.[0]?.attributes?.sections ?? []).length === 0 || page == null) return null;

  const sectionRenders = page.data[0].attributes.sections
    .reduce<(JSX.Element | StrapiDynamicZoneType)[]>((prev, { __component, id, ...props }) => {
      switch(__component) {
        case "element.hero":
          prev.push(<Hero key={id} {...props} />);
          break;
        case "element.text-image-split":
          prev.push(<TextImageSplit key={id} {...props} />);
          break;
        case "layout.columns":
          prev.push(<ColumnLayout key={id} {...props} />);
          break;
        default:
          prev.push({ __component, id, ...props });
      }

      return prev;
    }, []);

  if (sections?.length) {
    sections.forEach(({ queryParam, component }) => {
      const matchedIndex = sectionRenders.findIndex(render => {
        return (render as StrapiDynamicZoneType).__component == (Object.keys(queryParam)[0] ?? "");
      })

      if (matchedIndex != -1) {
        const Component = component;
        const { id, ...props } = sectionRenders[matchedIndex] as StrapiDynamicZoneType;
        sectionRenders[matchedIndex] = <Component key={id} {...props} />;
      }
    })
  }

  return sectionRenders as JSX.Element[];
}
