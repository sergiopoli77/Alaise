// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu7m8JnCVL90_56cFrQJfLjTWw6dFuOek",
  authDomain: "alaise-mobile.firebaseapp.com",
  projectId: "alaise-mobile",
  storageBucket: "alaise-mobile.firebasestorage.app",
  messagingSenderId: "1034399444678",
  appId: "1:1034399444678:web:4df753e0b04e7e4fddb1c7"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth: Auth = getAuth(app);

export { app, auth };