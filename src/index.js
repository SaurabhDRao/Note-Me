import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase");
require("firebase/firestore");
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDXr-jKwpZvDexhw5Kc9iABnsbFNfryAaE",
    authDomain: "note-me-f6b4a.firebaseapp.com",
    databaseURL: "https://note-me-f6b4a.firebaseio.com",
    projectId: "note-me-f6b4a",
    storageBucket: "note-me-f6b4a.appspot.com",
    messagingSenderId: "48163254578",
    appId: "1:48163254578:web:e696e2c57d03d128"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
