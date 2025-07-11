// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmuknqvN51Ha9Nt8BbepOf4SFaLt55az4",
  authDomain: "shopping-dc31d.firebaseapp.com",
  projectId: "shopping-dc31d",
  storageBucket: "shopping-dc31d.firebasestorage.app",
  messagingSenderId: "670919919884",
  appId: "1:670919919884:web:221c6f02f1026c4d53a129",
  measurementId: "G-08L91F9W7S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
