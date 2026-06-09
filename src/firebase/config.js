import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSqQVJl1jm0JUZw8wnnMFt27Xa9TZjIpE",
  authDomain: "paintnumbers-2c99b.firebaseapp.com",
  projectId: "paintnumbers-2c99b",
  storageBucket: "paintnumbers-2c99b.firebasestorage.app",
  messagingSenderId: "185047203794",
  appId: "1:185047203794:web:327c112151543f7a68120b",
  measurementId: "G-H0G9T51440"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
