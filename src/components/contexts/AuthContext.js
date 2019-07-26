import React, { createContext, useState } from 'react';
import firebase from "firebase";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    const register = (email, password) => new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                resolve(user);
            }).catch(err => reject(err));
    });

    return (
        <AuthContext.Provider 
            value = {{
                isLoggedIn,
                user,
                register
            }}
        >
            { props.children }
        </AuthContext.Provider>
    )
}
