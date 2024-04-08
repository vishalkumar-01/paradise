// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqIMTHk3QlQWdMugCzDCXKVB-k6hBcatk",
  authDomain: "paradise-96e06.firebaseapp.com",
  projectId: "paradise-96e06",
  storageBucket: "paradise-96e06.appspot.com",
  messagingSenderId: "233408676055",
  appId: "1:233408676055:web:e0190e5c8cf33e2c36f092"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }