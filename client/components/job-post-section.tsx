import styles from '../styles/components/job-post-section.module.scss';

interface MyProps {
    title: string;
    text: string;
}

export default function JobPostSection(props: MyProps) {
    return (
        <div className={styles.Container}>
            <h3 className={styles.Title}>{props.title}</h3>
            <p className={styles.Text}>{props.text}</p>
        </div>
    )
}
