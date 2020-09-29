import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../styles/pages/jobs.module.scss';
import PageHead from '../components/functional/page-head';
import Sidebar from '../components/sidebar';
import { Page } from '../util/pages';
import JobPostListItem from '../components/job-post-list-item';
import LogoutButton from '../components/logout-button';
import Dropdown from '../components/dropdown';
import BigAddButton from '../components/big-add-button';
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

    useEffect(() => {
        getJobPostsForCompany(companyInfo.id)
            .then(res => {
                console.log(res);
                setJobPostsData(res);
                this.setStateFromApiData(res);
            })
            .catch(err => {
                // TODO: handle error
            })
    }, []);

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
                                        fullTime={true}
                                        applicants={23}
                                        jobPostId={item.id}
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
