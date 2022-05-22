import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FaceLogo from '../public/assets/face.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NERDLINGS</title>
        <meta name="description" content="Bespoke web development and design by Nerdlings." />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
  <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={styles.main}>
        {/* <Image src={FaceLogo} alt="Nerdlings logo" /> */}
        <h1 className={styles.title}>
       NERDLINGS

        </h1>
        

        <p className={styles.description}>
          Bespoke web development and design.
        </p>

      
      </main>
    </div>
  )
}
