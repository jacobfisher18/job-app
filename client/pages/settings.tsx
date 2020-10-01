import styles from '../styles/pages/settings.module.scss';
import PageHead from '../components/organisms/page-head';
import Sidebar, { Page } from '../components/organisms/sidebar';

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
