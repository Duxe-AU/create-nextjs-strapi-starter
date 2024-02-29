import { PageType } from "@/lib/types/common";
import { axiosClient } from "@/lib/utils/api";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  if (params.slug == "not-found") notFound();

  return <div>My Post: {params.slug}</div>
}

export const generateStaticParams = async () => {
  const { data: { data = [] }} = await axiosClient.get("/pages");

  return data.length > 0
    ? data
        .map(({ attributes: { slug }}: PageType) => ({ slug }))
        .filter(({ slug }: { slug: string }) => slug !== "/")
    : [{ slug: "not-found" }];
}