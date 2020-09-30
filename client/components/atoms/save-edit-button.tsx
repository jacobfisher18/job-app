import StyledButton, { ButtonSize, ButtonStyle } from './styled-button';

interface MyProps {
    isEditing: any;
    saveAction: Function;
    flipIsEditing: Function;
}

export default function SaveEditButton(props: MyProps) {
    return (
        <StyledButton
            action={() => {
                if (props.isEditing) {
                    props.saveAction();
                }
                props.flipIsEditing();
            }}
            text={props.isEditing ? "SAVE" : "EDIT"}
            size={ButtonSize.S}
            style={ButtonStyle.Primary}
            rounded
        />
    )
}
