import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from './sidebarItem';

const Sidebar = ({ notes, classes, selectedNoteIndex }) => {
    const [addingNote, setAddingNote] = useState(false);
    const [title, setTitle] = useState(null);

    const newNoteBtnClick = () => {
        setAddingNote(!addingNote);
        setTitle(null);
    }

    const newNote = () => {
        console.log(title);
    }

    const selectNote = () => {
        console.log("SELECT NOTE");
    }

    const deleteNote = () => {
        console.log("DELETE NOTE");
    }

    return notes ? (
        <div className = { classes.sidebarContainer }>
            <Button
                onClick = { newNoteBtnClick }
                className = { classes.newNoteBtn }
            >
            { addingNote ? "Cancel" : "New Note" }
            </Button>
            {
                addingNote ? (
                    <div>
                        <input 
                            type="text" 
                            className = { classes.newNoteInput }
                            placeholder = "Enter note title"
                            onKeyUp = { (e) => setTitle(e.target.value) }
                            />
                        <Button
                            className = { classes.newNoteSubmitBtn }
                            onClick = { newNote }
                        >
                            Create Note
                        </Button>
                    </div>
                ) : null
            }
            <List>
                {
                    notes.map((note, index) => (
                        <div key = { index }>
                            <SidebarItem
                                note = { note }
                                index = { index }
                                selectedNoteIndex = { selectedNoteIndex }
                                selectNote = { selectNote }
                                deleteNote = { deleteNote }
                            />
                            <Divider />
                        </div>
                    ))
                }
            </List>
        </div>
    ) : (<div></div>)
}

export default withStyles(styles)(Sidebar);