import { useState } from "react";
import { useLanguage } from "../context/language/languageContext"
import { languageApiType } from "../types/languageApiType";

const urlPL: string = 'http://localhost:3000/api/languages/pl'
const urlEN: string = 'http://localhost:3000/api/languages/en'

const Setting = () => {
  const { languageObj, setLanguagePath } = useLanguage()
  const [language, setLanguage] = useState<string>(urlPL)
  console.log();

  return (
    <>
      <button onClick={() => setLanguagePath && setLanguagePath(urlPL)}>EN</button>
      <div></div>
      <button onClick={() => console.log(languageObj)}>log</button>
      <div></div>
      {languageObj.map((e) => {
        return(
          <div key={e.route} >{e.name}</div>
        )
      })}
    </>
  )
}

export default Setting