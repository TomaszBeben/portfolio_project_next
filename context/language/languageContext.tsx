import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { languageApiType } from "../../types/languageApiType";

export type Tvalue = {
  languageObj: languageApiType,
  setLanguageObj?: Dispatch<SetStateAction<languageApiType>>,
  languagePath: string,
  setLanguagePath?: Dispatch<SetStateAction<string>>,
}

const languageContextDefaultValue: Tvalue = {
  languageObj: {
    sidebar: [
      {name: ''}
    ]
  },
  languagePath: 'http://localhost:3000/api/languages/pl',
  setLanguageObj: () => Object,
  setLanguagePath: () => ''
}

export const LanguageContext = createContext<Tvalue>(languageContextDefaultValue)

export const useLanguage = () => {
  return useContext(LanguageContext)
}