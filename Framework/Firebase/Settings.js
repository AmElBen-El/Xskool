// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRvxKfGbE7jKWOY0-czFErbJHlDZw7Cmw",
  authDomain: "bills-cb148.firebaseapp.com",
  projectId: "bills-cb148",
  storageBucket: "bills-cb148.appspot.com",
  messagingSenderId: "451902921479",
  appId: "1:451902921479:web:14c926c3848df246e383a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
//export const db = initializeFirestore(app, { experimentalForceLongPolling:true},);
export const db = initializeFirestore(app, { experimentalForceLongPolling:true},);
export const storage = getStorage(app);