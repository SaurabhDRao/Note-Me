import React, { useState, useEffect } from 'react';
import "./App.css";

import firebase from "firebase";

import Editor from "./components/editor";
import Sidebar from "./components/sidebar";

function App() {
	const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
	const [selectedNote, setSelectedNote] = useState(null);
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		firebase.firestore().collection("notes").onSnapshot(serverUpdate => {
			const _notes = serverUpdate.docs.map(_doc => {
				const data = _doc.data();
				data["id"] = _doc.id;
				return data;
			});
			console.log(_notes);
			setNotes(_notes);
		});
	}, []);

	return (
		<div className="app-container">
			<Sidebar
			selectedNoteIndex = { selectedNoteIndex }
			notes = { notes }
			 />
			<Editor />
		</div>
	);
}

export default App;
