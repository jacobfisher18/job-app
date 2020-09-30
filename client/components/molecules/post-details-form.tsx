import styles from '../../styles/components/molecules/post-details-form.module.scss';
import ToggleableInput from '../atoms/toggleable-input';
import SaveEditButton from '../atoms/save-edit-button';

interface MyProps {
    isEditing: boolean;
    positionTitle: string;
    setPositionTitle: Function;
    location: string;
    setLocation: Function;
    department: string;
    setDepartment: Function;
    save: Function;
    flipIsEditing: Function;
}

export default function PostDetailsForm(props: MyProps) {
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
                    saveAction = {() => { props.save() }}
                    flipIsEditing = {() => { props.flipIsEditing() }}
                />
            </div>
        </form>
    )
}
