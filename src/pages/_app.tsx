import type { AppProps } from 'next/app'
import { Footer } from '../Components/Footer'
import { Header } from '../Components/Header'
import { GoTop } from '../Components/GoTop'
import { PrismicProvider } from '@prismicio/react'
import { client } from '../services/prismic'
import { ModalContextProvider } from '../context/modalContext'
import { Sidebar } from '../Components/Sidebar'

import '../globals.css'
import { SidebarContextProvider } from '../context/SidebarContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SidebarContextProvider>
      <ModalContextProvider>
      <PrismicProvider client={client} >
        <Header  />
        <Sidebar />
        <Component {...pageProps} />
        <Footer />
        <GoTop />
      </PrismicProvider>
      </ModalContextProvider>
      </SidebarContextProvider>
    </>
  )
}

export default MyApp
