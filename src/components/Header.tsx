"use client"

import { GlobalType } from "@/lib/types/common";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getImageData } from "@/lib/utils/strapi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
    <div className="container mx-auto h-20 flex items-center justify-center lg:justify-between relative">
      {global.attributes.header?.brand && <Link
        className="relative z-10"
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
          : <p className="text-3xl pointer-events-none">{global.attributes.siteName}</p>}
      </Link>}
      <div className="hidden lg:flex gap-8 items-center px-4">
        {global.attributes.header?.links?.data?.map(
          ({ attributes: { navLinkText, pagePath } }) => <Link
            className={`${pathname == pagePath ? "font-bold" : ""}`}
            key={navLinkText}
            href={pagePath}
          >{navLinkText}</Link>
        )}
      </div>
      <button
        className="block lg:hidden absolute right-0 z-10 p-4"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} className="text-slate-800 text-3xl" />
      </button>
      {showMenu && <div className="absolute w-full left-0 top-0 pt-20 min-h-[64px] flex lg:hidden flex-col text-right bg-slate-200 gap-1">
        {global.attributes.header?.links?.data?.map(
          ({ attributes: { navLinkText, pagePath } }) => <Link
            className={`relative p-4 ${pathname == pagePath ? "font-bold" : ""}`}
            key={navLinkText}
            href={pagePath}
            onClick={toggleMenu}
          >{navLinkText}</Link>
        )}
      </div>}
    </div>
  )
}
