import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import {getStorage} from 'firebase/storage'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBr6jEVnvnVBavEwVEjCUVfDh4755Lm2VM",
    authDomain: "diamond-jewelry-348008.firebaseapp.com",
    projectId: "diamond-jewelry-348008",
    storageBucket: "diamond-jewelry-348008.appspot.com",
    messagingSenderId: "633817129267",
    appId: "1:633817129267:web:f7970a87c43b11f6e25e46",
    measurementId: "G-N0NK9RFYW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const storage = getStorage(app)
const fbStorage = firebase.storage();
const fbAuth = firebase.auth;
const fbAuth2 = firebase.default.auth();

export { storage, fbStorage, fbAuth, fbAuth2 }