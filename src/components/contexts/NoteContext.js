import React, { createContext, useState, useContext, useEffect } from 'react';
import firebase from "firebase";

import { AuthContext } from "../contexts/AuthContext";

export const NoteContext = createContext();

export default function NoteContextProvider(props) {
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
	const [selectedNote, setSelectedNote] = useState(null);
    const [notes, setNotes] = useState([]);

    const { userEmail } = useContext(AuthContext);

    useEffect(() => {
        firebase.firestore().collection("notes").where("email", "==", userEmail).onSnapshot(serverUpdate => {
			const _notes = serverUpdate.docs.map(_doc => {
				const data = _doc.data();
				data["id"] = _doc.id;
				return data;
			});
			console.log(_notes);
            setNotes(_notes);
		});
    }, [userEmail]);

    const updateNote = (id, noteObj) =>  {
        firebase.firestore().collection("notes").doc(id).update({
            title: noteObj.title,
            body: noteObj.body,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    const addNewNote = async (title) =>  {
        const noteObj = {
            title: title,
            body: "",
            email: userEmail
        }
        const newFromDb = await firebase.firestore().collection("notes").add({ 
            ...noteObj,
            timestamp: firebase.firestore.FieldValue.serverTimestamp() 
        });
        const newId = newFromDb.id;
        await setNotes([...notes, noteObj]);
        const newNoteIndex = notes.indexOf(notes.filter(_note => _note.id === newId)[0]);
        setSelectedNote(notes[newNoteIndex]);
        setSelectedNoteIndex(newNoteIndex);
    };

    const removeNote = (id) => new Promise((resolve, reject) => {
        firebase.firestore().collection("notes").doc(id).delete();
        resolve("Note deleted!");
    });

    const selectNote = (note, index) => {
        setSelectedNoteIndex(index);
        setSelectedNote(note);
    };

    return (
        <NoteContext.Provider 
            value = {{ 
                notes, 
                selectedNote,
                updateNote,
                addNewNote,
                removeNote,
                selectedNoteIndex, 
                selectNote,
                setSelectedNote,
                setSelectedNoteIndex
            }}
        >
            { props.children }
        </NoteContext.Provider>
    )
}
