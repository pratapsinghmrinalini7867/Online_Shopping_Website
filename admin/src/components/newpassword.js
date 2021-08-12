import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField} from '@material-ui/core';

function Newpassword(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const history = useHistory();
    const [newpass, setNewpass] = useState('');
    const [conpass, setConpass] = useState('');
    // const [otp, setOtp] = useState('');

    function newpassword(){
        // console.log(id);
        if(newpass == '' ||conpass == '')
            alert("Please enter password");
        else{
            Axios.post('http://localhost:1000/submitpass',{
                id:id,
                Newpass:newpass
            }).then(function(succ){
                if(succ.data == true){
                    alert("Data updated");
                    var path = '/';
                    history.push(path);
                }
                else
                    alert("Please try again!");
            })
        }
    }

    function checkpass(){
        var btn = document.getElementById('btn');
        if(newpass == conpass)
            btn.style.display = 'block'; 
        else{
            btn.style.display = 'none';
        }
    }

    return(
        <>
            <Grid lg={4} className="box">
                <Card>
                <h1>Forgot Password</h1>
                    <CardContent>
                        <TextField id="outlined-basic" type="number" onKeyUp={checkpass} fullWidth className="select" label="New passowrd" onChange={(event) => {setNewpass(event.target.value)}} />
                    </CardContent>
                    <CardContent>
                        <TextField id="outlined-basic" type="number" onKeyUp={checkpass} fullWidth className="select" label="Confirm password" onChange={(event) => {setConpass(event.target.value)}} />
                    </CardContent>
                    <CardContent>
                        <Button variant="contained" id="btn" fullWidth className="btn" color="primary" onClick={newpassword}>Send OTP</Button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}

export default Newpassword;