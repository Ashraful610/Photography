// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMJSND3vvmhFfENv5vpb9xOq49ISZL9p4",
  authDomain: "assignment-firebase-10.firebaseapp.com",
  projectId: "assignment-firebase-10",
  storageBucket: "assignment-firebase-10.appspot.com",
  messagingSenderId: "356983711188",
  appId: "1:356983711188:web:0c4bb78b41072ae4f5a241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth