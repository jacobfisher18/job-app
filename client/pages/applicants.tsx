import styles from '../styles/pages/applicants.module.scss';
import PageHead from '../components/organisms/page-head';
import Sidebar, { Page } from '../components/organisms/sidebar';

export default function Applicants() {
  return (
    <div className={styles.PageContainer}>
      <PageHead />
      <Sidebar activePage={Page.Applicants}/>
      <div className={styles.MainContainer}>
      </div>
    </div>
  )
}
