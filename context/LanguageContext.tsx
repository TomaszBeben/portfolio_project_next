import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type TLanguageContext = {
  languageRoute: string;
  setLanguageRoute: Dispatch<SetStateAction<string>> | null
}

const languageContextDefaultValue: TLanguageContext = {
  languageRoute: 'http://localhost:3000/api/languages/pl',
  setLanguageRoute: null
}

export const LanguageContext = createContext<TLanguageContext>(languageContextDefaultValue)

export const useLanguage = () => {
  return useContext(LanguageContext)
}