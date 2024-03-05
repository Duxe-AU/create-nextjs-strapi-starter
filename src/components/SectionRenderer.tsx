import Hero from "./Hero";
import TextImageSplit from "./TextImageSplit";
import ColumnLayout from "./ColumnLayout";
import getPageContent from "@/api/getPageContent";

type SectionRendererProps = {
  slug: string;
}

export default async function SectionRenderer({ slug, }: SectionRendererProps) {
  const page = await getPageContent(slug, {
    populate: {
      sections: {
        on: {
          "element.hero": { populate: ["backgroundImage", "cta"] },
          "element.text-image-split": { populate: ["content", "image", "direction"] },
          "layout.columns": { populate: "items.content" },
        }
      }
    }
  });

  return (page?.data?.[0]?.attributes?.sections ?? [])
    .map(({ __component, id, ...props }) => {
      switch(__component) {
        case "element.hero":
          return <Hero key={id} {...props} />
        case "element.text-image-split":
          return <TextImageSplit key={id} {...props} />
        case "leyout.columns":
          return <ColumnLayout key={id} {...props} />
        default:
          return null;
      }
    });
}
