import styles from '../styles/pages/settings.module.scss';
import PageHead from '../components/organisms/page-head';
import Sidebar from '../components/organisms/sidebar';
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
