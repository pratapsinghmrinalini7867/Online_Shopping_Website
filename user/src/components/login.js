import React,{useState} from 'react';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField} from '@material-ui/core';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function formSubmit(){
        
        Axios.post('http://localhost:30/userlogin',{
            Email: email,
            Password: password
        }).then(function(succ){
            if(succ.data == true){
                localStorage.setItem('token',email);
                window.location.href = "/";
            }
            else
                alert("Invalid user email or password");
        })
    }

    return(
        <>
        <Grid lg={4} className="box">
            <Card>
            <h1>Login</h1>
                <CardContent>
                    <TextField id="outlined-basic" fullWidth className="select" label="Enter your email" onChange={(event) => {setEmail(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField id="standard-basic" fullWidth className="select" label="Enter your password" onChange={(event) => {setPassword(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <Button variant="contained" fullWidth className="btn" color="primary" onClick={formSubmit}>CONTINUE</Button>
                </CardContent>
                <CardContent>
                    <p>Forgot password<a href="/forgotpass" style={{color:"rgb(247, 77, 182)"}}>Click here!</a></p>
                </CardContent>
            </Card>
        </Grid>
        </>
    );
}

export default Login;