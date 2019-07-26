import React, { createContext, useState, useEffect } from 'react';
import firebase from "firebase";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
    const [userEmail, setUserEmail] = useState("");

    const register = (email, password) => new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                setUserEmail(email);
                resolve(user);
            }).catch(err => reject(err));
    });

    const login = (email, password) => new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                setUserEmail(email);
                resolve(user);
            }).catch(err => reject(err));
    });

    const signOut = () => new Promise((resolve, reject) => {
        firebase.auth().signOut();
        setUserEmail("");
        resolve("Done");
    });

    return (
        <AuthContext.Provider 
            value = {{
                userEmail,
                setUserEmail,
                register,
                login,
                signOut
            }}
        >
            { props.children }
        </AuthContext.Provider>
    )
}
