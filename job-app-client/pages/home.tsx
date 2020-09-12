import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Sidebar from '../components/sidebar';
import { lightBlueBG, nextDivFullHeight } from '../util/inline-styles';

export default function Home() {
  return (
    <div className={styles.HomePageContainer}>
      <Head>
        <title>Jaba</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{lightBlueBG} {nextDivFullHeight}</style>
      </Head>
      <Sidebar />
      <div className={styles.ContentContainer}>
      </div>
    </div>
  )
}
