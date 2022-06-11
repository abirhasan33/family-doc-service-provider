// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBofK20zYe9M7fE-fdtHOYpHYUpmsDHcbk",
  authDomain: "family-doctor-3c691.firebaseapp.com",
  projectId: "family-doctor-3c691",
  storageBucket: "family-doctor-3c691.appspot.com",
  messagingSenderId: "712281111020",
  appId: "1:712281111020:web:014c8c638ae56ee65368c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
