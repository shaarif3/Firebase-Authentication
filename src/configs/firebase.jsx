import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  collection,
  setDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1aw2IeAtzySctjxKvtINf3z2FcEjk5eU",
  authDomain: "learning-deab3.firebaseapp.com",
  projectId: "learning-deab3",
  storageBucket: "learning-deab3.appspot.com",
  messagingSenderId: "333806509862",
  appId: "1:333806509862:web:72d7ec3bc1c37626e96be7",
  measurementId: "${config.measurementId}",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser,
  db,
  doc,
  getDoc,
  addDoc,
  collection,
  setDoc
};
