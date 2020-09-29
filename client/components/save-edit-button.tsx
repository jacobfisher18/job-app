import styles from '../styles/components/save-edit-button.module.scss';

interface MyProps {
    isEditing: any;
    saveAction: () => void;
    flipIsEditing: () => void;
}

export default function SaveEditButton(props: MyProps) {
    return (
        <button
            className={`${styles.ButtonSecondary} ${styles.SaveEditButton}`}
            onClick={e => {
                e.preventDefault();
                if (props.isEditing) {
                    props.saveAction();
                }
                props.flipIsEditing();
            }}>
            <p>{props.isEditing ? "SAVE" : "EDIT"}</p>
        </button>
    )
}
