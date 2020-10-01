import { body } from 'express-validator';

interface JobPostStatus {
    is_published?: boolean;
    is_active?: boolean;
}

interface JobPostDetails {
    company?: string;
    company_id?: string;
    company_logo_src?: string;
    title?: string;
    location?: string;
    department?: string;
    is_remote?: boolean;
    is_full_time?: boolean;
}

interface JobPostJobInfoSection {
    title?: string;
    text?: string;
}

interface JobPostApplicantInfo {
    enable_name?: boolean;
    enable_email?: boolean;
    enable_phone_number?: boolean;
    enable_resume?: boolean;
    enable_cover_letter?: boolean;
}

interface JobPostLinks {
    enable_linkedin?: boolean
    enable_portfolio?: boolean
    enable_twitter?: boolean
    enable_github?: boolean
}

interface JobPostOtherSections {
    enable_work_eligibility?: boolean;
    enable_eeo?: boolean;
}

export interface JobPost {
    status?: JobPostStatus;
    details?: JobPostDetails;
    jobInfo?: JobPostJobInfoSection[];
    applicantInfo?: JobPostApplicantInfo;
    links?: JobPostLinks;
    otherSections?: JobPostOtherSections;
}

// Convert the input body to a JobPost object
export const toJobPost = (input: any): JobPost => {
    const jobPost: JobPost = {
        status: {
            is_published: input.status != undefined && input.status.is_published != undefined ? input.status.is_published : false,
            is_active: input.status != undefined && input.status.is_active != undefined ? input.status.is_active : true,
        },
        details: {
            company: input.details != undefined && input.details.company != undefined ? input.details.company : '',
            company_id: input.details != undefined && input.details.company_id != undefined ? input.details.company_id : '',
            company_logo_src: input.details != undefined && input.details.company_logo_src != undefined ? input.details.company_logo_src : '',
            title: input.details != undefined && input.details.title != undefined ? input.details.title : '',
            location: input.details != undefined && input.details.location != undefined ? input.details.location : '',
            department: input.details != undefined && input.details.department != undefined ? input.details.department : '',
            is_remote: input.details != undefined && input.details.is_remote != undefined ? input.details.is_remote : false,
            is_full_time: input.details != undefined && input.details.is_full_time != undefined ? input.details.is_full_time : true,
        },
        jobInfo: [],
        applicantInfo: {
            enable_name: true,
            enable_email: true,
            enable_phone_number: true,
            enable_resume: true,
            enable_cover_letter: false
        },
        links: {
            enable_linkedin: true,
            enable_portfolio: true,
            enable_twitter: false,
            enable_github: false
        },
        otherSections: {
            enable_work_eligibility: true,
            enable_eeo: true
        }
    }

    return jobPost;
}

export const toJobPostPatch = (input: any): JobPost => {
    const result: any = {};

    if (input.status !== undefined) {
        if (input.status.is_published !== undefined) result["status.is_published"] = input.status.is_published;
        if (input.status.is_active !== undefined) result["status.is_active"] = input.status.is_active;
    }

    if (input.details !== undefined) {
        if (input.details.company !== undefined) result["details.company"] = input.details.company;
        if (input.details.company_id !== undefined) result["details.company_id"] = input.details.company_id;
        if (input.details.company_logo_src !== undefined) result["details.company_logo_src"] = input.details.company_logo_src;
        if (input.details.title !== undefined) result["details.title"] = input.details.title;
        if (input.details.location !== undefined) result["details.location"] = input.details.location;
        if (input.details.department !== undefined) result["details.department"] = input.details.department;
        if (input.details.is_remote !== undefined) result["details.is_remote"] = input.details.is_remote;
        if (input.details.is_full_time !== undefined) result["details.is_full_time"] = input.details.is_full_time;
    }

    if (input.jobInfo !== undefined) {
        result["jobInfo"] = input.jobInfo;
    }

    if (input.applicantInfo !== undefined) {
        if (input.applicantInfo.enable_name !== undefined) result["applicantInfo.enable_name"] = input.applicantInfo.enable_name;
        if (input.applicantInfo.enable_email !== undefined) result["applicantInfo.enable_email"] = input.applicantInfo.enable_email;
        if (input.applicantInfo.enable_phone_number !== undefined) result["applicantInfo.enable_phone_number"] = input.applicantInfo.enable_phone_number;
        if (input.applicantInfo.enable_resume !== undefined) result["applicantInfo.enable_resume"] = input.applicantInfo.enable_resume;
        if (input.applicantInfo.enable_cover_letter !== undefined) result["applicantInfo.enable_cover_letter"] = input.applicantInfo.enable_cover_letter;
    }

    if (input.links !== undefined) {
        if (input.links.enable_linkedin !== undefined) result["links.enable_linkedin"] = input.links.enable_linkedin;
        if (input.links.enable_portfolio !== undefined) result["links.enable_portfolio"] = input.links.enable_portfolio;
        if (input.links.enable_twitter !== undefined) result["links.enable_twitter"] = input.links.enable_twitter;
        if (input.links.enable_github !== undefined) result["links.enable_github"] = input.links.enable_github;
    }

    if (input.otherSections !== undefined) {
        if (input.otherSections.enable_work_eligibility !== undefined) result["otherSections.enable_work_eligibility"] = input.otherSections.enable_work_eligibility;
        if (input.otherSections.enable_eeo !== undefined) result["otherSections.enable_eeo"] = input.otherSections.enable_eeo;
    }

    return result;
}

export const jobPostValidationRules = [
    body('status.is_published')
        .optional()
        .isBoolean().withMessage("status.is_published must be a boolean."),
    body('status.is_active')
        .optional()
        .isBoolean().withMessage("status.is_active must be a boolean."),
    body('details.company')
        .optional()
        .isString().withMessage("details.company must be a string."),
    body('details.company_id')
        .optional()
        .isString().withMessage("details.company_id must be a string."),
    body('details.company_logo_src')
        .optional()
        .isString().withMessage("details.company_logo_src must be a string."),
    body('details.title')
        .optional()
        .isString().withMessage("details.title must be a string."),
    body('details.location')
        .optional()
        .isString().withMessage("details.location must be a string."),
    body('details.department')
        .optional()
        .isString().withMessage("details.department must be a string."),
    body('details.is_remote')
        .optional()
        .isBoolean().withMessage("details.is_remote must be a boolean."),
    body('details.is_full_time')
        .optional()
        .isBoolean().withMessage("details.is_full_time must be a boolean."),
]
