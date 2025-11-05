// firebase.js
// ===> Gebruik dit in combinatie met Firebase SDK v8 (die al in index.html staat)

const firebaseConfig = {
  apiKey: "AIzaSyBD2JdjGaCifjkm90LPKEESZOVCbfyZ9-o",
  authDomain: "de-slimste-mens-finale.firebaseapp.com",
  databaseURL: "https://de-slimste-mens-finale-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "de-slimste-mens-finale",
  storageBucket: "de-slimste-mens-finale.firebasestorage.app",
  messagingSenderId: "156720778427",
  appId: "1:156720778427:web:a6e2666746bd95fba06d9e",
  measurementId: "G-LC0H8PJMVN"
};

// Initialiseer Firebase (v8-stijl)
firebase.initializeApp(firebaseConfig);

// Verbind met Realtime Database
const db = firebase.database();
