// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_MKHQoSfcDqAgT2fU8OftzbwxAnuufqg",
  authDomain: "react-port-mahfooz.firebaseapp.com",
  projectId: "react-port-mahfooz",
  storageBucket: "react-port-mahfooz.appspot.com",
  messagingSenderId: "598040949510",
  appId: "1:598040949510:web:f680ab40b5069d75132487",
  measurementId: "G-559GM7Z8RZ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()

