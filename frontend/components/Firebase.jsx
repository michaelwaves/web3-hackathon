// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQLGBi9mhBbO3r2B7T8lDllWgDc-FTbHE",
    authDomain: "trademint-aabe6.firebaseapp.com",
    projectId: "trademint-aabe6",
    storageBucket: "trademint-aabe6.appspot.com",
    messagingSenderId: "103410411322",
    appId: "1:103410411322:web:e50c1edf1ce9b5d312d203",
    measurementId: "G-TEZF0W8BPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);