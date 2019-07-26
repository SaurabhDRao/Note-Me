import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const Login = ({ classes, setShowLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <Button style = {{ marginBottom: "10px" }} color="primary" variant="contained" className={classes.button}>
                Login
            </Button>
            <Divider />
            <div>
                <Button 
                    style = {{ marginTop: "10px" }} 
                    color="secondary" 
                    className={classes.button}
                    onClick = { () => { setShowLogin(false) } }
                >
                    Register
                </Button>
            </div>
        </Paper>
    )
}

export default Login;