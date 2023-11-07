import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjFfKSLlmMjohyltNXR2uYX-9b4avUHV0",
  authDomain: "hotelbooking-f727f.firebaseapp.com",
  projectId: "hotelbooking-f727f",
  storageBucket: "hotelbooking-f727f.appspot.com",
  messagingSenderId: "362247646903",
  appId: "1:362247646903:web:af44310547d266b5786732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
