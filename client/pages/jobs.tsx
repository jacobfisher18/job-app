import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../styles/pages/jobs.module.scss';
import PageHead from '../components/organisms/page-head';
import Sidebar, { Page } from '../components/organisms/sidebar';
import JobPostListItem from '../components/molecules/job-post-list-item';
import LogoutButton from '../components/atoms/logout-button';
import Dropdown from '../components/atoms/dropdown';
import BigAddButton from '../components/atoms/big-add-button';
import { getJobPostsForCompany, createBlankJobPostForCompany } from '../api/job-post';

// TODO: get this from some state store or cookie
const companyInfo = {
    id: 'm9qQQQFl8hVbuQGAxmVa',
    name: 'Google'
}

export default function Jobs() {
    const router = useRouter()

    const [jobPostsData, setJobPostsData] = useState(null);

    // Job post filters
    const [isLocationExpanded, setIsLocationExpanded] = useState(false);
    const [isDepartmentExpanded, setIsDepartmentExpanded] = useState(false);
    const [isTimeExpanded, setIsTimeExpanded] = useState(false);
    const [isStatusExpanded, setIsStatusExpanded] = useState(false);

    const [isNewJobPostLoading, setIsNewJobPostLoading] = useState(false);

    const fetchData = () => {
        getJobPostsForCompany(companyInfo.id)
            .then(res => {
                setJobPostsData(res);
            })
            .catch(err => {
                // TODO: handle error
            })
    }

    useEffect(fetchData, []);

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
                            createBlankJobPostForCompany(companyInfo.name, companyInfo.id).then((id: string) => {
                                router.push(`/posts/new/${id}`);
                                setIsNewJobPostLoading(false);
                            }).catch(err => {
                                setIsNewJobPostLoading(false);
                                // TODO: handle error
                            })
                        }}
                    />
                    <div className={styles.DropdownsContainer}>
                        <Dropdown
                            title="LOCATION"
                            options={[{
                                title: "Culver City, CA",
                                onClick: () => { }
                            }, {
                                title: "Chicago, IL",
                                onClick: () => { }
                            }, {
                                title: "New York, NY",
                                onClick: () => { }
                            }]}
                            expanded={isLocationExpanded}
                            flipExpanded={() => { setIsLocationExpanded(!isLocationExpanded) }}
                            setExpandedFalse={() => { setIsLocationExpanded(false) }}
                        />
                        <div className={styles.Spacer3} />
                        <Dropdown
                            title="DEPARTMENT"
                            options={[{
                                title: "ENGINEERING",
                                onClick: () => { }
                            }, {
                                title: "HR",
                                onClick: () => { }
                            }, {
                                title: "DESIGN",
                                onClick: () => { }
                            }, {
                                title: "OPERATIONS",
                                onClick: () => { }
                            }]}
                            expanded={isDepartmentExpanded}
                            flipExpanded={() => { setIsDepartmentExpanded(!isDepartmentExpanded) }}
                            setExpandedFalse={() => { setIsDepartmentExpanded(false) }}
                        />
                        <div className={styles.Spacer3} />
                        <Dropdown
                            title="TIME"
                            options={[{
                                title: "Full-Time",
                                onClick: () => { }
                            }, {
                                title: "Part-Time",
                                onClick: () => { }
                            }]}
                            expanded={isTimeExpanded}
                            flipExpanded={() => { setIsTimeExpanded(!isTimeExpanded) }}
                            setExpandedFalse={() => { setIsTimeExpanded(false) }}
                        />
                        <div className={styles.Spacer3} />
                        <Dropdown
                            title="STATUS"
                            options={[{
                                title: "Active",
                                onClick: () => { }
                            }, {
                                title: "Draft",
                                onClick: () => { }
                            }, {
                                title: "Expired",
                                onClick: () => { }
                            }]}
                            expanded={isStatusExpanded}
                            flipExpanded={() => { setIsStatusExpanded(!isStatusExpanded) }}
                            setExpandedFalse={() => { setIsStatusExpanded(false) }}
                        />
                    </div>
                    <h2 className={styles.JobPostsTitleText}>Engineering</h2>
                    <div className={styles.JobPostsContainer}>
                        {
                            jobPostsData ? jobPostsData.map(item => {
                                return (
                                    <JobPostListItem
                                        key={item.id}
                                        title={item.data.details.title}
                                        location={item.data.details.location}
                                        department={item.data.details.department}
                                        isFullTime={true}
                                        applicants={23}
                                        postId={item.id}
                                        refetchData={() => { fetchData() }}
                                    />
                                )
                            }) : <p>loader?</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
