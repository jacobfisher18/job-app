import styles from '../styles/components/big-add-button.module.scss';

export default function BigAddButton(props) {
    return (
        <div
            className={styles.Container}
            onClick={() => props.action()}
        >
            <img className={styles.PlusIcon} src="/plus-icon-white.png" />
            <p className={styles.ButtonText}>{props.text}</p>
        </div>
    )
}
