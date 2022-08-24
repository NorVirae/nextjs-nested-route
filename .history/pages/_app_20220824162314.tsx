import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <NavBar>
    <Component {...pageProps} />
    </NavBar>
    </div>
}

export default MyApp
