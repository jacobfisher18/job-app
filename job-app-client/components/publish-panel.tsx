import styles from '../styles/components/publish-panel.module.scss';
import StyledButton from '../components/styled-button';
import { ButtonSize, ButtonStyle } from '../util/enums';

export default function PublishPanel(props) {
    return (
        <div className={styles.Container}>
            <img src="/publish-icon.png" className={styles.PublishImg}/>
            <h2>PUBLISH</h2>
            <p>Clicking this button will publish the job post publically to the internet.
                The post can still be edited later.</p>
            <div className={styles.ButtonsContainer}>
                <StyledButton
                    text="PREVIEW JOB POST"
                    action={() => {}}
                    size={ButtonSize.S}
                    style={ButtonStyle.Tertiary}
                    leftIcon="/link-out-icon-white.png"
                    rounded
                />
                <div className={styles.Spacer1}/>
                <StyledButton
                    text="PUBLISH"
                    action={() => {}}
                    size={ButtonSize.S}
                    style={ButtonStyle.Primary}
                    rounded
                />
                <div className={styles.Spacer1}/>
            </div>
        </div>
    )
}
