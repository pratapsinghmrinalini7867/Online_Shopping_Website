import React, {useState} from 'react';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField} from '@material-ui/core';

function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');

    function formSubmit(){
        localStorage.setItem('token',email);

        Axios.post('http://localhost:30/insertdata',{
            Name:name,
            Email:email,
            Password:password,
            Contact:contact
        }).then(function(succ){
            if(succ)
                window.location.href = "/";
            else
                alert("Data not inserted");
        })
    }

    return(
        <>
        <Grid lg={4} className="box">
            <Card>
                <h1>Register</h1>
                <CardContent>
                    <TextField fullWidth label="Enter your name" onChange={(event) => {setName(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Enter your email" onChange={(event) => {setEmail(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Enter your password" onChange={(event) => {setPassword(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Enter your contact" onChange={(event) => {setContact(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <Button variant="contained" fullWidth className="btn" color="primary" onClick={formSubmit}>Submit</Button>
                </CardContent>
            </Card>
        </Grid>
        </>
    );
}

export default Register;