import { ReactNode, useState, useEffect } from "react"
import { LanguageContext } from './languageContext'
import { fetchLanguageData } from './fetchLanguageData'
import { Tvalue } from "./languageContext"

type Props = {
  children: ReactNode
}

export const LanguageProvider = ({ children }: Props) => {
 const [languageObj, setLanguageObj] = useState<any>()
 console.log(languageObj);

 useEffect(() => {
  fetchLanguageData( 'http://localhost:3000/api/languages/pl', setLanguageObj)
 },[])

  return (
    <>
      <LanguageContext.Provider value={{languageObj, setLanguageObj}}>
        {children}
      </LanguageContext.Provider>
    </>
  )
}