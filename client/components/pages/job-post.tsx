import styles from '../../styles/components/pages/job-post.module.scss';
import PageHead from '../organisms/page-head';
import JobHeader from '../organisms/job-header';
import JobPostSection from '../molecules/job-post-section';
import StyledButton, { ButtonSize, ButtonStyle } from '../atoms/styled-button'
import Footer from '../organisms/footer';

interface MyProps {
    postId: string | string[] // TODO: why would the router return a string aray for a path param?
}

const longtext1 = `The Google Cloud Platform team helps customers transform and evolve their business through the use of Google’s global network, web-scale data centers and software infrastructure. As part of an entrepreneurial team in this rapidly growing business, you will help shape the future of businesses of all sizes use technology to connect with customers, employees and partners.

As part of the Customer Engineering organization in Google Cloud, Enterprise Architects lead cross-functional teams of experts to help customers design, plan, implement, and govern enterprise cloud strategies

The Google Cloud Enterprise Architect role is the definition of our most senior hybrid technical and business advisor. In this role, you will demonstrate executive level qualities, lead the conversation and direct the execution of the Sales team by combining both technical vision and business insight. As an Enterprise Architect, you will partner heavily with Value Engineering in order to articulate the true total value of each technical solution and the overall business partnership with Google Cloud.`

const longtext2 = `Minimum:
• Bachelor's degree in Computer Science, a related technical field, or equivalent practical experience
• Experience in cloud computing (e.g., applications, infrastructure, storage, platforms, data), as well as cloud market and competitive dynamics.
• 10 years of experience as an enterprise architect in either a cloud computing environment or equivalent experience in a customer-facing role.

Preferred:
• Experience building, architecting, designing, and implementing highly-distributed global cloud-based systems. Experience in network infrastructure, security, data, or application development.
• Experience with structured Enterprise Architecture practices, hybrid cloud deployments, and on-premise-to-cloud migration deployments and roadmaps.
• Knowledge of technology solutions and ability to learn and work with emerging technologies, methodologies, and solutions in the Cloud/IT technology space.
• Understanding of large-scale computing solutions and the enterprise technology buying and evaluation process.
• Ability to collaborate across organizational boundaries, build relationships, and achieve broader organizational goals.
• Ability to deliver results and work cross-functionally. Ability to engage/influence audiences and identify expansion engagements.`


const longtext3 = `• Build a trusted advisory relationship with strategic accounts and engage with Architects, VP engineering, CTO and CIO, and identify customer priorities, technical objections, and design strategies encompassing the entire Google ecosystem to deliver business value and resolve blockers.

• Provide domain expertise around public cloud and enterprise technology, and effectively promote Google Cloud with customers, at conferences, and online.

• Make recommendations on integration strategies, enterprise architectures, platforms, and application infrastructure required to successfully implement a complete solution providing best practice advice to customers to optimize Google Cloud effectiveness.

• Manage the holistic enterprise architecture relationship with customers by collaborating with specialists, product management, engineering, and more.

• Travel to customer sites, conferences, and other related events up to ~50%.`

const dummySectionData = [
    {
        title: "About the job",
        text: longtext1
    },
    {
        title: "Qualifications",
        text: longtext2
    },
    {
        title: "Responsibilities",
        text: longtext3
    }
]

export default function JobPost(props: MyProps) {
    return (
        <div className={styles.Container}>
            <PageHead />
            <JobHeader
                company="Google"
                title="Principle Software Engineer"
                location="Culver City, CA"
                department="Engineering"
                isFullTime={true}
            />
            <div className={styles.ContentContainer}>
                {dummySectionData.map((item, i) => {
                    return (
                        <JobPostSection
                            key={i}
                            title={item.title}
                            text={item.text}
                        />
                    )
                })}
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
            <Footer />
        </div>
    )
}
