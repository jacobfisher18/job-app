import styles from '../../styles/components/molecules/job-post-list-item.module.scss';
import Badge, { BadgeColor } from '../atoms/badge';

interface MyProps {
    title: string;
    applicants: number;
    department: string;
    isFullTime: boolean;
    jobPostId: string;
    location: string;
    onClick: Function;
}

export default function JobPostListItem(props: MyProps) {
    return (
        <div className={styles.JobPostListItemContainer} onClick={() => { props.onClick(); }}>
            <div className={styles.LeftContainer}>
                <p className={styles.TitleText}>{props.title}</p>
                <p className={styles.SubtitleText}>
                    {props.location.toUpperCase()} &ensp;/ &ensp;{props.department.toUpperCase()} &ensp;/ &ensp;{props.isFullTime ? "FULL-TIME" : "PART-TIME"}
                </p>
            </div>
            <div className={styles.RightContainer}>
                <Badge
                    text="ACTIVE"
                    color={BadgeColor.Blue}
                    img_src="/check-blue.png"
                />
            </div>
        </div>
    )
}
