// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARLoQuHnEX5jYkTg0g0pgC4iSKAsFULzY",
  authDomain: "cookbook-25975.firebaseapp.com",
  projectId: "cookbook-25975",
  storageBucket: "cookbook-25975.appspot.com",
  messagingSenderId: "927835319272",
  appId: "1:927835319272:web:ff31d9da63a910905c125d",
  measurementId: "G-S1QLTVHGMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);