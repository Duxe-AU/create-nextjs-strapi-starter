import { StrapiImageType } from "@/lib/types/strapi"
import { getImageData } from "@/lib/utils/strapi";
import { parse } from "marked";
import Image from "next/image";
import Markdown from "../Markdown";

type SplitSectionProps = {
  firstColumnImage?: StrapiImageType;
  firstColumnContent?: string;
  secondColumnImage?: StrapiImageType;
  secondColumnContent?: string;
}

export default function SplitSection({
  firstColumnContent,
  firstColumnImage,
  secondColumnContent,
  secondColumnImage,
}: SplitSectionProps) {
  const [firstImageUrl, firstImageAlt] = getImageData(firstColumnImage);
  const [secondImageUrl, secondImageAlt] = getImageData(secondColumnImage);
  return (
    <section className="w-full h-auto flex flex-col md:flex-row items-stretch gap-8 py-8">
      <div className="flex-1 rounded-r-3xl bg-neutral-400 relative grid place-content-center justify-end mr-8 md:mr-0">
        {firstImageUrl && <>
          <Image
            src={firstImageUrl}
            alt={firstImageAlt}
            fill
            className="object-cover absolute z-0 rounded-r-3xl"
          />
          <div className="absolute h-full w-full bg-blend-darken bg-black/50 rounded-r-3xl"></div>
        </>}

        {firstColumnContent && <Markdown className="max-w-lg p-12 md:p-16 lg:p-20 xl:p-24 *:!text-white relative">
          {firstColumnContent}
        </Markdown>}
      </div>
      <div className="flex-1 rounded-l-3xl bg-neutral-400 relative grid place-content-center justify-start ml-8 md:ml-0">
        {secondImageUrl && <>
          <Image
            src={secondImageUrl}
            alt={secondImageAlt}
            fill
            className="object-cover absolute z-0 rounded-l-3xl"
          />
          <div className="absolute h-full w-full bg-blend-darken bg-black/50 rounded-l-3xl"></div>
        </>}

        {secondColumnContent && <Markdown className="max-w-lg p-12 md:p-16 lg:p-20 xl:p-24 *:!text-white relative">
          {secondColumnContent}
        </Markdown>}
      </div>
    </section>
  )
}
