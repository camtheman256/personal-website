import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}> 
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
