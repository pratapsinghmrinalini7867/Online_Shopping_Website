import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField} from '@material-ui/core';

function Forgotpass(){
    const history = useHistory();
    const [email, setEmail] = useState('');

    function SendOTP(){
        Axios.post('http://localhost:30/sendOTP',{
            Email: email,
        }).then(function(succ){
            if(succ.data == 'nomail')
                alert("Sorry! This email is not registered");
            else if(succ.data == 'error')
                alert("Something went Wrong! Try again after sometime");
            else{
                alert("Mail has been send, please check");
                console.log(succ.data._id);
                var path = '/otp/?id='+succ.data._id;
                history.push(path);
            }
        })
    }

    return(
        <>
            <Grid lg={4} className="box">
                <Card>
                <h1>Forgot Password</h1>
                    <CardContent>
                        <TextField id="outlined-basic" fullWidth className="select" label="Enter your email" onChange={(event) => {setEmail(event.target.value)}} />
                    </CardContent>
                    <CardContent>
                        <Button variant="contained" fullWidth className="btn" color="primary" onClick={SendOTP}>Send OTP</Button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}

export default Forgotpass;