import { useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/components/molecules/job-post-list-item.module.scss';
import Badge, { BadgeColor } from '../atoms/badge';
import Dropdown from '../atoms/dropdown';

interface MyProps {
    title: string;
    applicants: number;
    department: string;
    isFullTime: boolean;
    jobPostId: string;
    location: string;
}

export default function JobPostListItem(props: MyProps) {
    const router = useRouter();

    const [isActionsExpanded, setIsActionsExpanded] = useState(false);

    return (
        <div className={styles.JobPostListItemContainer}>
            <div className={styles.LeftContainer}>
                <div className={styles.TitleTextContainer}>
                    <p className={styles.TitleText}>{props.title || "Untitled"}</p>
                    <Badge
                        text="ACTIVE"
                        color={BadgeColor.Blue}
                        img_src="/check-blue.png"
                    />
                </div>
                <p className={styles.SubtitleText}>
                    {props.location.toUpperCase() || "NO LOCATION"} &ensp;/ &ensp;{props.department.toUpperCase() || "NO DEPARTMENT"} &ensp;/ &ensp;{props.isFullTime ? "FULL-TIME" : "PART-TIME"}
                </p>
            </div>
            <div className={styles.RightContainer}>
                <Dropdown
                    title="ACTIONS"
                    options={[{
                        title: "VIEW POST",
                        onClick: () => { router.push(`/jobs/${props.jobPostId}`) }
                    }, {
                        title: "EDIT POST",
                        onClick: () => { router.push(`/posts/edit/${props.jobPostId}`) }
                    }, {
                        title: "DELETE POST",
                        onClick: () => { }
                    }, {
                        title: "VIEW APPLICATIONS",
                        onClick: () => { router.push(`/posts/${props.jobPostId}`) }
                    }]}
                    expanded={isActionsExpanded}
                    flipExpanded={() => { setIsActionsExpanded(!isActionsExpanded) }}
                    setExpandedFalse={() => { setIsActionsExpanded(false) }}
                />
            </div>
        </div>
    )
}
