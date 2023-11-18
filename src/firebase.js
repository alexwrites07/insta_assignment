// src/firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfebOWmMS-C5UwSOatnF6KeWO-naQGAug",
  authDomain: "zzqwesa.firebaseapp.com",
  databaseURL: "https://zzqwesa-default-rtdb.firebaseio.com",
  projectId: "zzqwesa",
  storageBucket: "zzqwesa.appspot.com",
  messagingSenderId: "83977301588",
  appId: "1:83977301588:web:25d6fe7a66009ce91a47c1"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth };
