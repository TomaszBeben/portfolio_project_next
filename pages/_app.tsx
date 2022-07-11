import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { LanguageProvider } from '../context/languageContextProvider'

import '../styles/globals.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ChakraProvider>
  )
}

export default MyApp
