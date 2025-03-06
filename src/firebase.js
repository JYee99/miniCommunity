// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAm6yMosZYEY2w2Q6QsMLCLaC75ZBAaG0",
  authDomain: "minicommunity-d7f97.firebaseapp.com",
  projectId: "minicommunity-d7f97",
  storageBucket: "minicommunity-d7f97.firebasestorage.app",
  messagingSenderId: "97185470403",
  appId: "1:97185470403:web:ae1d944e0d59284d438f76",
  measurementId: "G-TL27VRFJ3H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
