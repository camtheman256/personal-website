import Document, { Html, Head, Main, NextScript } from 'next/document'
import { G_MEASUREMENT_ID } from '../lib/ga'
import { InitializeColorMode } from 'theme-ui'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${G_MEASUREMENT_ID}`} />
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `
          }} />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}