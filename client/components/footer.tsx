import styles from '../styles/components/footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.Container}>
            <div className={styles.FooterContentContainer}>
                <h5>Job post provided by <span className={styles.Bold}>Jaba</span></h5>
                <img src="/jaba-logo-blue.png" />
            </div>
        </div>
    )
}
