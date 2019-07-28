import React, { useEffect, useState, useContext } from 'react';
import "./App.css";
import firebase from "firebase";
import LinearProgress from '@material-ui/core/LinearProgress';

import NoteMe from "./components/NoteMe";
import { AuthContext } from "./components/contexts/AuthContext";

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	const { setUserEmail } = useContext(AuthContext);

	useEffect(() => {
        firebase.auth().onAuthStateChanged((authenticated) => {
            if(authenticated) {
				setAuthenticated(true);
				setUserEmail(firebase.auth().currentUser.email);
			} else {
				setAuthenticated(false);
			}
			setLoading(false);
		});
    }, [])

	return loading ? <LinearProgress /> : <NoteMe authenticated = { authenticated } />
}

export default App;
