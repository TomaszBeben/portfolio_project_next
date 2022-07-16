import { useState } from "react";
import  {useLanguage}  from "../context/languageContext"

const urlPL: string = 'http://localhost:3000/api/languages/pl'
const urlEN: string = 'http://localhost:3000/api/languages/en'

const Setting = () => {
  const {languageObj, setLanguageObj} = useLanguage()
  const [language, setLanguage] = useState<string> (urlPL)
  console.log(languageObj);

  return (
    <>
    <button onClick={() => setLanguage(urlEN ? urlEN : urlPL)}>EN</button>
    <div></div>
    <button onClick={() => console.log(languageObj)}>log</button>
    </>
  )
}

export default Setting