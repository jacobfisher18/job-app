import { Component } from 'react';
import { withRouter, SingletonRouter } from 'next/router';
import styles from '../../styles/pages/new-job-post.module.scss';
import PageHead from '../organisms/page-head';
import Sidebar from '../organisms/sidebar';
import { Page } from '../../util/pages';
import LogoutButton from '../atoms/logout-button';
import JobInfoForm from '../molecules/job-info-form';
import PostDetailsForm from '../molecules/post-details-form';
import BigAddButton from '../atoms/big-add-button';
import StyledButton, { ButtonStyle, ButtonSize } from '../atoms/styled-button';
import FormForm from '../molecules/form-form';
import PublishPanel from '../molecules/publish-panel';
import { EditableJobPostSection } from '../../util/enums';
import PrevNextNav from '../molecules/prev-next-nav';
import { getJobPost, patchJobPost } from '../../api/job-post';

interface JobInfoSectionState {
    isEditing: boolean;
    title: string;
    text: string;
}

interface MyProps {
    postId: string | string[];
    router: SingletonRouter;
}

interface MyState {
    activeSection: EditableJobPostSection;
    isEditingPostDetailsForm: boolean;
    isEditingApplicantInfoForm: boolean;
    isEditingLinksForm: boolean;
    isEditingOtherSectionsForm: boolean;
    positionTitle: string;
    location: string;
    department: string;
    jobInfoSections: Array<JobInfoSectionState>;
    enableName: boolean;
    enableEmail: boolean;
    enablePhoneNumber: boolean;
    enableResume: boolean;
    enableCoverLetter: boolean;
    enableLinkedIn: boolean;
    enablePortfolio: boolean;
    enableGitHub: boolean;
    enableTwitter: boolean;
    enableWorkEligibility: boolean;
    enableEEO: boolean;
}

