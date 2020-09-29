import * as express from 'express';

// Constants
const router = express.Router();

router.get('/', (_req, res) => {
    res.send({
        message: "App is up and running."
    })
})

export default router;
