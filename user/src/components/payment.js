import React, {useState} from 'react';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField, MenuItem, Select, InputLabel, FormControl} from '@material-ui/core';

function Payment(){

    const [method, setMethod] = useState('');

    const token = localStorage.getItem('token');

    var payment;

    const handleChange = (event) => {
        setMethod(event.target.value);
      };

    if(method == "Credit Card" || method == "Debit Card"){
        payment = 'true';
    }
    
    function formSubmit(){
        Axios.post('http://localhost:30/placeorder',{
            uid:token,
            Payment_type: method
        }).then(function(succ){
            if(succ.data == true){
                alert('Thank You :)');
                window.location.href = "/";
            }
            else
                alert("Oops! Payment not recieved");
        })
    }

    return(
        <>
        <Grid lg={4} className="box">
            <Grid lg={12}>
                <Card>
                    <CardContent>
                    <h1>Payment Details</h1>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">Payment method</InputLabel>
                            <Select label="Payment Method" value={Payment} onChange={handleChange}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="Credit Card">Credit Card</MenuItem>
                            <MenuItem value="Debit Card">Debit Card</MenuItem>
                            <MenuItem value="Cash On Delivery">Cash On Delivery</MenuItem>
                            </Select>
                        </FormControl>
                    </CardContent>
                </Card>
            </Grid>
            {payment? 
            <Card  style={{marginTop: "20px"}}>
                <h1>Card Details</h1>
                <CardContent>
                    <TextField fullWidth id="outlined-basic" variant="outlined" label="Name On Card" />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Amount" type="number" variant="outlined" />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Card No." type="number" variant="outlined"/>
                </CardContent>
                <CardContent className="datebox">
                <FormControl className="dateb" variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">MM</InputLabel>
                            <Select label="MM">
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            </Select>
                        </FormControl>
                </CardContent>
                <CardContent className="datebox">
                <FormControl className="dateb" variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">YY</InputLabel>
                            <Select label="YY">
                            <MenuItem value={2031}>2031</MenuItem>
                            <MenuItem value={2030}>2030</MenuItem>
                            <MenuItem value={2029}>2029</MenuItem>
                            <MenuItem value={2028}>2028</MenuItem>
                            <MenuItem value={2027}>2027</MenuItem>
                            <MenuItem value={2026}>2026</MenuItem>
                            <MenuItem value={2025}>2025</MenuItem>
                            <MenuItem value={2024}>2024</MenuItem>
                            <MenuItem value={2023}>2023</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                            </Select>
                        </FormControl>
                </CardContent>
                <CardContent className="datebox">
                    <TextField label="CVC" className="date" type="number" variant="outlined"/>
                </CardContent>
                <CardContent>
                    <Button variant="contained" fullWidth className="btn" color="primary" onClick={formSubmit}>PAY AMOUNT</Button>
                </CardContent>
            </Card>
            : <Card style={{marginTop: "20px"}}>
                <CardContent>
                    <TextField variant="outlined" label="Payment Method" fullWidth value="Cash On Delivery" />
                </CardContent>
                <CardContent>
                    <Button variant="contained" fullWidth color="secondary" onClick={formSubmit}>PROCEED</Button>
                </CardContent>
                </Card>}
        </Grid>
        </>
    );
}

export default Payment;