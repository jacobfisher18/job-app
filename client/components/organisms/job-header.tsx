import styles from '../../styles/components/organisms/job-header.module.scss';
import StyledButton, { ButtonSize, ButtonStyle } from '../atoms/styled-button';

interface MyProps {
    company: string;
    title: string;
    location: string;
    department: string;
    isFullTime: boolean;
}

export default function JobHeader(props: MyProps) {
    return (
        <div className={styles.Container}>
            <div className={styles.ContentContainer}>
                <img className={styles.CompanyLogo} src="/google-icon.png"></img>
                <div className={styles.DetailsContainer}>
                    <h3>{props.company}</h3>
                    <h2>{props.title}</h2>
                    <h4>{props.location.toUpperCase()} &ensp;/ &ensp;{props.department.toUpperCase()} &ensp;/ &ensp;{props.isFullTime ? "FULL-TIME" : "PART-TIME"}</h4>
                </div>
                <div className={styles.ButtonContainer}>
                    <StyledButton
                        text="Apply"
                        action={() => {}}
                        size={ButtonSize.S}
                        style={ButtonStyle.Tertiary}
                        rounded
                    />
                </div>
            </div>
        </div>
    )
}
