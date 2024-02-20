// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "littlebitofeverything.firebaseapp.com",
  projectId: "littlebitofeverything",
  storageBucket: "littlebitofeverything.appspot.com",
  messagingSenderId: "1036149048855",
  appId: "1:1036149048855:web:6a6beb6037d55eb71e3e52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


 