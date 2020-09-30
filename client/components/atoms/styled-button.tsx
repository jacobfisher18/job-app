import styles from '../../styles/components/atoms/styled-button.module.scss';

export enum ButtonSize {
    S,
    M,
    L
}

export enum ButtonStyle {
    Primary,
    Secondary,
    Tertiary,
    Delete
}

interface MyProps {
    action: Function,
    text: string,
    size: ButtonSize,
    style: ButtonStyle,
    leftIcon?: string,
    rightIcon?: string,
    dissapearIconOnHover?: boolean,
    rounded?: boolean,
}

export default function StyledButton(props: MyProps) {
    const sizeClass = () => {
        if (props.size == ButtonSize.S) {
            return styles.SizeS;
        } else if (props.size == ButtonSize.M) {
            return styles.SizeM;
        } else if (props.size == ButtonSize.L) {
            return styles.SizeL;
        } else {
            return "";
        }
    }

    const buttonStyleClass = () => {
        if (props.style == ButtonStyle.Primary) {
            return styles.Primary;
        } else  if (props.style == ButtonStyle.Secondary) {
            return styles.Secondary;
        } else  if (props.style == ButtonStyle.Tertiary) {
            return styles.Tertiary;
        } else  if (props.style == ButtonStyle.Delete) {
            return styles.Delete;
        } else {
            return "";
        }
    }

    const roundedClass = () => {
        if (props.rounded) {
            return styles.Rounded;
        } else {
            return "";
        }
    }

    const leftIcon = () => {
        return props.leftIcon ? (
            <img src={props.leftIcon} className={`${styles.LeftIcon}`}/>
        ) : "";
    }

    const rightIcon = () => {
        return props.rightIcon ? (
            <img src={props.rightIcon} className={`${styles.RightIcon}`}/>
        ) : "";
    }

    return (
        <div
            onClick={() => props.action()}
            className={`${styles.Container} ${sizeClass()} ${roundedClass()} ${buttonStyleClass()}`}
        >
            {leftIcon()}
            {props.text}
            {rightIcon()}
        </div>
    )
}
