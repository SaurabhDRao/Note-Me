import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import TopBar from "./TopBar";
import SideDrawer from "./SideDrawer";
import Editor from '../editor';

const MyDrawer = ({ notes, classes, selectedNoteIndex }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            
            <TopBar
                classes = { classes }
                handleDrawerOpen = { handleDrawerOpen }
                open = { open }
            />

            <SideDrawer 
                classes = { classes } 
                open = { open }
                handleDrawerClose = { handleDrawerClose }
                theme = { theme }
                selectedNoteIndex = { selectedNoteIndex }
				notes = { notes } 
            />

            <main
                className={clsx(classes.content, {
                [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <Editor />
            </main>
        </div>
    );
}

export default withStyles(styles)(MyDrawer);