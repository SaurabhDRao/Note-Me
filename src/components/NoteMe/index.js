import React, { useState, useEffect } from 'react';

import NoteContextProvider from "../contexts/NoteContext";

import firebase from "firebase";

import MyDrawer from '../MyDrawer';

export default function NoteMe() {
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
		<div className = "app-container">
			<NoteContextProvider>
				<MyDrawer
					selectedNoteIndex = { selectedNoteIndex }
					notes = { notes } 
					bounds={'.app-container'}
				/>
			</NoteContextProvider>
		</div>
	);
}