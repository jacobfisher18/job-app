import styles from '../../styles/components/molecules/job-info-form.module.scss';
import SaveEditButton from '../atoms/save-edit-button';
import StyledButton, {ButtonSize, ButtonStyle} from '../atoms/styled-button';

interface MyProps {
    isEditing: boolean,
    flipIsEditing: Function,
    saveAction: Function,
    title: string,
    setTitle: Function,
    text: string,
    setText: Function,
    delete: Function
}

export default function JobInfoForm(props: MyProps) {

    const renderEditMode = () => {
        return (
            <div className={styles.EditModeContainer}>
                <input
                    value={props.title}
                    onChange={e => { props.setTitle(e.target.value) }}
                    className={styles.EditModeTitle}
                    placeholder='Add a section title (i.e. "About the job")'
                    type="text" />
                <textarea
                    value={props.text}
                    onChange={e => { props.setText(e.target.value) }}
                    placeholder='Add a description'
                    className={styles.EditModeDescription} />
            </div>
        );
    }

    const renderStaticMode = () => {
        return (
            <div>
                <h3 className={styles.StaticModeTitle}>{props.title}</h3>
                <p className={styles.StaticModeDescription}>{props.text}</p>
            </div>
        );
    }

    return (
        <div className={styles.Container}>
            {props.isEditing ? renderEditMode() : renderStaticMode()}
            <div className={styles.FormButtonContainer}>
                {props.isEditing &&
                    <StyledButton
                        text="DELETE"
                        action={() => { props.delete() }}
                        style={ButtonStyle.Delete}
                        size={ButtonSize.S}
                        rounded
                    />
                }
                <div className={styles.Spacer1}/>
                <SaveEditButton
                    isEditing={props.isEditing}
                    saveAction = {() => { props.saveAction() }}
                    flipIsEditing = {() => { props.flipIsEditing() }}
                />
            </div>
        </div>
    );
}
