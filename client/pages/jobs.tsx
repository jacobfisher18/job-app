import { useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../styles/pages/jobs.module.scss';
import PageHead from '../components/functional/page-head';
import Sidebar from '../components/sidebar';
import { Page } from '../util/pages';
import JobPostListItem from '../components/job-post-list-item';
import IJobPostListItem from '../interfaces/job-post-list-item';
import LogoutButton from '../components/logout-button';
import Dropdown from '../components/dropdown';
import BigAddButton from '../components/big-add-button';
import { createBlankJobPostForCompany } from '../api/job-post';

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

    // Job post filters
    const [isLocationExpanded, setIsLocationExpanded] = useState(false);
    const [isDepartmentExpanded, setIsDepartmentExpanded] = useState(false);
    const [isTimeExpanded, setIsTimeExpanded] = useState(false);
    const [isStatusExpanded, setIsStatusExpanded] = useState(false);

    const [isNewJobPostLoading, setIsNewJobPostLoading] = useState(false);

    return (
        <div className={styles.PageContainer}>
            <PageHead />
            <Sidebar activePage={Page.Jobs} />
            <div className={styles.MainContainer}>
                <LogoutButton />
                <div className={`${styles.ContentContainer} ${styles.JobsContentContainer}`}>
                    <BigAddButton
                        text="NEW JOB POST"
                        loading={isNewJobPostLoading}
                        action={async () => {
                            setIsNewJobPostLoading(true);

                            const company = 'Google'; // TODO: get this from some state store
                            createBlankJobPostForCompany(company).then((id: string) => {
                                router.push(`/new-job-post/${id}`);
                                setIsNewJobPostLoading(false);
                            }).catch(err => {
                                setIsNewJobPostLoading(false);
                                // TODO: handle error
                                console.log(err);
                            })
                        }}
                    />
                    <div className={styles.DropdownsContainer}>
                        <Dropdown
                            title="LOCATION"
                            options={[{
                                title: "Culver City, CA",
                                onClick: () => {}
                            }, {
                                title: "Chicago, IL",
                                onClick: () => {}
                            }, {
                                title: "New York, NY",
                                onClick: () => {}
                            }]}
                            expanded={isLocationExpanded}
                            flipExpanded={() => { setIsLocationExpanded(!isLocationExpanded)}}
                            setExpandedFalse={() => { setIsLocationExpanded(false)}}
                        />
                        <Dropdown
                            title="DEPARTMENT"
                            options={[{
                                title: "ENGINEERING",
                                onClick: () => {}
                            }, {
                                title: "HR",
                                onClick: () => {}
                            }, {
                                title: "DESIGN",
                                onClick: () => {}
                            }, {
                                title: "OPERATIONS",
                                onClick: () => {}
                            }]}
                            expanded={isDepartmentExpanded}
                            flipExpanded={() => { setIsDepartmentExpanded(!isDepartmentExpanded)}}
                            setExpandedFalse={() => { setIsDepartmentExpanded(false)}}
                        />
                        <Dropdown
                            title="TIME"
                            options={[{
                                title: "Full-Time",
                                onClick: () => {}
                            }, {
                                title: "Part-Time",
                                onClick: () => {}
                            }]}
                            expanded={isTimeExpanded}
                            flipExpanded={() => { setIsTimeExpanded(!isTimeExpanded)}}
                            setExpandedFalse={() => { setIsTimeExpanded(false)}}
                        />
                        <Dropdown
                            title="STATUS"
                            options={[{
                                title: "Active",
                                onClick: () => {}
                            }, {
                                title: "Draft",
                                onClick: () => {}
                            }, {
                                title: "Expired",
                                onClick: () => {}
                            }]}
                            expanded={isStatusExpanded}
                            flipExpanded={() => { setIsStatusExpanded(!isStatusExpanded)}}
                            setExpandedFalse={() => { setIsStatusExpanded(false)}}
                        />
                    </div>
                    <h2 className={styles.JobPostsTitleText}>Engineering</h2>
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
