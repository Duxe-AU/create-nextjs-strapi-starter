import { StrapiImageType } from "@/lib/types/strapi";
import { getImageData } from "@/lib/utils/strapi";
import { parse } from "marked";
import Image from "next/image";

type TextImageSplitProps = {
  content?: string;
  direction?: "text->image" | "image->text";
  image?: StrapiImageType;
}

export default function TextImageSplit({
  content,
  direction,
  image,
}: TextImageSplitProps) {
  const [imageUrl, imageAlt] = getImageData(image);
  let invertClass = ["order-first", "order-last"];
  invertClass = direction === "text->image"
    ? invertClass
    : invertClass.reverse();

  return (
    <section className="container h-auto py-10 lg:py-24 px-4">
      <div className="h-full w-full flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className={`flex-1 ${invertClass[0]} grid place-content-center`}>
          {content && <div className="prose" dangerouslySetInnerHTML={{ __html: parse(content, { breaks: true }) }}></div>}
        </div>
        <div className={`h-72 md:h-96 lg:h-[unset] lg:flex-1 relative ${invertClass[1]}`}>
          {imageUrl && <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
          />}
        </div>
      </div>
    </section>
  )
}
