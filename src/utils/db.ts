// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRESTORE_APP_ID,
  measurementId: process.env.REACT_APP_FIRESTORE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
export const auth = getAuth(app);

export { db };
