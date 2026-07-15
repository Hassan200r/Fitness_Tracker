import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZPNZi1Xnc5y0pVuREo0CU5HFWv3IRQUw",
  authDomain: "itnessapp-977ae.firebaseapp.com",
  projectId: "itnessapp-977ae",
  storageBucket: "itnessapp-977ae.firebasestorage.app",
  messagingSenderId: "781718707333",
  appId: "1:781718707333:web:feeee70637173fc7115dec"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
