import Head from 'next/head'
import '@/styles/globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Layout from '@/cmp/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
