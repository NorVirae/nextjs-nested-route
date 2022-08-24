import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <div style={{backgroundColor: 'red', height: "10rem", widt}}
      <Component {...pageProps} />
    </div>
}

export default MyApp
