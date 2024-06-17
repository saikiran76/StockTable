import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9HOKGNBt9cMHFV4OMRdb8dKhFVkeyiYk",
  authDomain: "stocks-4756c.firebaseapp.com",
  projectId: "stocks-4756c",
  storageBucket: "stocks-4756c.appspot.com",
  messagingSenderId: "475786712101",
  appId: "1:475786712101:web:3f2a46d954324d8bb89bcc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);