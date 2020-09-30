import styles from '../styles/pages/profile.module.scss';
import PageHead from '../components/organisms/page-head';
import Sidebar from '../components/organisms/sidebar';
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
