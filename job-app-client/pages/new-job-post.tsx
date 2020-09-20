import { Component } from 'react';
import styles from '../styles/pages/new-job-post.module.scss';
import PageHead from '../components/functional/page-head';
import Sidebar from '../components/sidebar';
import { Page } from '../util/pages';
import LogoutButton from '../components/logout-button';
import JobInfoForm from '../components/job-info-form';
import PostDetailsForm from '../components/post-details-form';
import BigAddButton from '../components/big-add-button';
import StyledButton from '../components/styled-button';
import FormForm from '../components/form-form';
import PublishPanel from '../components/publish-panel';
import { NewJobPostSection, ButtonStyle, ButtonSize } from '../util/enums';
import PrevNextNav from '../components/prev-next-nav';

interface JobInfoSectionState {
  isEditing: boolean,
  sectionTitle: string,
  description: string
}

interface MyProps { }

interface MyState {
  activeSection: NewJobPostSection,
  isEditingPostDetailsForm: boolean,
  positionTitle: string,
  location: string,
  department: string,
  jobInfoSections: Array<JobInfoSectionState>,
  isEditingApplicantInfoForm: boolean,
  isEditingLinksForm: boolean,
  isEditingOtherSectionsForm: boolean,
  requestName: boolean,
  requestEmail: boolean,
  requestPhoneNumber: boolean,
  requestResume: boolean,
  requestCoverLetter: boolean,
  requestLinkLinkedIn: boolean,
  requestLinkPortfolio: boolean,
  requestLinkGitHub: boolean,
  requestLinkTwitter: boolean,
  requestWorkEligibility: boolean,
  requestEEO: boolean
}

