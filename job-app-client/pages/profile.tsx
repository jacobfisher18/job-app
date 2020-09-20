import styles from '../styles/pages/profile.module.scss';
import PageHead from '../components/functional/page-head';
import Sidebar from '../components/sidebar';
import { Page } from '../util/pages';

export default function Profile() {
  return (
    <div className={styles.PageContainer}>
      <PageHead />
      <Sidebar activePage={Page.Profile}/>
      <div className={styles.MainContainer}>
      </div>
    </div>
  )
}
