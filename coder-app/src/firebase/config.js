// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVSYtZCNxZUNBZhpSQPbuluJfrp4JdUgo",
  authDomain: "mercaditofree-eec94.firebaseapp.com",
  projectId: "mercaditofree-eec94",
  storageBucket: "mercaditofree-eec94.appspot.com",
  messagingSenderId: "811852797654",
  appId: "1:811852797654:web:22294c4a3dc9fde246db77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}