import styles from '../styles/pages/home.module.scss';
import PageHead from '../components/functional/page-head';
import Sidebar from '../components/sidebar';
import { Page } from '../util/pages';

export default function Home() {
  return (
    <div className={styles.PageContainer}>
      <PageHead />
      <Sidebar activePage={Page.Home}/>
      <div className={styles.MainContainer}>
      </div>
    </div>
  )
}
