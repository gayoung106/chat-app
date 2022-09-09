// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6ig515oZpFK1csAAJipRarDtUEEH9awQ",
  authDomain: "chat-app-e1806.firebaseapp.com",
  projectId: "chat-app-e1806",
  storageBucket: "chat-app-e1806.appspot.com",
  messagingSenderId: "494711631614",
  appId: "1:494711631614:web:a0e4f3428170deaf52bfaf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
