import styles from '../styles/components/checkbox.module.scss';

export default function Checkbox(props) {

    const renderEditMode = () => {
        return (
            <div className={styles.Container}>
                <button
                    className={`${styles.Checkbox} ${props.on ? styles.CheckboxOn : styles.CheckboxOff}`}
                    onClick={e => { e.preventDefault(); props.flip() }}>
                    <img
                        src="/check-white.png"
                    />
                </button>
                <p>{props.title}</p>
            </div>
        );
    }

    const renderStaticMode = () => {
        return (
            <div className={styles.Container}>
                <div
                    className={`${styles.Checkbox} ${styles.CheckboxStatic}`}
                    onClick={e => { e.preventDefault(); }}>
                    <img
                        src="/check-blue.png"
                    />
                </div>
                <p>{props.title}</p>
            </div>
        );
    }

    return props.isEditable ? renderEditMode() : renderStaticMode();
}
