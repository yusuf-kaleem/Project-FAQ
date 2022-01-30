import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import GlobalStyle from '../styles/index'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
