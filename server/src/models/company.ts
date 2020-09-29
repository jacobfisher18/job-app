import { body } from 'express-validator';

export interface Company {
    name: string;
    cities: string[];
    departments: string[];
    logo_src: string;
    email_domain: string;
}

// Convert the request input object to a Company object
export const toCompany = (input: any): Company => {
    return {
        name: input.name,
        cities: [],
        departments: [],
        logo_src: '',
        email_domain: ''
    }
}

export const createCompanyValidationRules = [
    body('name')
        .exists().withMessage("Company name must be supplied.")
        .isString().withMessage("Company name must be a string.")
]
