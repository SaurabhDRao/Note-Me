import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../../utils';

const SidebarItem = ({ note, index, classes, selectedNoteIndex, selectNote, deleteNote }) => {
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
                    onClick = { () => selectNote(note, index) }
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

export default withStyles(styles)(SidebarItem);