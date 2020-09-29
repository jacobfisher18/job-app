import styles from '../styles/components/job-post-list-item.module.scss';
import Badge from './badge';
import { BadgeColor } from '../util/enums';

interface MyProps {
    title: string;
    applicants: number;
    department: string;
    fullTime: boolean;
    jobPostId: string;
    location: string;
}

export default function JobPostListItem(props: MyProps) {
    return (
        <div className={styles.JobPostListItemContainer}>
            <div className={styles.LeftContainer}>
                <p className={styles.TitleText}>{props.title}</p>
                <p className={styles.SubtitleText}>
                {props.location.toUpperCase()} &ensp;/ &ensp;{props.department.toUpperCase()} &ensp;/ &ensp;{props.fullTime ? "FULL-TIME" : "PART-TIME"}
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
