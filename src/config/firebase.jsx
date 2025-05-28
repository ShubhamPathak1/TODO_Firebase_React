import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"



// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDQlraaMkYt5YnPQ6hb9FKXmCxol55WcPs",
  authDomain: "reactfirebase-1af5b.firebaseapp.com",
  projectId: "reactfirebase-1af5b",
  storageBucket: "reactfirebase-1af5b.firebasestorage.app",
  messagingSenderId: "563053570796",
  appId: "1:563053570796:web:4ea2f5eac8838d0fde53c9",
  measurementId: "G-D31E7L5R8H"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);





// const analytics = getAnalytics(app);