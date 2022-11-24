import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function SignUpComponent({onClose, onSignUpSuccess}) {
  const [usernameField, setUsernameField] = useState("")
  const [emailField, setEmailField] = useState("")
  const [passwordField, setPasswordField] = useState("")
  const [firstNameField, setFirstNameField] = useState("")
  const [lastNameField, setLastNameField] = useState("")
  
  function handleSignUp(){
      var axios = require('axios');
      var data = JSON.stringify({
        "firstName": firstNameField,
        "lastName": lastNameField,
        "email": emailField,
        "password": passwordField,
        "username": usernameField,
        "disabled": 0,
        "isAdmin": 0
      });
      
      var config = {
        method: 'post',
        url: 'http://127.0.0.1:8080/api/v1/users/add',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        handleLoginAfterSignUp()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleLoginAfterSignUp(){
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
            onSignUpSuccess.call(this)
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
            value={firstNameField}
            onChange={(e) => setFirstNameField(e.target.value)}
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            value={lastNameField}
            onChange={(e) => setLastNameField(e.target.value)}
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            value={emailField}
            onChange={(e) => setEmailField(e.target.value)}
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            value={usernameField}
            onChange={(e) => setUsernameField(e.target.value)}
            margin="dense"
            id="username"
            label="Username"
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
          <Button onClick={handleSignUp}>Sign Up</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}