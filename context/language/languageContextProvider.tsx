import { ReactNode, useState, useEffect } from "react"
import { LanguageContext } from './languageContext'
import { fetchLanguageData } from './fetchLanguageData'

type Props = {
  children: ReactNode
}

export const LanguageProvider = ({ children }: Props) => {

  const [languagePath, setLanguagePath] = useState<string> ('http://localhost:3000/api/languages/pl')
  const [languageObj, setLanguageObj] = useState<any> ()
  console.log(languagePath);

 useEffect(() => {
  fetchLanguageData( languagePath, setLanguageObj)
 },[languagePath])

  return (
    <>
      <LanguageContext.Provider value={{languageObj, setLanguageObj, setLanguagePath}}>
        {children}
      </LanguageContext.Provider>
    </>
  )
}