import express from 'express';
import { getDB, DBCollection } from '../db';
import { JobPost, toJobPost, toJobPostPatch, jobPostValidationRules } from '../models/jobPost';
import validator from '../validator';

const router = express.Router();

// Create job post
router.post('/', jobPostValidationRules, validator, async (req: express.Request, res: express.Response) => {    
    const newJobPost: JobPost = toJobPost(req.body);
    const docRef = getDB().collection(DBCollection.JobPosts).doc();

    try {
        await docRef.set(newJobPost);
    } catch(error) {
        console.log(error)
        return res.status(500).send({
            error
        });
    }

    return res.status(200).send({
        message: "Document created",
        id: docRef.id,
        path: docRef.path
    });
});

// Update an existing job post
router.patch('/:id', jobPostValidationRules, validator, async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    const docRef = getDB().collection(DBCollection.JobPosts).doc(id);
    const patchBody = toJobPostPatch(req.body);

    try {
        await docRef.update(patchBody);
    } catch(error) {
        const responseCode = error.code === 5 ? 404 : 500;

        return res.status(responseCode).send({
            error
        });
    }

    return res.status(200).send({
        message: "Document updated",
        id: docRef.id,
        path: docRef.path
    });
});

// Get a job post
router.get('/:id', async (req: express.Request, res: express.Response) => {
    const id = req.params.id;

    const docRef = getDB().collection(DBCollection.JobPosts).doc(id);
    let snapshot: FirebaseFirestore.DocumentSnapshot;
    let data: FirebaseFirestore.DocumentData;

    try {
        snapshot = await docRef.get();
        data = snapshot.data();

        if (data === undefined) {
            return res.status(404).send({
                message: 'Document not found'
            });
        }

    } catch(error) {
        const responseCode = error.code === 5 ? 404 : 500;

        return res.status(responseCode).send({
            error
        });
    }

    console.log('data:', snapshot);

    return res.send({
        message: "Document retrieved.",
        id: docRef.id,
        path: docRef.path,
        data
    });
});

// Get all job posts for a specific company id
router.get('/company/:id', async (req: express.Request, res: express.Response) => {
    const id = req.params.id;

    const postsRef = getDB().collection(DBCollection.JobPosts);
    let snapshot: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>;
    let data: FirebaseFirestore.DocumentData[];

    try {
        snapshot = await postsRef.where('details.company_id', '==', id).get();

        if (snapshot.empty) {
            return res.status(404).send({
                message: 'No matching documents'
            });
        }

        data = snapshot.docs.map(item => {
            return {
                id: item.id,
                data: item.data()
            }
        });

    } catch(error) {
        const responseCode = error.code === 5 ? 404 : 500;

        return res.status(responseCode).send({
            error
        });
    }

    return res.send({
        message: "Documents retrieved.",
        data
    });
});

export default router;
