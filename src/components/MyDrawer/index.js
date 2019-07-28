import React, { useState, useContext } from 'react';
import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import TopBar from "./TopBar";
import SideDrawer from "./SideDrawer";
import Editor from '../Editor';

import { NoteContext } from "../contexts/NoteContext";

const MyDrawer = ({ classes, history }) => {
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const { selectedNote } = useContext(NoteContext);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            
            <TopBar
                classes = { classes }
                handleDrawerToggle = { handleDrawerToggle }
            />

            <SideDrawer 
                classes = { classes } 
                mobileOpen = { mobileOpen }
                handleDrawerToggle = { handleDrawerToggle }
                theme = { theme }
                history = { history }
            />

            <main className={classes.content}>
                <div className={classes.toolbar} />
                {
                    selectedNote ? <Editor /> : (
                        <Typography style = {{ textAlign: "center", marginTop: "20%", color: "#aaa" }} variant="h5" gutterBottom>
                            Open a note or create one
                        </Typography>
                    )
                }
            </main>
        </div>
    );
}

export default withStyles(styles)(MyDrawer);