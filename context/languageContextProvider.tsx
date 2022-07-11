import { ReactNode } from "react"
import {LanguageContext}  from './languageContext'

type Props = {
  children: ReactNode
}


export const LanguageProvider = ({children}: Props) => {
const test = 'test'
  const value= {
    test
  }

  return(
    <>
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
    </>
  )
}