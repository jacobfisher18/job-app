import styles from '../../styles/components/pages/job-overview.module.scss';
import PageHead from '../organisms/page-head';
import NavHeader from '../organisms/nav-header';
import Sidebar, { Page } from '../organisms/sidebar';

interface MyProps {
    data?: any;
}

export default function JobOverview(props: MyProps) {

    console.log("props.data", props.data);

    const renderSection = () => {
        return (
            <div>Section</div>
        )
    }

    return (
        <div className={styles.PageContainer}>
            <PageHead />
            <Sidebar activePage={Page.Jobs} />
            <div className={styles.MainContainer}>
                <NavHeader
                    title={props.data.details.title}
                    activeSection=""
                    setSection={() => {}}
                    navSections={[]}
                />
                <div className={styles.ContentContainer}>
                    {renderSection()}
                </div>
            </div>
        </div>
    )
}
