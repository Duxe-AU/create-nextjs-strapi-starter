import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StrapiProvider from "@/lib/providers/StrapiProvider";
import getGlobalContent from "@/api/getGlobalContent";
import Header from "@/components/Header";
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false;
library.add(fas);
library.add(far);
library.add(fab);

const inter = Inter({
  subsets: ["latin"],
  variable: "--app-font-sans",
});

export const metadata: Metadata = {
  title: "Duxe | NextJS | Strapi",
  description: "A template for building websites using NextJS and Strapi as headless CMS for content management.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const global = await getGlobalContent({ populate: [
    "footer.navLinks.imageUrl",
    "footer.termLinks.imageUrl",
    "header.brand.link",
    "header.brand.logo",
    "header.links",
    "siteLogo",
    "siteLogoDark",
  ] });

  if (global == null) return;

  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} text-base text-slate-800`}>
        <StrapiProvider global={global.data}>
          <Header global={global.data} />
          {children}
        </StrapiProvider>
      </body>
    </html>
  )
}
