import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField} from '@material-ui/core';

function Address(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const [del_name, setDel_Name] = useState('');
    const [del_city, setDel_City] = useState('');
    const [del_address, setDel_Address] = useState('');
    const [del_contact, setDel_Contact] = useState('');

    const token = localStorage.getItem('token');
    if(token == null)
        window.location.href = '/login';

    function formSubmit(){
        Axios.post('http://localhost:30/address',{
            Name:del_name,
            City:del_city,
            Address:del_address,
            Contact:del_contact,
            uid:token
        }).then(function(succ){
            if(succ.data == true)
                window.location.href = "/payment";
            else
                alert("Data not inserted");
        })
    }

    return(
        <>
        <Grid lg={4} className="box">
            <Card>
                <h1>Address Details</h1>
                <CardContent>
                    <TextField fullWidth label="Enter your name" onChange={(event) => {setDel_Name(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Enter your contact" onChange={(event) => {setDel_Contact(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Enter your city" onChange={(event) => {setDel_City(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Enter your address" onChange={(event) => {setDel_Address(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <Button variant="contained" fullWidth className="btn" color="primary" onClick={formSubmit}>PROCEED TO PAY</Button>
                </CardContent>
            </Card>
        </Grid>
        </>
    );
}

export default Address;