// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCjeopM0tFWKfsL6Pxyey24fj24e8_ZB8",
    authDomain: "lesson-4-1a785.firebaseapp.com",
    databaseURL:
        "https://lesson-4-1a785-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lesson-4-1a785",
    storageBucket: "lesson-4-1a785.appspot.com",
    messagingSenderId: "96357397816",
    appId: "1:96357397816:web:cb294ec06e90f2a9e37dcd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const usersRef = ref(db, "users");
