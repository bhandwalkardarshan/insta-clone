// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJDRNYzztHsWm_JxPQbW5GgJs2OCEFQVk",
  authDomain: "insta-clone-fd424.firebaseapp.com",
  projectId: "insta-clone-fd424",
  storageBucket: "insta-clone-fd424.appspot.com",
  messagingSenderId: "259179966650",
  appId: "1:259179966650:web:a5b0cd570ac23655ec9283",
  measurementId: "G-55WH15GJLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, auth, firestore, storage}
