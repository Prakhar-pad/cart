import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBaiiI2sVzAbGH3xJiCVudEbSeZIoOaGjY",
  authDomain: "cart-90b3a.firebaseapp.com",
  projectId: "cart-90b3a",
  storageBucket: "cart-90b3a.appspot.com",
  messagingSenderId: "924834427665",
  appId: "1:924834427665:web:ea28481c7f738ba45a92b0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

