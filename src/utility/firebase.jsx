import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import {} from "firebase/compat/firestore";
import {} from "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5rfNP5tvkH6OVZRkHEM7OltW_jybano8",
  authDomain: "clone-3bcb2.firebaseapp.com",
  projectId: "clone-3bcb2",
  storageBucket: "clone-3bcb2.firebasestorage.app",
  messagingSenderId: "1794711638",
  appId: "1:1794711638:web:7abb23d32597f54d69dbf7",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
