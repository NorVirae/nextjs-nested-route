import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
   
      <Component {...pageProps} />
    </Navbar>
    </div>
}

export default MyApp
