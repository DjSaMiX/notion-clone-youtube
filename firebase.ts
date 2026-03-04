import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAzNOkyEH9eylGPJONQ8EmyvxnJoBMRGfc",
  authDomain: "notion-clone-76ac8.firebaseapp.com",
  projectId: "notion-clone-76ac8",
  storageBucket: "notion-clone-76ac8.firebasestorage.app",
  messagingSenderId: "26462537202",
  appId: "1:26462537202:web:339339eb06d173f511976b"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db= getFirestore(app);

export { db };