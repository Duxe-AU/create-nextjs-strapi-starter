"use client"

import { ReactNode, createContext, useContext } from "react";
import { GlobalType } from "../types/common";

type StrapiContextType = {
  global: GlobalType;
}

type StrapiProviderProps = {
  global: GlobalType;
  children: ReactNode;
}

export const StrapiContect = createContext<StrapiContextType | null>(null);

export default function StrapiProvider({ global, children }: StrapiProviderProps) {
  return (
    <StrapiContect.Provider value={{ global, }}>
      {children}
    </StrapiContect.Provider>
  )
}

export const useStrapi = () => useContext(StrapiContect);