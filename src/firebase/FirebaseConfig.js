// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUp7OCI6aCjvewpAX79xN2jYS99bO4JKc",
  authDomain: "infrafoam-blog.firebaseapp.com",
  projectId: "infrafoam-blog",
  storageBucket: "infrafoam-blog.appspot.com",
  messagingSenderId: "116960004974",
  appId: "1:116960004974:web:9e41dc327ee11ac8554f7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {fireDb, auth, storage}