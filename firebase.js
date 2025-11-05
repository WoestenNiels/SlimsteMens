// Firebase SDK v9+ (modulaire stijl)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBD2JdjGaCifjkm90LPKEESZOVCbfyZ9-o",
  authDomain: "de-slimste-mens-finale.firebaseapp.com",
  databaseURL: "https://de-slimste-mens-finale-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "de-slimste-mens-finale",
  storageBucket: "de-slimste-mens-finale.appspot.com",
  messagingSenderId: "156720778427",
  appId: "1:156720778427:web:a6e2666746bd95fba06d9e",
  measurementId: "G-LC0H8PJMVN"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, push, onValue, update };

