import React, { createContext, useState, useContext } from 'react';
import firebase from "firebase";

import { AuthContext } from "../contexts/AuthContext";

export const NoteContext = createContext();

export default function NoteContextProvider(props) {
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
	const [selectedNote, setSelectedNote] = useState(null);
    const [notes, setNotes] = useState([]);

    const { userEmail } = useContext(AuthContext);
    
    const getNotes = () => new Promise((resolve, reject) => {
        firebase.firestore().collection("notes").where("email", "==", userEmail).onSnapshot(serverUpdate => {
			const _notes = serverUpdate.docs.map(_doc => {
				const data = _doc.data();
				data["id"] = _doc.id;
				return data;
			});
			console.log(_notes);
            setNotes(_notes);
            resolve(_notes);
		});
    });

    return (
        <NoteContext.Provider 
            value = {{ 
                notes, 
                selectedNote, 
                selectedNoteIndex, 
                getNotes 
            }}
        >
            { props.children }
        </NoteContext.Provider>
    )
}
