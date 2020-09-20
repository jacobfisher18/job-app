import styles from '../styles/components/prev-next-nav.module.scss';
import StyledButton from '../components/styled-button';
import { NewJobPostSection, ButtonSize, ButtonStyle } from '../util/enums';

interface MyProps {
    currSection: NewJobPostSection,
    setSection: Function
}

export default function PrevNextNav(props: MyProps) {
    const prevButton = () => {
        if (props.currSection == NewJobPostSection.PostDetails) {
            return <div/>;
        } else if (props.currSection == NewJobPostSection.JobInfo) {
            return (
                <StyledButton
                    text="Prev: Post Details"
                    action={() => { props.setSection(NewJobPostSection.PostDetails) }}
                    style={ButtonStyle.Primary}
                    size={ButtonSize.M}
                />
            )
        } else if (props.currSection == NewJobPostSection.Forms) {
            return (
                <StyledButton
                    text="Prev: Job Info"
                    action={() => { props.setSection(NewJobPostSection.JobInfo) }}
                    style={ButtonStyle.Primary}
                    size={ButtonSize.M}
                />
            )
        } else if (props.currSection == NewJobPostSection.Publish) {
            return (
                <StyledButton
                    text="Prev: Forms"
                    action={() => { props.setSection(NewJobPostSection.Forms) }}
                    style={ButtonStyle.Primary}
                    size={ButtonSize.M}
                />
            )
        } else {
            return <div/>;
        }
    }

    const nextButton = () => {
        if (props.currSection == NewJobPostSection.PostDetails) {
            return (
                <StyledButton
                    text="Next: Job Info"
                    action={() => { props.setSection(NewJobPostSection.JobInfo) }}
                    style={ButtonStyle.Primary}
                    size={ButtonSize.M}
                />
            )
        } else if (props.currSection == NewJobPostSection.JobInfo) {
            return (
                <StyledButton
                    text="Next: Forms"
                    action={() => { props.setSection(NewJobPostSection.Forms) }}
                    style={ButtonStyle.Primary}
                    size={ButtonSize.M}
                />
            )
        } else if (props.currSection == NewJobPostSection.Forms) {
            return (
                <StyledButton
                    text="Next: Publish"
                    action={() => { props.setSection(NewJobPostSection.Publish) }}
                    style={ButtonStyle.Primary}
                    size={ButtonSize.M}
                />
            )
        } else if (props.currSection == NewJobPostSection.Publish) {
            return <div/>;
        } else {
            return <div/>;
        }
    }

    return (
        <div className={styles.Container}>
            {prevButton()}
            {nextButton()}
        </div>
    )
}
