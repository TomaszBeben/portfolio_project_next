import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type Tvalue = {
  test: string,
  setTest: ((arg: string) => void) | null,
}


const languageContextDefaultValue: Tvalue = {
  test: '',
  setTest: null
}

export const LanguageContext = createContext<Tvalue>(languageContextDefaultValue)

export const useLanguage = () => {
  return useContext(LanguageContext)
}