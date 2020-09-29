import styles from '../styles/components/big-add-button.module.scss';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

const override = css``;

interface MyProps {
    action: Function;
    loading: boolean;
    text: string;
}

export default function BigAddButton(props: MyProps) {
    return (
        <div
            className={styles.Container}
            onClick={() => props.action()}
        >
            {props.loading ?
                <div className={styles.ContainerContent}>
                    <PulseLoader
                        css={override}
                        size={5}
                        color={"#FFFFFF"}
                        loading={true}
                    />
                </div>
                :
                <div className={styles.ContainerContent}>
                    <img className={styles.PlusIcon} src="/plus-icon-white.png" />
                    <p className={styles.ButtonText}>{props.text}</p>
                </div>}
        </div>
    )
}
