import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Urbanist:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.svg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
