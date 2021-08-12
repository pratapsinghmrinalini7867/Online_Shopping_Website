import React,{useState} from 'react';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField} from '@material-ui/core';

function Login(){
    const [adminemail, setAdminEmail] = useState('');
    const [adminpassword, setAdminPassword] = useState('');

    function formSubmit(){
        localStorage.setItem('token',adminemail);

        Axios.post('http://localhost:1000/adminlogin',{
            Email: adminemail,
            Password: adminpassword
        }).then(function(succ){
            if(succ.data == true)
                // alert("data found");
                window.location.href = "/dashboard";
            else
                alert("Invalid user email or password");
        })
    }

    return(
        <>
        <Grid lg={4} className="box">
            <Card>
            <h1>Admin Login</h1>
                <CardContent>
                    <TextField id="outlined-basic" fullWidth label="Enter your email" onChange={(event) => {setAdminEmail(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField id="standard-basic" fullWidth label="Enter your password" onChange={(event) => {setAdminPassword(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <Button variant="contained" className="btn" fullWidth color="primary" onClick={formSubmit}>Submit</Button>
                </CardContent>
                <CardContent  className="link">
                    <a href="/forgotpass">Forgot password!</a>
                </CardContent>
            </Card>
        </Grid>
        </>
    );
}

export default Login;