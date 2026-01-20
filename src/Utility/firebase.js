// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// for authenticating services
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGPORwVFh7N8Qx3G2rooKWsJGiJ2utyRM",
  authDomain: "clone-1a118.firebaseapp.com",
  projectId: "clone-1a118",
  storageBucket: "clone-1a118.firebasestorage.app",
  messagingSenderId: "611584039268",
  appId: "1:611584039268:web:d3a714fc3c01cc641f8271",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firebase.firestore();

// npm install -g firebase-tools
//  firebase login,init, deploy
