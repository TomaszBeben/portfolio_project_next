import React from 'react'
import { Select } from '@chakra-ui/react'

const LanguageSelect = () => {
  return (
    <Select placeholder='Language'>
      <option value='PL'>PL</option>
      <option value='EN'>EN</option>
    </Select>
  )
}

export default LanguageSelect