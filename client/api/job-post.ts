export const createBlankJobPostForCompany = (company: string, companyId: string): Promise<string> => {
    const body = JSON.stringify({
        details: {
            company,
            company_id: companyId
        }
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body
    };

    const path = 'http://localhost:4000/posts/';

    return new Promise((res, rej) => {
        fetch(path, requestOptions)
            .then(response => response.text())
            .then(result => {
                const json = JSON.parse(result);
                res(json.id);
            })
            .catch(error => {
                rej(error);
            });
    });
}

export const getJobPost = (postId: string | string[]): Promise<any> => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const path = `http://localhost:4000/posts/${postId}`;

    return new Promise((res, rej) => {
        fetch(path, requestOptions)
            .then(response => response.text())
            .then(result => {
                const json = JSON.parse(result);
                res(json.data);
            })
            .catch(error => {
                rej(error);
            });
    });
}

export const deleteJobPost = (postId: string | string[]): Promise<any> => {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const path = `http://localhost:4000/posts/${postId}`;

    return new Promise((res, rej) => {
        fetch(path, requestOptions)
            .then(response => response.text())
            .then(result => {
                const json = JSON.parse(result);
                res(json.data);
            })
            .catch(error => {
                rej(error);
            });
    });
}

export const getJobPostsForCompany = (companyId: string): Promise<any> => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const path = `http://localhost:4000/posts/company/${companyId}`;

    return new Promise((res, rej) => {
        fetch(path, requestOptions)
            .then(response => response.text())
            .then(result => {
                const json = JSON.parse(result);
                res(json.data);
            })
            .catch(error => {
                rej(error);
            });
    });
}

interface PatchDetailsParams {
    details: {
        company: any;
        title: any;
        location: any;
        department: any;
    }
}

interface PatchApplicantInfoParams {
    applicantInfo: {
        enable_cover_letter: boolean;
        enable_email: boolean;
        enable_name: boolean;
        enable_phone_number: boolean;
        enable_resume: boolean;
    }
}

interface PatchLinksParams {
    links: {
        enable_github: boolean;
        enable_linkedin: boolean;
        enable_portfolio: boolean;
        enable_twitter: boolean;
    }
}

interface PatchOtherSectionsParams {
    otherSections: {
        enable_work_eligibility: boolean;
        enable_eeo: boolean;
    }
}

interface PatchJobInfoParams {
    jobInfo: Array<{
        title: string;
        text: string;
    }>
}

export const patchJobPost = (postId: string | string[],
    body: PatchDetailsParams | PatchApplicantInfoParams | PatchLinksParams |
        PatchOtherSectionsParams | PatchJobInfoParams): Promise<void> => {
    const patchBody = JSON.stringify(body);

    const requestOptions = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: patchBody
    };

    const path = `http://localhost:4000/posts/${postId}`;

    return new Promise((res, rej) => {
        fetch(path, requestOptions)
            .then(response => response.text())
            .then(result => {
                const json = JSON.parse(result);
                res();
            })
            .catch(error => {
                rej(error);
            });
    });
}
