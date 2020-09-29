import * as admin from 'firebase-admin';
var serviceAccount = require("../firebase-secrets.json")

let db: admin.firestore.Firestore;

export const initDB = (): void => {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://jaba-90e39.firebaseio.com"
    });

    db = admin.firestore();
}

export const getDB = (): admin.firestore.Firestore => {
    if (db) {
        return db;
    } else {
        throw new Error("The db object is null");
    }
}

export enum DBCollection {
    Companies = "companies",
    Users = "users",
    JobPosts = "jobPosts"
}
