import styles from '../../styles/components/atoms/toggleable-input.module.scss';

interface MyProps {
    inputName: string;
    isEditing: boolean;
    value: string;
    setValue: Function;
}

export default function ToggleableInput(props: MyProps) {
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
