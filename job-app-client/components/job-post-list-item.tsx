import styles from '../styles/components/job-post-list-item.module.scss';
import PropTypes from 'prop-types';

export default function JobPostListItem(props) {
    const subtitleText = () => {
        return `${props.location} / ${props.department} / ${props.fullTime ? "FULL-TIME" : "PART-TIME"}`.toUpperCase();
    }

    return (
        <div className={styles.JobPostListItemContainer}>
            <div className={styles.LeftContainer}>
                <p className={styles.TitleText}>{props.title}</p>
                <p className={styles.SubtitleText}>
                    {subtitleText()} 
                </p>
            </div>
            <div className={styles.RightContainer}>
                <p className={styles.ApplicantsText}>{props.applicants} applicants</p>
                <img
                    className={styles.LinkImg}
                    src="/link-icon-grey.png"
                    onClick={() => {console.log(`navigate to job post id ${props.jobPostId}`)}}
                    alt="Job post link"
                />
            </div>
        </div>
    )
}

JobPostListItem.propTypes = {
    title: PropTypes.string,
    applicants: PropTypes.number,
    department: PropTypes.string,
    fullTime: PropTypes.bool,
    jobPostId: PropTypes.string,
    location: PropTypes.string
};
