import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhfgp8DYvSI2F__EWpAqPKp5mAzor-lWY",
  authDomain: "rapchik-dfb64.firebaseapp.com",
  projectId: "rapchik-dfb64",
  storageBucket: "rapchik-dfb64.appspot.com",
  messagingSenderId: "308475441459",
  appId: "1:308475441459:web:7e3fa87271a9e65f6d4e46",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
