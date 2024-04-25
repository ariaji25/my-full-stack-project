import firebase from "firebase/compat/app";
import "firebase/compat/auth"

class FirebaseService {
    constructor() {
        firebase.initializeApp(
            {
                apiKey: "AIzaSyDAhuFpOm98SwvLuO059tSmEUGYxSDuB1U",
                authDomain: "my-next-app-c6fb4.firebaseapp.com",
                projectId: "my-next-app-c6fb4",
                storageBucket: "my-next-app-c6fb4.appspot.com",
                messagingSenderId: "778097839824",
                appId: "1:778097839824:web:554641ede2903de4ecd8d5",
                measurementId: "G-7HJP888SMS"
            }
        )
    }

    getApp() {
        return firebase
    }

    async signUp(data: SignUpRequest): Promise<string | undefined> {
        try {
            const credential = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            return credential.user?.getIdToken()
        } catch(error: any) {
            console.log(error)
            throw new Error(`Failed to sign up, `)
        }
    }

    async signIn(data: SingInRequest): Promise<string | undefined> {
        try {
            const credential = await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            return credential.user?.getIdToken()
        } catch(error: any) {
            throw new Error(`Failed to sign in, `)
        }
    }
}

const firebaseService = new FirebaseService();
export default firebaseService;