import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
      </Head>
      {/* TODO use local js to avoid network error, see if can be improved*/}
      <Script
        src="./scripts/linkedin-badge.js"
        // src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
