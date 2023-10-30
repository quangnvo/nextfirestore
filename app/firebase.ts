import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq6_9R10gwC2WWOn2MrMmSUWmwMP3X2xg",
  authDomain: "expense-tracker-9828f.firebaseapp.com",
  projectId: "expense-tracker-9828f",
  storageBucket: "expense-tracker-9828f.appspot.com",
  messagingSenderId: "548994979630",
  appId: "1:548994979630:web:dd2a92bc86143c15dc4cbf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
