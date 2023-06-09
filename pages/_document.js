import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Portfolio site of Jeff Zhang',
    description:
      'A frontend developer loves to make fun and interactive things.',
    image: './favicon.ico'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />

        <meta name="author" content="Jeff Zhang" />
        <meta
          name="keywords"
          content="frontend, developer, HTML, CSS, JavaScript, React"
        />
        <meta name="description" content={meta.description} />

        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jeffzholy" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
