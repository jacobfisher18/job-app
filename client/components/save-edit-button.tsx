import styles from '../styles/components/save-edit-button.module.scss';

export default function SaveEditButton(props) {
    return (
        <button
            className={`${styles.ButtonSecondary} ${styles.SaveEditButton}`}
            onClick={e => { e.preventDefault(); props.action() }}>
            <p>{props.isEditing ? "SAVE" : "EDIT"}</p>
        </button>
    )
}
