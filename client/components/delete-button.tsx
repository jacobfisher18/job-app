import styles from '../styles/components/delete-button.module.scss';

export default function DeleteButton(props) {
    return (
        <button
            className={styles.DeleteButton}
            onClick={e => { e.preventDefault(); props.action() }}>
            <p>DELETE</p>
        </button>
    )
}
