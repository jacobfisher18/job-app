import styles from '../styles/components/job-header.module.scss';
import StyledButton from '../components/styled-button';
import { ButtonSize, ButtonStyle } from '../util/enums';

export default function JobHeader(props) {
    return (
        <div className={styles.Container}>
            <div className={styles.ContentContainer}>
                <img className={styles.CompanyLogo} src="/google-icon.png"></img>
                <div className={styles.DetailsContainer}>
                    <h3>Google</h3>
                    <h2>Principle Software Engineer</h2>
                    <h4>CULVER CITY, CA &ensp;/ &ensp;ENGINEERING &ensp;/ &ensp;FULL-TIME</h4>
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
