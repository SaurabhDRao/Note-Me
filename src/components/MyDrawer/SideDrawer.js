import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import SideDrawerItem from "./SideDrawerItem";

export default function SideDrawer(props) {
    const { classes, open, handleDrawerClose, theme, notes, selectedNoteIndex } = props;
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

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </div>
            <Divider />
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
                        <SideDrawerItem
                            note = { note }
                            index = { index }
                            selectedNoteIndex = { selectedNoteIndex }
                            selectNote = { selectNote }
                            deleteNote = { deleteNote }
                            classes = { classes }
                        />
                        <Divider />
                    </div>
                ))
            }
            </List>
        </Drawer>
    )
}
