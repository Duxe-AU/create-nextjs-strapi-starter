import { LinkType } from "@/lib/types/common";
import { StrapiImageType } from "@/lib/types/strapi";
import { getImageData } from "@/lib/utils/strapi";
import Image from "next/image";

export type HeroProps = {
  backgroundImage?: StrapiImageType;
  headline?: string;
  message?: string;
  cta?: LinkType;
  textVariant?: "light" | "dark";
}

export default function Hero({
  backgroundImage,
  headline,
  message,
  textVariant = "light",
}: HeroProps) {
  const [imageSrc, alt] = getImageData(backgroundImage);
  const textColor = textVariant === "light" ? "!text-white" : "";

  return (
    <section className={`${textColor} w-full mx-auto h-screen max-h-[800px] relative`}>
      {/* Background Image */}
      {imageSrc && <Image
        src={imageSrc}
        alt={alt}
        fill
        className="absolute top-0 left-0 object-cover"
      />}

      <div className="h-full flex items-center relative container">
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-headline">{headline}</p>
          <br />
          <p>{message}</p>
        </div>
        <div className="flex-1"></div>
      </div>
    </section>
  )
}
