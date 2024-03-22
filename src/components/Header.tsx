"use client"

import { GlobalType } from "@/lib/types/common";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getImageData } from "@/lib/utils/strapi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAustralSign, faBars, faEarthOceania, faExchange } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

type HeaderProps = {
  global: GlobalType["data"];
}

export default function Header({ global }: HeaderProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [logo, logoAlt] = getImageData(global.attributes.header?.brand?.logo ?? global.attributes.siteLogo);
  const pathname = usePathname();

  const toggleMenu = () => setShowMenu(val => !val);

  return (
    <section className="w-full bg-slate-100 border-b border-slate-200">
      <div className="container h-16 flex items-center justify-center md:justify-between relative px-4">
        {global.attributes.header?.brand && <Link
          className="relative z-20"
          href={global.attributes.header?.brand?.link?.data?.attributes?.pagePath ?? "/"}
          onClick={() => setShowMenu(false)}
        >
          {logo
            ? <Image
              src={logo}
              alt={logoAlt}
              height={0}
              width={0}
              className="h-8 w-40"
            />
            : <h4 className="pointer-events-none">{global.attributes.siteName}</h4>}
        </Link>}
        <div className="hidden md:flex gap-8 lg:gap-16 items-center px-4">
          {global.attributes.header?.links?.data?.map(
            ({ attributes: { navLinkText, pagePath, name } }) =>
              (name || navLinkText
                ? <Link
                  className={`${pathname == pagePath ? "font-bold" : ""}`}
                  key={navLinkText ?? name}
                  href={pagePath}
                >{navLinkText ?? name}</Link>
                : null)
            )}
        </div>
        <div className="py-2 px-4 space-x-2 bg-neutral-500 text-white rounded-xl hidden lg:block">
          <span>CLG 0.360 AUD</span>
          <FontAwesomeIcon icon={faEarthOceania} />
          <FontAwesomeIcon icon={faAustralSign} />
        </div>
        <button
          className="block md:hidden absolute right-0 z-20 p-4"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} className="text-slate-800 text-3xl" />
        </button>
        {showMenu && <div className="absolute w-full left-0 top-0 pt-20 min-h-[64px] flex md:hidden flex-col text-right bg-slate-200 gap-1 z-10">
          {global.attributes.header?.links?.data?.map(
            ({ attributes: { navLinkText, pagePath, name } }) =>
              (name || navLinkText
                ? <Link
                  className={`relative p-4 ${pathname == pagePath ? "font-bold" : ""}`}
                  key={navLinkText ?? name}
                  href={pagePath}
                  onClick={toggleMenu}
                >{navLinkText ?? name}</Link>
                : null)
            )}
        </div>}
      </div>
    </section>
  )
}
