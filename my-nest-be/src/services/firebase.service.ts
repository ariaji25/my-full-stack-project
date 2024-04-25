import * as admin from 'firebase-admin';
const serviceAccount = require("../../firebase.cert.json");
export function initFirebaseAdmin () {
    if (!admin.apps.length) {
        admin.initializeApp({  
            credential: admin.credential.cert(serviceAccount),
        });
    }
}