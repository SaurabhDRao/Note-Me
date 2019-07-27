import React, { useState, useEffect, useContext } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from "../MySnackBarContentWrapper";

import { NoteContext } from "../contexts/NoteContext";
import { AuthContext } from "../contexts/AuthContext";

import SideDrawerItem from "./SideDrawerItem";

export default function SideDrawer(props) {
    const { classes, mobileOpen, handleDrawerToggle, theme, container  } = props;
    const [addingNote, setAddingNote] = useState(false);
    const [title, setTitle] = useState(null);
    const [snackbarContent, setSnackbarContent] = useState("");
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    const { 
        notes, 
        selectedNoteIndex, 
        addNewNote, 
        removeNote, 
        selectNote,
        setSelectedNote,
        setSelectedNoteIndex 
    } = useContext(NoteContext);
    const { signOut, userEmail } = useContext(AuthContext);

    useEffect(() => {
        console.log(userEmail);
    }, [])

    const newNoteBtnClick = () => {
        setAddingNote(!addingNote);
        setTitle(null);
    }

    const newNote = () => {
        console.log(title);
        addNewNote(title);
        setTitle(null);
        setAddingNote(false);
    }

    const _selectNote = (n, i) => {
        console.log("SELECT");
        selectNote(n, i);
    }

    const deleteNote = (note) => {
        const noteIndex = notes.indexOf(note);
        if((selectedNoteIndex === noteIndex) || (notes.length <= 1)) {
            setSelectedNoteIndex(null);
            setSelectedNote(null);
        } else if (notes.length > 1) {
            _selectNote(notes[selectedNoteIndex - 1], selectedNoteIndex - 1) 
        }
        removeNote(note.id)
            .then(res => { setSnackbarContent(res); setOpen(true); })
            .catch(err => { setSnackbarContent(err.message); setOpen(true); });
    }

    const signOutUser = () => {
        signOut().then(res => props.history.push("/"));
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} style = {{ textAlign: "right" }}>
                { userEmail }
                <IconButton key="sign-out" aria-label="sign-out" onClick = { signOutUser } >
                    <ExitToApp style = {{ color: "red" }} />
                </IconButton>
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
                            _selectNote = { _selectNote }
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
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <MySnackbarContentWrapper
                    onClose={handleClose}
                    classes = { classes }
                    variant="error"
                    className={classes.margin}
                    message = { snackbarContent }
                />
            </Snackbar>
      </nav>
    )
}
