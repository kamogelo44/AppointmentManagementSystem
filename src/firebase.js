// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBGBTYYNaH3_4nvNK2OGOKRLiHhInmmhDE",
  authDomain: "appointment-management-s-d8ede.firebaseapp.com",
  projectId: "appointment-management-s-d8ede",
  storageBucket: "appointment-management-s-d8ede.firebasestorage.app",
  messagingSenderId: "520041965165",
  appId: "1:520041965165:web:9cfba28540494390a00164",
  measurementId: "G-NWDDK1Q004"

}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
