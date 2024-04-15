import SectionRenderer from "@/components/SectionRenderer";
import { PageType } from "@/lib/types/common";
import { StrapiCollectionType } from "@/lib/types/strapi";
import { axiosClient } from "@/lib/utils/api";
import { notFound } from "next/navigation";

export const revalidate = process.env.NEXT_PUBLIC_BUILD_SSG === "1" && process.env.NODE_ENV === "production"
  ? null
  : 0;

export default function Page({ params }: { params: { slug: string } }) {
  if (params.slug == "not-found") notFound();

  return (
    <main>
      <SectionRenderer slug={params.slug} />
    </main>
  )
}

export const generateStaticParams = process.env.NEXT_PUBLIC_BUILD_SSG === "1" && process.env.NODE_ENV === "production"
  ? async () => {
    const { data: { data } } = await axiosClient.get<StrapiCollectionType<PageType>>("/pages");

    return (data ?? []).length > 0
      ? data
          .map(({ attributes: { slug }}) => ({ slug }))
          .filter(({ slug }: { slug: string }) => slug !== "/")
      : [{ slug: "not-found" }];
  }
  : undefined