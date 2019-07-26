import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Container } from '@material-ui/core';

import Login from "../Login";
import Register from "../Register";

const Landing = ({ classes }) => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <Container maxWidth = "sm" style = {{ marginTop: "75px" }}>
            { showLogin && <Login classes = { classes } setShowLogin = { setShowLogin } /> }
            { !showLogin && <Register classes = { classes } setShowLogin = { setShowLogin } /> }
        </Container>
    )
}

export default withStyles(styles)(Landing);