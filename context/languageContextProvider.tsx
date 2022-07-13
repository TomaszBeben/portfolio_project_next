import { ReactNode, useState } from "react"
import {LanguageContext}  from './languageContext'

type Props = {
  children: ReactNode
}

type Tvalue = {
  test: string,
  setTest: ((arg: string) => void) | null,
}


export const LanguageProvider = ({children}: Props) => {
const [test, setTest] = useState<string>('test')
  const value: Tvalue= {
    test,
    setTest
  }

  return(
    <>
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
    </>
  )
}