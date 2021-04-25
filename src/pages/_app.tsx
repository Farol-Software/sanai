/* eslint-disable react/jsx-props-no-spreading */

import { AppProps } from 'next/app'

import Header from '../components/shared/Header'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
