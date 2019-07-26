import React, { useEffect, useState } from 'react';
import "./App.css";
import firebase from "firebase";

import NoteMe from "./components/NoteMe";
import AuthContextProvider from "./components/contexts/AuthContext";

function App() {
	const [authenticated, setAuthenticated] = useState(false); 

	useEffect(() => {
        firebase.auth().onAuthStateChanged((authenticated) => {
            authenticated
                ? setAuthenticated(true)
                : setAuthenticated(false);
		});
    }, [])

	return (
		<AuthContextProvider>
			<NoteMe authenticated = { authenticated } />
		</AuthContextProvider>
	);
}

export default App;
