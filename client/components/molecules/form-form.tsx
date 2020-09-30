import styles from '../../styles/components/molecules/form-form.module.scss';
import SaveEditButton from '../atoms/save-edit-button';
import Checkbox from '../atoms/checkbox';

interface ICheckboxProp {
    title: string,
    enabled: boolean,
    flipFunction: Function
}

interface MyProps {
    sectionTitle: string;
    checkboxes: ICheckboxProp[];
    isEditing: boolean;
    flipIsEditing: Function;
    saveAction: Function;
}

// A form... about forms
export default function FormForm(props: MyProps) {
    return (
        <div className={styles.Container}>
            <h3 className={styles.SectionTitle}>{props.sectionTitle}</h3>
            {props.checkboxes
                .filter((item: ICheckboxProp) => props.isEditing || item.enabled)
                .map((item: ICheckboxProp, i: number) => {
                    return (
                        <Checkbox
                            key={i}
                            on={item.enabled}
                            flip={item.flipFunction}
                            title={item.title}
                            isEditable={props.isEditing}
                        />
                    )
                })
                }
            <div className={styles.FormButtonContainer}>
                <SaveEditButton
                    isEditing={props.isEditing}
                    saveAction = {() => { props.saveAction() }}
                    flipIsEditing = {() => { props.flipIsEditing() }}
                />
            </div>
        </div>
    );
}
