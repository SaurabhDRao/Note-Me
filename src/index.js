import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebaseConfig from "./firebaseConfig";

import AuthContextProvider from "./components/contexts/AuthContext";

const firebase = require("firebase");
require("firebase/firestore");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<AuthContextProvider><App /></AuthContextProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
