import type { AppProps } from 'next/app'
import { Footer } from '../Components/Footer'
import { Header } from '../Components/Header'
import { Widget } from '../Components/Widget'
import { PrismicProvider } from '@prismicio/react'
import { client } from '../services/prismic' 

import '../globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PrismicProvider client={client} >
        <Header  />
        <Component {...pageProps} />
        <Footer />
        <Widget />
      </PrismicProvider>
    </>
  )
}

export default MyApp
