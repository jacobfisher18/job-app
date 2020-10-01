import styles from '../../styles/components/atoms/logout-button.module.scss';

export default function LogoutButton() {
    return (
        <div className={styles.Container}>
            <img
                className={styles.Img}
                src="/logout-icon-blue.png"
                onClick={() => { }}
                alt="Logout"
            />
            <p className={styles.Text}>Logout</p>
        </div>
    )
}
