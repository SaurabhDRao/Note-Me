import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from "../MySnackBarContentWrapper";
import { AuthContext } from "../contexts/AuthContext";

const Login = ({ classes, setShowLogin, history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    const { login } = useContext(AuthContext);

    const handleClick = () => {
        console.log(email, password);
        login(email, password)
            .then(res => history.push("/noteme"))
            .catch(err => { setError(err.message); setOpen(true); })
    }

    return (
        <Paper style = {{ textAlign: "center", padding: "10px" }}>
            <Typography align = "center" color = "primary" variant="h3" gutterBottom>
                Login
            </Typography>
            <TextField
                label="Email"
                className={classes.textField}
                type="email"
                margin="normal"
                variant="outlined"
                style = {{ width: "90%" }}
                onChange = { (e) => setEmail(e.target.value) }
            />
            <TextField
                label="Password"
                className={classes.textField}
                type="password"
                margin="normal"
                variant="outlined"
                style = {{ width: "90%" }}
                onChange = { (e) => setPassword(e.target.value) }
            />
            <Button 
                style = {{ marginBottom: "10px" }} 
                color="primary" 
                variant="contained" 
                className={classes.button}
                onClick = { handleClick }
            >
                Login
            </Button>
            <Divider />
            <div style = {{ textAlign: "right" }}>
                <Button 
                    style = {{ marginTop: "10px" }} 
                    color="secondary" 
                    className={classes.button}
                    onClick = { () => { setShowLogin(false) } }
                >
                    Register
                </Button>
            </div>
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
                    message = { error }
                />
            </Snackbar>
        </Paper>
    )
}

export default Login;