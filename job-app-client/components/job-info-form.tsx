import styles from '../styles/components/job-info-form.module.scss';
import SaveEditButton from '../components/save-edit-button';
import DeleteButton from '../components/delete-button';

interface MyProps {
    isEditing: boolean,
    flipIsEditing: Function,
    sectionTitle: string,
    setSectionTitle: Function,
    description: string,
    setDescription: Function,
    delete: Function
}

export default function JobInfoForm(props: MyProps) {

    const renderEditMode = () => {
        return (
            <div className={styles.EditModeContainer}>
                <input
                    value={props.sectionTitle}
                    onChange={e => { props.setSectionTitle(e.target.value) }}
                    className={styles.EditModeTitle}
                    placeholder='Add a section title (i.e. "About the job")'
                    type="text" />
                <textarea
                    value={props.description}
                    onChange={e => { props.setDescription(e.target.value) }}
                    placeholder='Add a description'
                    className={styles.EditModeDescription} />
            </div>
        );
    }

    const renderStaticMode = () => {
        return (
            <div>
                <h3 className={styles.StaticModeTitle}>{props.sectionTitle}</h3>
                <p className={styles.StaticModeDescription}>{props.description}</p>
            </div>
        );
    }

    return (
        <div className={styles.Container}>
            {props.isEditing ? renderEditMode() : renderStaticMode()}
            <div className={styles.FormButtonContainer}>
                {props.isEditing && <DeleteButton
                    action={() => props.delete()}
                />}
                <div className={styles.Spacer1}/>
                <SaveEditButton
                    isEditing={props.isEditing}
                    action={() => props.flipIsEditing()}
                />
            </div>
        </div>
    );
}
