import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwDc-TTYbE10CVc6aNTqj_XqTQRhau0C8",
  authDomain: "the-arcade-stick-shop.firebaseapp.com",
  projectId: "the-arcade-stick-shop",
  storageBucket: "the-arcade-stick-shop.appspot.com",
  messagingSenderId: "544621218079",
  appId: "1:544621218079:web:699a5c9f7eaa16acbe482a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
