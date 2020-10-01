import { useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/components/molecules/job-post-list-item.module.scss';
import Badge, { BadgeColor } from '../atoms/badge';
import Dropdown from '../atoms/dropdown';
import { deleteJobPost } from '../../api/job-post';

interface MyProps {
    title: string;
    applicants: number;
    department: string;
    isFullTime: boolean;
    postId: string | string[];
    location: string;
    refetchData: Function;
}

export default function JobPostListItem(props: MyProps) {
    const router = useRouter();

    const [isActionsExpanded, setIsActionsExpanded] = useState(false);

    const onDeleteClicked = () => {
        deleteJobPost(props.postId)
            .then(res => {
                props.refetchData()
            })
            .catch(() => {
                // TODO: handle error
            })
    }

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
                        onClick: () => { router.push(`/jobs/${props.postId}`) }
                    }, {
                        title: "EDIT POST",
                        onClick: () => { router.push(`/posts/edit/${props.postId}`) }
                    }, {
                        title: "DELETE POST",
                        onClick: () => { onDeleteClicked() }
                    }, {
                        title: "VIEW APPLICATIONS",
                        onClick: () => { router.push(`/posts/${props.postId}`) }
                    }]}
                    expanded={isActionsExpanded}
                    flipExpanded={() => { setIsActionsExpanded(!isActionsExpanded) }}
                    setExpandedFalse={() => { setIsActionsExpanded(false) }}
                />
            </div>
        </div>
    )
}
