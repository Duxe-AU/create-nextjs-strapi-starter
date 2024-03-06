import { GlobalType } from "@/lib/types/common";
import { getImageData } from "@/lib/utils/strapi";
import { faFacebookF, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  global: GlobalType["data"];
}

export default function Footer({ global }: FooterProps) {
  const facebook = global?.attributes?.seo?.metaSocial?.find?.(({ socialNetwork }) => socialNetwork == "Facebook");
  const instagram = global?.attributes?.seo?.metaSocial?.find?.(({ socialNetwork }) => socialNetwork == "Instagram");
  const twitter = global?.attributes?.seo?.metaSocial?.find?.(({ socialNetwork }) => socialNetwork == "Twitter");
  const linkedIn = global?.attributes?.seo?.metaSocial?.find?.(({ socialNetwork }) => socialNetwork == "LinkedIn");
  const [logo, logoAlt] = getImageData(global.attributes.footer?.brand?.logo ?? global.attributes.siteLogo);

  return (
    <section className="w-full bg-slate-100 border-t border-slate-200">
      <div className="container min-h-80 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-2 justify-center items-center md:items-start">
          {global.attributes.footer?.links?.data?.map(
            ({ attributes: { navLinkText, pagePath } }) => <Link
              key={navLinkText}
              href={pagePath}
              className="hover:underline"
            >{navLinkText}</Link>
          )}
          <br />
          <div className="flex gap-4 justify-center sm:justify-start items-center">
            <p>Follow us on</p>
            {facebook && <Link href={facebook.url ?? "#"}>
              <FontAwesomeIcon icon={faFacebookF} className="text-slate-600 text-4xl" />
            </Link>}
            {instagram && <Link href={instagram.url ?? "#"}>
              <FontAwesomeIcon icon={faInstagram} className="text-slate-600 text-4xl" />
            </Link>}
            {twitter && <Link href={twitter.url ?? "#"}>
              <FontAwesomeIcon icon={faXTwitter} className="text-slate-600 text-4xl" />
            </Link>}
            {linkedIn && <Link href={linkedIn.url ?? "#"}>
              <FontAwesomeIcon icon={faLinkedin} className="text-slate-600 text-4xl" />
            </Link>}
          </div>
        </div>
        <div className="flex-1 grid place-items-center justify-center md:justify-end">
          {global.attributes.footer?.brand && <Link href={global.attributes.footer?.brand?.link?.data?.attributes?.pagePath ?? "/"}>
            {logo
              ? <Image
                src={logo}
                alt={logoAlt}
                height={0}
                width={0}
                className="h-8 w-40"
              />
              : <h2 className="pointer-events-none">{global.attributes.siteName}</h2>}
          </Link>}
        </div>
      </div>
    </section>
  )
}
