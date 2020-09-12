import Head from 'next/head';
import styles from '../styles/pages/jobs.module.scss';
import Sidebar from '../components/sidebar';
import { lightBlueBG, nextDivFullHeight } from '../util/inline-styles';
import { Page } from '../util/pages';

export default function Jobs() {
  return (
    <div className={styles.PageContainer}>
      <Head>
        <title>Jaba</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{lightBlueBG} {nextDivFullHeight}</style>
      </Head>
      <Sidebar activePage={Page.Jobs}/>
      <div className={styles.ContentContainer}>
      </div>
    </div>
  )
}
