import { Dispatch, SetStateAction } from "react";
import axios from "axios"
import { Tvalue } from "./languageContext";

export const fetchLanguageData = (url: string, setLanguageObj: Dispatch<SetStateAction<Tvalue>>) => {
  axios.get(url)
    .then(({data}) => {
      setLanguageObj(data)
    }).catch((err) => {
      console.log(err);
    })
}