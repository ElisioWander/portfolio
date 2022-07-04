import type { AppProps } from 'next/app'
import { Footer } from '../Components/Footer'
import { Header } from '../Components/Header'
import '../globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
