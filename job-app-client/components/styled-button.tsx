import styles from '../styles/components/styled-button.module.scss';
import { ButtonSize, ButtonStyle } from '../util/enums';

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
