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
import Footer from "@/components/Footer";
import FALLBACK_SEO from "@/lib/contants/FALLBACK_SEO";
import { mapImageUrl } from "@/lib/utils/strapi";

config.autoAddCss = false;
library.add(fas);
library.add(far);
library.add(fab);

const inter = Inter({
  subsets: ["latin"],
  variable: "--app-font-sans",
});

export const metadata = async (): Promise<Metadata> => {
  const global = await getGlobalContent({ populate: ["seo", "seo.metaImage"] });

  if (!global) return FALLBACK_SEO;

  return {
    title: global.data.attributes.seo.metaTitle,
    description: global.data.attributes.seo.metaDescription,
    ...(global.data.attributes.seo.metaImage.data
      ? {
        icons: {
          icon: [mapImageUrl(global.data.attributes.seo.metaImage)],
        }
      }
      : {})
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const global = await getGlobalContent({ populate: [
    "footer.brand.link",
    "footer.brand.logo",
    "footer.links",
    "footer.termLinks",
    "header.brand.link",
    "header.brand.logo",
    "header.links",
    "seo.metaSocial.socialNetwork",
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
          <Footer global={global.data} />
        </StrapiProvider>
      </body>
    </html>
  )
}
