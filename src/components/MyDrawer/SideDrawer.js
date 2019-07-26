import React, { useState, useEffect, useContext } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';

import { NoteContext } from "../contexts/NoteContext";
import { AuthContext } from "../contexts/AuthContext";

import SideDrawerItem from "./SideDrawerItem";

export default function SideDrawer(props) {
    const { classes, mobileOpen, handleDrawerToggle, theme, container  } = props;
    const [addingNote, setAddingNote] = useState(false);
    const [title, setTitle] = useState(null);
    const [notes, setNotes] = useState([]);

    const { getNotes, selectedNoteIndex } = useContext(NoteContext);
    const { signOut } = useContext(AuthContext);

    useEffect(() => {
        getNotes().then(res => setNotes(res));
    }, [])

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

    const signOutUser = () => {
        signOut().then(res => props.history.push("/"));
    }

    const drawer = (
        <div>
            <div className={classes.toolbar}>
                <Button
                    onClick = { signOutUser }
                    variant="contained" 
                    color="secondary" 
                    className={classes.button}
                >
                    Sign out
                </Button>
            </div>
            <Divider />
            <Button
                onClick = { newNoteBtnClick }
                variant="contained" 
                color="primary" 
                className={classes.button}
            >
            { addingNote ? "Cancel" : "New Note" }
            </Button>
            {
                addingNote ? (
                    <div>
                        <TextField
                            className={classes.textField}
                            type="text"
                            margin="normal"
                            variant="outlined"
                            label = "Note title"
                            onKeyUp = { (e) => setTitle(e.target.value) }
                        />
                        <Button
                            variant="contained" 
                            color="primary" 
                            className={classes.button}
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
        </div>
    );

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true,
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
      </nav>
    )
}
