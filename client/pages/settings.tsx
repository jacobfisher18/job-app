import styles from '../styles/pages/settings.module.scss';
import PageHead from '../components/functional/page-head';
import Sidebar from '../components/sidebar';
import { Page } from '../util/pages';

export default function Settings() {
  return (
    <div className={styles.PageContainer}>
      <PageHead />
      <Sidebar activePage={Page.Settings}/>
      <div className={styles.MainContainer}>
      </div>
    </div>
  )
}
