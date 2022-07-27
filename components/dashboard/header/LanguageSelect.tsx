import React from 'react'
import { useLanguage } from '../../../context/language/languageContext'
import { Select } from '@chakra-ui/react'

const PlPath = 'http://localhost:3000/api/languages/pl'
const EnPath = 'http://localhost:3000/api/languages/en'

const LanguageSelect = () => {
  const {  setLanguagePath, languagePath } = useLanguage()
  return (
    <>
    <Select value={languagePath} onChange={(e) => setLanguagePath(e.target.value)}>
      <option value={PlPath}>PL</option>
      <option value={EnPath}>EN</option>
    </Select>
    </>
  )
}

export default LanguageSelect