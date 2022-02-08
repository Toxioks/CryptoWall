import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS9pEXfP9qbt6EVMztxA8LP-kSfsvPSgI",
    authDomain: "contact-form-b7fd1.firebaseapp.com",
    projectId: "contact-form-b7fd1",
    storageBucket: "contact-form-b7fd1.appspot.com",
    messagingSenderId: "362378892433",
    appId: "1:362378892433:web:f2b515b796cd47fdb91b30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);