import Head from 'next/head';
import { useRouter } from 'next/router'
import styles from '../styles/pages/jobs.module.scss';
import Sidebar from '../components/sidebar';
import { lightBlueBG, nextDivFullHeight } from '../util/inline-styles';
import { Page } from '../util/pages';
import JobPostListItem from '../components/job-post-list-item';
import IJobPostListItem from '../interfaces/job-post-list-item';
import LogoutButton from '../components/logout-button';
import BigAddButton from '../components/big-add-button';

// TEMPORARY
const jobPostsData: IJobPostListItem[] = [
    {
        title: 'Principle Software Engineer',
        location: 'Culver City, CA',
        department: 'Engineering',
        fullTime: true,
        applicants: 21,
        jobPostId: '5431783'
    },
    {
        title: 'Product Desiger',
        location: 'Chicago, IL',
        department: 'Design',
        fullTime: true,
        applicants: 12,
        jobPostId: '3948571'
    },
    {
        title: 'HR Manager',
        location: 'Culver City, CA',
        department: 'Human Resources',
        fullTime: true,
        applicants: 33,
        jobPostId: '1957382'
    }
]

export default function Jobs() {
    const router = useRouter()

    return (
        <div className={styles.PageContainer}>
            <Head>
                <title>Jaba</title>
                <link rel="icon" href="/favicon.ico" />
                <style>{lightBlueBG} {nextDivFullHeight}</style>
            </Head>
            <Sidebar activePage={Page.Jobs} />
            <div className={styles.MainContainer}>
                <LogoutButton />
                <div className={`${styles.ContentContainer} ${styles.JobsContentContainer}`}>
                    <BigAddButton
                        text="NEW JOB POST"
                        action={() => {router.push("/new-job-post")}}
                    />
                    <h2 className={styles.JobPostsTitleText}>Active Job Posts</h2>
                    <div className={styles.JobPostsContainer}>
                        {
                            jobPostsData.map((item, i) => {
                                return (
                                    <JobPostListItem
                                        key={item.jobPostId}
                                        title={item.title}
                                        location={item.location}
                                        department={item.department}
                                        fullTime={item.fullTime}
                                        applicants={item.applicants}
                                        jobPostId={item.jobPostId}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
