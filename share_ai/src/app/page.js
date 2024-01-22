import Image from 'next/image'
import styles from './page.module.css'
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from "@chakra-ui/react";
import { HomePage } from './pages/homePage';


const themes = {
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#1D1B20',
        fontFamily: `'Roboto', sans-serif`,
      }
    }
  },
}

export default function Home() {
  return (
    <ChakraProvider theme={themes}>
    <main>
      <HomePage />
    </main>
    </ChakraProvider>
  )
}
