import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function LoginComponent({onClose, onLoginSuccess}) {
    const [usernameField, setUsernameField] = useState("")
    const [passwordField, setPasswordField] = useState("")

    const handleLogin = (e) => {
        var validator = require("email-validator")
        if(validator.validate(usernameField)){
            loginWithEmail()
        } else {
            loginWithUsername()
        }
    }

    function loginWithEmail(){
        var axios = require('axios');
        var data = JSON.stringify({
          "email": usernameField,
          "password": passwordField
        });
        
        var config = {
          method: 'post',
          url: 'http://127.0.0.1:8080/api/v1/users/login/email',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          const data = response.data
          localStorage.setItem("userJWT", data.token)
          localStorage.setItem("userLoggedIn", true)
          onLoginSuccess.call(this)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function loginWithUsername(){
        var axios = require('axios');
        var data = JSON.stringify({
        "username": usernameField,
        "password": passwordField
        });

        var config = {
        method: 'post',
        url: 'http://127.0.0.1:8080/api/v1/users/login/username',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            const data = response.data
            localStorage.setItem("userJWT", data.token)
            localStorage.setItem("userLoggedIn", true)
            onLoginSuccess.call(this)
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    return (
        <div>
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>Log In</DialogTitle>
            <DialogContent>
            <DialogContentText style={{marginRight: "250px"}}>
                Welcome back, dear user.
            </DialogContentText>
            <TextField
                autoFocus
                value={usernameField}
                onChange={(e) => setUsernameField(e.target.value)}
                margin="dense"
                id="name"
                label="Username or Email"
                type="text"
                fullWidth
                variant="standard"
            />
            <TextField
                value={passwordField}
                onChange={(e) => setPasswordField(e.target.value)}
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleLogin}>Log In</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
    }