import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { languageApiType } from "../types/languageApiType";

export type Tvalue = {
  languageObj: languageApiType,
  setLanguageObj?: Dispatch<SetStateAction<Tvalue | undefined>>
}

const languageContextDefaultValue: Tvalue = {
  languageObj: {
    name: '',
    route: ''
  },
  setLanguageObj: () => {},
}

export const LanguageContext = createContext<Tvalue>(languageContextDefaultValue)

export const useLanguage = () => {
  return useContext(LanguageContext)
}