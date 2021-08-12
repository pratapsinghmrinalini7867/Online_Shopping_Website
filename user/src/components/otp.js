import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField} from '@material-ui/core';

function SubmitOTP(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const history = useHistory();
    const [otp, setOtp] = useState('');

    function checkOTP(){
        if(otp == '')
            alert('Please fill your OTP');
        else if(otp.length != 6)
            alert('Please fill valid OTP');
        else{
            Axios.post('http://localhost:30/submitOTP',{
                OTP:otp,
            }).then(function(succ){
                if(succ.data == 'error')
                    alert("Sorry OTP is not valid");
                else{
                    var path = '/newpassword/?id=' + id;
                    history.push(path);
                }
            })
        }
    }

    return(
        <>
            <Grid lg={4} className="box">
                <Card>
                <h1>Forgot Password</h1>
                    <CardContent>
                        <TextField id="outlined-basic" type="number" fullWidth className="select" label="Enter OTP" onChange={(event) => {setOtp(event.target.value)}} />
                    </CardContent>
                    <CardContent>
                        <Button variant="contained" fullWidth className="btn" color="primary" onClick={checkOTP}>Send OTP</Button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}

export default SubmitOTP;