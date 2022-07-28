import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Dashboard from '../components/dashboard/Dashboard'
import { LanguageProvider } from '../context/language/languageContextProvider'
import { useRouter } from 'next/router'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.pathname === ('/authentication/login' || '/authentication/logout' || '/authentication/register')) {
    return (
      <ChakraProvider>
        <LanguageProvider>
          <Component {...pageProps} />
        </LanguageProvider>
      </ChakraProvider>
    )
  }

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
