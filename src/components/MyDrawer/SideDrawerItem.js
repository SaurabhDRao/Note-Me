import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../utils';

export default function SideDrawerItem({ note, index, classes, selectedNoteIndex, _selectNote, deleteNote }) {
    const deleteThisNote = (note) => {
        if(window.confirm(`Are you sure you want to delete ${ note.title }?`)) {
            deleteNote(note);
        }
    }

    return (
        <div key = { index }>
            <ListItem
                className = { classes.listItem }
                selected = { selectedNoteIndex === index }
                alignItems = "flex-start"
            >
                <div 
                    className = { classes.textSelection }
                    onClick = { () => _selectNote(note, index) }
                >
                    <ListItemText
                        primary = { note.title }
                        secondary = { removeHTMLTags(note.body.substring(0, 30)) + "..." }
                    ></ListItemText>
                </div>
                <DeleteIcon
                    onClick = { () => deleteThisNote(note) }
                    className = { classes.deleteIcon }
                ></DeleteIcon>
            </ListItem>
        </div>
    )
}
