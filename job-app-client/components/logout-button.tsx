import styles from '../styles/components/logout-button.module.scss';

export default function LogoutButton() {
    return (
        <div className={styles.Container}>
            <img
                className={styles.Img}
                src="/logout-icon-blue.png"
                onClick={() => {console.log("test")}}
                alt="Logout"
            />
            <p className={styles.Text}>Logout</p>
        </div>
    )
}
