// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from  "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAigioPeTjrXwLL6eOfYjq2UNKKn2NhRz8",
  authDomain: "login-app-256cc.firebaseapp.com",
  projectId: "login-app-256cc",
  storageBucket: "login-app-256cc.appspot.com",
  messagingSenderId: "424881194681",
  appId: "1:424881194681:web:dbe743b29568a0aa9c3d68",
  measurementId: "G-G7YTYDQSWG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
