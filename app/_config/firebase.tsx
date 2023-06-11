// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFsmGJ3zKXg9v2-rYAUKQiDTfl7Cl0KnY",
  authDomain: "going2wedding-6b935.firebaseapp.com",
  projectId: "going2wedding-6b935",
  storageBucket: "going2wedding-6b935.appspot.com",
  messagingSenderId: "173803550108",
  appId: "1:173803550108:web:37a7deb37e2596c1a44459",
  measurementId: "G-PWBXMJ88GQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
