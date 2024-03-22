import { StrapiImageType } from "@/lib/types/strapi";
import { getImageData } from "@/lib/utils/strapi";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

type MilestonesProps = {
  items?: {
    weight?: string;
    kind?: string;
    image?: StrapiImageType;
  }[];
}

export default function Milestones({ items, }: MilestonesProps) {
  return (
    <section className="w-full my-4 md:my-8 bg-neutral-500">
      <div className="container flex flex-wrap justify-center gap-4 py-12 md:py-20">
        {(items ?? []).map(({ weight, kind, image }, index) => {
          const [imageUrl, imageAlt] = getImageData(image);

          return <div key={index} className="flex-1 max-w-80 lg:max-w-[unset] flex gap-4 items-center justify-center">
            {imageUrl
              ? <Image
                src={imageUrl}
                alt={imageAlt}
                width={0}
                height={0}
                className="size-20 md:size-24"
              />
              : <FontAwesomeIcon icon={faRecycle} className="text-7xl md:text-8xl" />}
            <div>
              <h2 className="font-bold">{weight}</h2>
              <h3 className="font-bold">{kind}</h3>
            </div>
          </div>
        })}
      </div>
    </section>
  )
}
