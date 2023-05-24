import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <script src="https://www.youtube.com/iframe_api" defer />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

