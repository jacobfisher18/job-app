import styles from '../../styles/components/molecules/publish-panel.module.scss';
import StyledButton, { ButtonSize, ButtonStyle } from '../atoms/styled-button';

interface MyProps {
    previewClicked: Function;
    publishClicked: Function;
}

export default function PublishPanel(props: MyProps) {
    return (
        <div className={styles.Container}>
            <img src="/publish-icon.png" className={styles.PublishImg}/>
            <h2>PUBLISH</h2>
            <p>Clicking this button will publish the job post publically to the internet.
                The post can still be edited later.</p>
            <div className={styles.ButtonsContainer}>
                <StyledButton
                    text="PREVIEW JOB POST"
                    action={() => { props.previewClicked() }}
                    size={ButtonSize.S}
                    style={ButtonStyle.Tertiary}
                    leftIcon="/link-out-icon-white.png"
                    rounded
                />
                <div className={styles.Spacer1}/>
                <StyledButton
                    text="PUBLISH"
                    action={() => { props.publishClicked() }}
                    size={ButtonSize.S}
                    style={ButtonStyle.Primary}
                    rounded
                />
                <div className={styles.Spacer1}/>
            </div>
        </div>
    )
}
