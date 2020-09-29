import express from 'express';
import { validationResult } from 'express-validator';

const validate = (req: express.Request, res: express.Response, next: () => any) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next();
    }

    return res.status(400).json({
        errors: errors.array(),
    })
}

export default validate;
