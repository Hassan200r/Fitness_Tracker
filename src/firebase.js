// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZPNZi1Xnc5y0pVuREo0CU5HFWv3IRQUw",
    authDomain: "itnessapp-977ae.firebaseapp.com",
    projectId: "itnessapp-977ae",
    storageBucket: "itnessapp-977ae.firebasestorage.app",
    messagingSenderId: "781718707333",
    appId: "1:781718707333:web:feeee70637173fc7115dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export them so they can be used in other files
export { app, db, auth, storage };