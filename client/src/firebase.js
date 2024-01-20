// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-87fbc.firebaseapp.com",
  projectId: "mern-estate-87fbc",
  storageBucket: "mern-estate-87fbc.appspot.com",
  messagingSenderId: "1041739254211",
  appId: "1:1041739254211:web:04a1210b05b42eda091576"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);