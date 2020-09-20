import styles from '../styles/components/post-details-form.module.scss';
import ToggleableInput from '../components/toggleable-input';
import SaveEditButton from '../components/save-edit-button';

export default function PostDetailsForm(props) {
    return (
        <form className={styles.PostDetailsForm}>
            <ToggleableInput
                inputName="Position Title"
                isEditing={props.isEditing}
                value={props.positionTitle}
                setValue={props.setPositionTitle}
            />
            <ToggleableInput
                inputName="Location"
                isEditing={props.isEditing}
                value={props.location}
                setValue={props.setLocation}
            />
            <ToggleableInput
                inputName="Department"
                isEditing={props.isEditing}
                value={props.department}
                setValue={props.setDepartment}
            />
            <div className={styles.FormButtonContainer}>
                <SaveEditButton
                    isEditing={props.isEditing}
                    action={props.flipIsEditing}
                />
            </div>
        </form>
    )
}
