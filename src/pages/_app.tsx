/* eslint-disable react/jsx-props-no-spreading */

import { AppProps } from 'next/app'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
