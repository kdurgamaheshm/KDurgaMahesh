// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDX8VNi7327i7F3LUFCrlqBMwqM6L_jPKI",
    authDomain: "portfolio-contact-f6c78.firebaseapp.com",
    projectId: "portfolio-contact-f6c78",
    storageBucket: "portfolio-contact-f6c78.appspot.com",
    messagingSenderId: "239473374852",
    appId: "1:239473374852:web:72b6300ea3eae42539b4d1",
    measurementId: "G-P7RKDZL3BL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