class EditableJobPost extends Component<MyProps, MyState> {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: EditableJobPostSection.PostDetails,
            isEditingPostDetailsForm: true,
            isEditingApplicantInfoForm: false,
            isEditingLinksForm: false,
            isEditingOtherSectionsForm: false,
            positionTitle: '',
            location: '',
            department: '',
            jobInfoSections: [],
            enableName: true,
            enableEmail: true,
            enablePhoneNumber: true,
            enableResume: true,
            enableCoverLetter: false,
            enableLinkedIn: true,
            enablePortfolio: true,
            enableGitHub: true,
            enableTwitter: false,
            enableWorkEligibility: true,
            enableEEO: true
        };
    }

    componentDidMount() {
        getJobPost(this.props.postId)
            .then(res => {
                this.setStateFromApiData(res);
            })
            .catch(err => {
                // TODO: handle error
            })
    }

    setStateFromApiData(data: any) {
        this.setState({
            positionTitle: data.details.title,
            location: data.details.location,
            department: data.details.department,
            jobInfoSections: data.jobInfo.map(item => {
                return {
                    isEditing: false,
                    title: item.title,
                    text: item.text
                }
            }),
            enableName: data.applicantInfo.enable_name,
            enableEmail: data.applicantInfo.enable_email,
            enablePhoneNumber: data.applicantInfo.enable_phone_number,
            enableResume: data.applicantInfo.enable_resume,
            enableCoverLetter: data.applicantInfo.enable_cover_letter,
            enableLinkedIn: data.links.enable_linkedin,
            enablePortfolio: data.links.enable_portfolio,
            enableGitHub: data.links.enable_github,
            enableTwitter: data.links.enable_twitter,
            enableWorkEligibility: data.otherSections.enable_work_eligibility,
            enableEEO: data.otherSections.enable_eeo
        })
    }

    savePostDetails() {
        patchJobPost(this.props.postId, {
            details: {
                company: 'Google',
                title: this.state.positionTitle,
                location: this.state.location,
                department: this.state.department
            }
        })
            .then(() => { })
            .catch(err => {
                // TODO: handle error
            })
    }

    saveApplicantInfo() {
        patchJobPost(this.props.postId, {
            applicantInfo: {
                enable_cover_letter: this.state.enableCoverLetter,
                enable_email: this.state.enableEmail,
                enable_name: this.state.enableName,
                enable_phone_number: this.state.enablePhoneNumber,
                enable_resume: this.state.enableResume
            }
        })
            .then(() => {})
            .catch(err => {
                // TODO: handle error
            })
    }

    saveLinks() {
        patchJobPost(this.props.postId, {
            links: {
                enable_github: this.state.enableGitHub,
                enable_linkedin: this.state.enableLinkedIn,
                enable_portfolio: this.state.enablePortfolio,
                enable_twitter: this.state.enableTwitter
            }
        })
            .then(() => {})
            .catch(err => {
                // TODO: handle error
            })
    }

    saveOtherSections() {
        patchJobPost(this.props.postId, {
            otherSections: {
                enable_eeo: this.state.enableEEO,
                enable_work_eligibility: this.state.enableWorkEligibility
            }
        })
            .then(() => {})
            .catch(err => {
                // TODO: handle error
            })
    }

    // TODO: figure out how to save on a section by section basis
    saveJobInfo() {
        patchJobPost(this.props.postId, {
            jobInfo: this.state.jobInfoSections.map(item => {
                return {
                    title: item.title,
                    text: item.text
                }
            })
        })
            .then(() => {})
            .catch(err => {
                // TODO: handle error
            })
    }

    renderPostDetails() {
        return (
            <div className={styles.PostDetailsContainer}>
                <PostDetailsForm
                    isEditing={this.state.isEditingPostDetailsForm}
                    flipIsEditing={() => this.setState(prevstate => ({ isEditingPostDetailsForm: !prevstate.isEditingPostDetailsForm }))}
                    positionTitle={this.state.positionTitle}
                    setPositionTitle={val => this.setState({ positionTitle: val })}
                    location={this.state.location}
                    setLocation={val => this.setState({ location: val })}
                    department={this.state.department}
                    setDepartment={val => this.setState({ department: val })}
                    save={() => this.savePostDetails()}
                />
            </div>
        )
    }

    setJobInfoSectionProperty(index: number, propertyKey: string, val: any) {
        this.setState(prevState => {
            let newJobInfoSections = prevState.jobInfoSections;
            newJobInfoSections[index][propertyKey] = val;
            return {
                jobInfoSections: newJobInfoSections
            };
        });
    }

    flipJobInfoSectionIsEditing(index: number) {
        this.setState(prevState => {
            let newJobInfoSections = prevState.jobInfoSections;
            newJobInfoSections[index].isEditing = !newJobInfoSections[index].isEditing;
            return {
                jobInfoSections: newJobInfoSections
            };
        });
    }

    addNewJobInfoSection() {
        this.setState(prevState => {
            let newJobInfoSections = prevState.jobInfoSections;
            newJobInfoSections.push({
                isEditing: true,
                title: '',
                text: ''
            })
            return {
                jobInfoSections: newJobInfoSections
            };
        });
    }

    deleteJobInfoSection(index: number) {
        this.setState(prevState => {
            let newJobInfoSections = prevState.jobInfoSections;
            newJobInfoSections.splice(index, 1);
            return {
                jobInfoSections: newJobInfoSections
            };
        });
    }

    renderJobInfo() {
        return (
            <div className={styles.JobInfoContainer}>
                {
                    this.state.jobInfoSections.map((item, index) => {
                        return (
                            <JobInfoForm
                                key={index}
                                isEditing={item.isEditing}
                                flipIsEditing={() => this.flipJobInfoSectionIsEditing(index)}
                                title={item.title}
                                setTitle={(val: any) => this.setJobInfoSectionProperty(index, "title", val)}
                                text={item.text}
                                setText={(val: any) => this.setJobInfoSectionProperty(index, "text", val)}
                                delete={() => this.deleteJobInfoSection(index)}
                                saveAction={() => { this.saveJobInfo() }}
                            />
                        )
                    })
                }
                <div className={styles.BigAddButtonContainer}>
                    <BigAddButton
                        text="ADD A SECTION"
                        action={() => this.addNewJobInfoSection()}
                        loading={false}
                    />
                </div>
            </div>
        )
    }

    renderForms() {
        return (
            <div>
                <FormForm
                    sectionTitle="Applicant Info"
                    isEditing={this.state.isEditingApplicantInfoForm}
                    flipIsEditing={() => this.setState(prevstate => ({ isEditingApplicantInfoForm: !prevstate.isEditingApplicantInfoForm }))}
                    saveAction={() => { this.saveApplicantInfo() }}
                    checkboxes={[
                        {
                            title: "Name",
                            enabled: this.state.enableName,
                            flipFunction: () => this.setState(prevstate => ({ enableName: !prevstate.enableName }))
                        },
                        {
                            title: "Email",
                            enabled: this.state.enableEmail,
                            flipFunction: () => this.setState(prevstate => ({ enableEmail: !prevstate.enableEmail }))
                        },
                        {
                            title: "Phone Number",
                            enabled: this.state.enablePhoneNumber,
                            flipFunction: () => this.setState(prevstate => ({ enablePhoneNumber: !prevstate.enablePhoneNumber }))
                        },
                        {
                            title: "Resume",
                            enabled: this.state.enableResume,
                            flipFunction: () => this.setState(prevstate => ({ enableResume: !prevstate.enableResume }))
                        },
                        {
                            title: "Cover Letter",
                            enabled: this.state.enableCoverLetter,
                            flipFunction: () => this.setState(prevstate => ({ enableCoverLetter: !prevstate.enableCoverLetter }))
                        }
                    ]}
                />
                <FormForm
                    sectionTitle="Links"
                    isEditing={this.state.isEditingLinksForm}
                    flipIsEditing={() => this.setState(prevstate => ({ isEditingLinksForm: !prevstate.isEditingLinksForm }))}
                    saveAction={() => { this.saveLinks() }}
                    checkboxes={[
                        {
                            title: "LinkedIn",
                            enabled: this.state.enableLinkedIn,
                            flipFunction: () => this.setState(prevstate => ({ enableLinkedIn: !prevstate.enableLinkedIn }))
                        },
                        {
                            title: "Portfolio",
                            enabled: this.state.enablePortfolio,
                            flipFunction: () => this.setState(prevstate => ({ enablePortfolio: !prevstate.enablePortfolio }))
                        },
                        {
                            title: "GitHub",
                            enabled: this.state.enableGitHub,
                            flipFunction: () => this.setState(prevstate => ({ enableGitHub: !prevstate.enableGitHub }))
                        },
                        {
                            title: "Twitter",
                            enabled: this.state.enableTwitter,
                            flipFunction: () => this.setState(prevstate => ({ enableTwitter: !prevstate.enableTwitter }))
                        }
                    ]}
                />
                <FormForm
                    sectionTitle="Other Sections"
                    isEditing={this.state.isEditingOtherSectionsForm}
                    flipIsEditing={() => this.setState(prevstate => ({ isEditingOtherSectionsForm: !prevstate.isEditingOtherSectionsForm }))}
                    saveAction={() => { this.saveOtherSections() }}
                    checkboxes={[
                        {
                            title: "Work Eligibility Questions",
                            enabled: this.state.enableWorkEligibility,
                            flipFunction: () => this.setState(prevstate => ({ enableWorkEligibility: !prevstate.enableWorkEligibility }))
                        },
                        {
                            title: "U.S. Equal Opportunity Employment Opportunity Questions",
                            enabled: this.state.enableEEO,
                            flipFunction: () => this.setState(prevstate => ({ enableEEO: !prevstate.enableEEO }))
                        }
                    ]}
                />
            </div>
        )
    }

    renderPublish() {
        return (
            <div>
                <PublishPanel
                    publishClicked={() => { }}
                    previewClicked={() => { this.previewClicked() }}
                />
            </div>
        )
    }

    renderSection() {
        if (this.state.activeSection === EditableJobPostSection.PostDetails) {
            return this.renderPostDetails();
        } else if (this.state.activeSection === EditableJobPostSection.JobInfo) {
            return this.renderJobInfo();
        } else if (this.state.activeSection === EditableJobPostSection.Forms) {
            return this.renderForms();
        } else if (this.state.activeSection === EditableJobPostSection.Publish) {
            return this.renderPublish();
        } else {
            return null;
        }
    }

    setSection(section: EditableJobPostSection) {
        this.setState({
            activeSection: section
        });
    }

    previewClicked() {
        window.open(`/preview/${this.props.postId}`);
    }

    renderHeader() {
        return (
            <div className={styles.HeaderContainer}>
                <div className={styles.HeaderContentContainer}>
                    <div className={styles.HeaderLeft}>
                        <h1 className={styles.PageTitle}>New Job Post</h1>
                        <div className={styles.NavContainer}>
                            <p
                                className={`${styles.NavItem} ${this.state.activeSection == EditableJobPostSection.PostDetails && styles.ActiveNavItem}`}
                                onClick={() => { this.setSection(EditableJobPostSection.PostDetails) }}>
                                Post Details</p>
                            <p
                                className={`${styles.NavItem} ${this.state.activeSection == EditableJobPostSection.JobInfo && styles.ActiveNavItem}`}
                                onClick={() => { this.setSection(EditableJobPostSection.JobInfo) }}>
                                Job Info</p>
                            <p
                                className={`${styles.NavItem} ${this.state.activeSection == EditableJobPostSection.Forms && styles.ActiveNavItem}`}
                                onClick={() => { this.setSection(EditableJobPostSection.Forms) }}>
                                Forms</p>
                            <p
                                className={`${styles.NavItem} ${this.state.activeSection == EditableJobPostSection.Publish && styles.ActiveNavItem}`}
                                onClick={() => { this.setSection(EditableJobPostSection.Publish) }}>
                                Publish
              </p>
                        </div>
                    </div>
                    <div className={styles.HeaderRight}>
                        <StyledButton
                            text="PREVIEW JOB POST"
                            action={() => { this.previewClicked() }}
                            size={ButtonSize.S}
                            style={ButtonStyle.Tertiary}
                            leftIcon="/link-out-icon-white.png"
                            rounded
                        />
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className={styles.PageContainer}>
                <PageHead />
                <Sidebar activePage={Page.Jobs} />
                <div className={styles.MainContainer}>
                    <LogoutButton />
                    {this.renderHeader()}
                    <div className={styles.ContentContainer}>
                        {this.renderSection()}
                        <div className={styles.Spacer2} />
                        <PrevNextNav
                            currSection={this.state.activeSection}
                            setSection={(val: EditableJobPostSection) => this.setSection(val)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(EditableJobPost);
