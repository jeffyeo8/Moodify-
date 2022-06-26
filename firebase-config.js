import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrDhViHfCEsgR7nblHZ14NNIZrXfWBLrM",
  authDomain: "radiant-wall-346204.firebaseapp.com",
  projectId: "radiant-wall-346204",
  storageBucket: "radiant-wall-346204.appspot.com",
  messagingSenderId: "458206786916",
  appId: "1:458206786916:web:19471852e8f3e18bbab671",
  measurementId: "G-38T07WC71P"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
