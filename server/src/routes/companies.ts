import * as express from 'express';
import { getDB, DBCollection } from '../db';
import { Company, toCompany, createCompanyValidationRules } from '../models/company';
import validator from '../validator';

// Constants
const router = express.Router();

/**
* @api {post} /companies Create company
*/
router.post('/', createCompanyValidationRules, validator, async (req: express.Request, res: express.Response) => {
    const newCompany: Company = toCompany(req.body);
    const docRef = getDB().collection(DBCollection.Companies).doc();

    try {
        await docRef.set(newCompany);
    } catch(error) {
        return res.status(500).send({
            error
        });
    }

    res.send({
        message: "Data added to database",
        id: docRef.id,
        path: docRef.path,
        data: newCompany
    });
});

export default router;