export default class NewJobPost extends Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: NewJobPostSection.PostDetails,
      isEditingPostDetailsForm: true,
      positionTitle: '',
      location: '',
      department: '',
      jobInfoSections: [
        {
          isEditing: true,
          sectionTitle: 'About the job',
          description: 'This is where you would put the job description...'
        }
      ],
      isEditingApplicantInfoForm: false,
      isEditingLinksForm: false,
      isEditingOtherSectionsForm: false,
      // The following are all for what forms are requested
      requestName: true,
      requestEmail: true,
      requestPhoneNumber: true,
      requestResume: true,
      requestCoverLetter: false,
      requestLinkLinkedIn: true,
      requestLinkPortfolio: true,
      requestLinkGitHub: true,
      requestLinkTwitter: false,
      requestWorkEligibility: true,
      requestEEO: true
    };
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
        sectionTitle: '',
        description: ''
      })
      return {
        jobInfoSections: newJobInfoSections
      };
    });
  }

  deleteJobInfoSection(index) {
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
                sectionTitle={item.sectionTitle}
                setSectionTitle={(val: any) => this.setJobInfoSectionProperty(index, "sectionTitle", val)}
                description={item.description}
                setDescription={(val: any) => this.setJobInfoSectionProperty(index, "description", val)}
                delete={() => this.deleteJobInfoSection(index)}
              />
            )
          })
        }
        <div className={styles.BigAddButtonContainer}>
          <BigAddButton
            text="ADD A SECTION"
            action={() => this.addNewJobInfoSection()}
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
          checkboxes={[
            {
              title: "Name",
              enabled: this.state.requestName,
              flipFunction: () => this.setState(prevstate => ({ requestName: !prevstate.requestName }))
            },
            {
              title: "Email",
              enabled: this.state.requestEmail,
              flipFunction: () => this.setState(prevstate => ({ requestEmail: !prevstate.requestEmail }))
            },
            {
              title: "Phone Number",
              enabled: this.state.requestPhoneNumber,
              flipFunction: () => this.setState(prevstate => ({ requestPhoneNumber: !prevstate.requestPhoneNumber }))
            },
            {
              title: "Resume",
              enabled: this.state.requestResume,
              flipFunction: () => this.setState(prevstate => ({ requestResume: !prevstate.requestResume }))
            },
            {
              title: "Cover Letter",
              enabled: this.state.requestCoverLetter,
              flipFunction: () => this.setState(prevstate => ({ requestCoverLetter: !prevstate.requestCoverLetter }))
            }
          ]}
        />
        <FormForm
          sectionTitle="Links"
          isEditing={this.state.isEditingLinksForm}
          flipIsEditing={() => this.setState(prevstate => ({ isEditingLinksForm: !prevstate.isEditingLinksForm }))}
          checkboxes={[
            {
              title: "LinkedIn",
              enabled: this.state.requestLinkLinkedIn,
              flipFunction: () => this.setState(prevstate => ({ requestLinkLinkedIn: !prevstate.requestLinkLinkedIn }))
            },
            {
              title: "Portfolio",
              enabled: this.state.requestLinkPortfolio,
              flipFunction: () => this.setState(prevstate => ({ requestLinkPortfolio: !prevstate.requestLinkPortfolio }))
            },
            {
              title: "GitHub",
              enabled: this.state.requestLinkGitHub,
              flipFunction: () => this.setState(prevstate => ({ requestLinkGitHub: !prevstate.requestLinkGitHub }))
            },
            {
              title: "Twitter",
              enabled: this.state.requestLinkTwitter,
              flipFunction: () => this.setState(prevstate => ({ requestLinkTwitter: !prevstate.requestLinkTwitter }))
            }
          ]}
        />
        <FormForm
          sectionTitle="Other Sections"
          isEditing={this.state.isEditingOtherSectionsForm}
          flipIsEditing={() => this.setState(prevstate => ({ isEditingOtherSectionsForm: !prevstate.isEditingOtherSectionsForm }))}
          checkboxes={[
            {
              title: "Work Eligibility Questions",
              enabled: this.state.requestWorkEligibility,
              flipFunction: () => this.setState(prevstate => ({ requestWorkEligibility: !prevstate.requestWorkEligibility }))
            },
            {
              title: "U.S. Equal Opportunity Employment Opportunity Questions",
              enabled: this.state.requestEEO,
              flipFunction: () => this.setState(prevstate => ({ requestEEO: !prevstate.requestEEO }))
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
          previewClicked={() => { }}
        />
      </div>
    )
  }

  renderSection() {
    if (this.state.activeSection === NewJobPostSection.PostDetails) {
      return this.renderPostDetails();
    } else if (this.state.activeSection === NewJobPostSection.JobInfo) {
      return this.renderJobInfo();
    } else if (this.state.activeSection === NewJobPostSection.Forms) {
      return this.renderForms();
    } else if (this.state.activeSection === NewJobPostSection.Publish) {
      return this.renderPublish();
    } else {
      return null;
    }
  }

  setSection(section: NewJobPostSection) {
    this.setState({
      activeSection: section
    });
  }

  renderHeader() {
    return (
      <div className={styles.HeaderContainer}>
        <div className={styles.HeaderContentContainer}>
          <div className={styles.HeaderLeft}>
            <h1 className={styles.PageTitle}>New Job Post</h1>
            <div className={styles.NavContainer}>
              <p
                className={`${styles.NavItem} ${this.state.activeSection == NewJobPostSection.PostDetails && styles.ActiveNavItem}`}
                onClick={() => { this.setSection(NewJobPostSection.PostDetails) }}>
                Post Details</p>
              <p
                className={`${styles.NavItem} ${this.state.activeSection == NewJobPostSection.JobInfo && styles.ActiveNavItem}`}
                onClick={() => { this.setSection(NewJobPostSection.JobInfo) }}>
                Job Info</p>
              <p
                className={`${styles.NavItem} ${this.state.activeSection == NewJobPostSection.Forms && styles.ActiveNavItem}`}
                onClick={() => { this.setSection(NewJobPostSection.Forms) }}>
                Forms</p>
              <p
                className={`${styles.NavItem} ${this.state.activeSection == NewJobPostSection.Publish && styles.ActiveNavItem}`}
                onClick={() => { this.setSection(NewJobPostSection.Publish) }}>
                Publish
              </p>
            </div>
          </div>
          <div className={styles.HeaderRight}>
            <StyledButton
              text="PREVIEW JOB POST"
              action={() => { }}
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
              setSection={(val: NewJobPostSection) => this.setSection(val)}
            />
          </div>
        </div>
      </div>
    );
  }
}
