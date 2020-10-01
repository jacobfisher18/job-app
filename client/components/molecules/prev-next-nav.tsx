import styles from '../../styles/components/molecules/prev-next-nav.module.scss';
import StyledButton, {ButtonSize, ButtonStyle } from '../atoms/styled-button';
import { EditableJobPostSection} from '../pages/editable-job-post';

interface MyProps {
    currSection: EditableJobPostSection,
    setSection: Function
}

export default function PrevNextNav(props: MyProps) {
    const prevButton = () => {
        if (props.currSection == EditableJobPostSection.PostDetails) {
            return <div/>;
        } else if (props.currSection == EditableJobPostSection.JobInfo) {
            return (
                <StyledButton
                    text="Prev: Post Details"
                    action={() => { props.setSection(EditableJobPostSection.PostDetails) }}
                    style={ButtonStyle.Primary}
                    size={ButtonSize.M}
                />
            )
        } else if (props.currSection == EditableJobPostSection.Forms) {
            return (
                <StyledButton
                    text="Prev: Job Info"
                    action={() => { props.setSection(EditableJobPostSection.JobInfo) }}
                    style={ButtonStyle.Primary}
                    size={ButtonSize.M}
                />
            )
        } else if (props.currSection == EditableJobPostSection.Publish) {
            return (
                <StyledButton
                    text="Prev: Forms"
                    action={() => { props.setSection(EditableJobPostSection.Forms) }}
                    style={ButtonStyle.Primary}
                    size={ButtonSize.M}
                />
            )
        } else {
            return <div/>;
        }
    }

    const nextButton = () => {
        if (props.currSection == EditableJobPostSection.PostDetails) {
            return (
                <StyledButton
                    text="Next: Job Info"
                    action={() => { props.setSection(EditableJobPostSection.JobInfo) }}
                    style={ButtonStyle.Primary}
                    size={ButtonSize.M}
                />
            )
        } else if (props.currSection == EditableJobPostSection.JobInfo) {
            return (
                <StyledButton
                    text="Next: Forms"
                    action={() => { props.setSection(EditableJobPostSection.Forms) }}
                    style={ButtonStyle.Primary}
                    size={ButtonSize.M}
                />
            )
        } else if (props.currSection == EditableJobPostSection.Forms) {
            return (
                <StyledButton
                    text="Next: Publish"
                    action={() => { props.setSection(EditableJobPostSection.Publish) }}
                    style={ButtonStyle.Primary}
                    size={ButtonSize.M}
                />
            )
        } else if (props.currSection == EditableJobPostSection.Publish) {
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
