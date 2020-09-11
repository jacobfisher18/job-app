import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jaba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.HelloWorld}>
        Hello World
      </h1>
    </div>
  )
}
