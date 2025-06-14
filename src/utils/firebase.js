// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg_owqv2vQx8TbRaANhgSzsvexF5mrOTQ",
  authDomain: "netflixgpt-70f70.firebaseapp.com",
  projectId: "netflixgpt-70f70",
  storageBucket: "netflixgpt-70f70.firebasestorage.app",
  messagingSenderId: "597091619982",
  appId: "1:597091619982:web:40ebebb330961d96cb25df",
  measurementId: "G-68FZHVLXDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app);