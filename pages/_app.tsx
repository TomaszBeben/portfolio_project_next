import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Dashboard from '../components/dashboard/Dashboard'
import { LanguageProvider } from '../context/language/languageContextProvider'

import '../styles/globals.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <LanguageProvider>
        <Dashboard>
          <Component {...pageProps} />
        </Dashboard>
      </LanguageProvider>
    </ChakraProvider>
  )
}

export default MyApp
