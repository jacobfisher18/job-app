import styles from '../styles/components/toggleable-input.module.scss';

export default function ToggleableInput(props) {
    return (
        <div className={styles.Container}>
            <p>{props.inputName}</p>
            {props.isEditing ? (
                <input
                    type="text"
                    value={props.value}
                    onChange={e => { props.setValue(e.target.value) }}
                />
            ) : (
                    <p className={styles.StaticText}>{props.value}</p>
                )}
        </div>
    )
}
