import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField, Table, TableCell, TableBody, TableRow, TableHead} from '@material-ui/core';
import { AccountCircle, Clear } from '@material-ui/icons';
import shopping from './images/shopping.png';


function Bag(){
    const [userorders, setUserorders] = useState([]);
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');


    const token = localStorage.getItem('token');
    
    // if(token == null)
    // {
    //     window.location.href = '/empty'; 
    // }


    function getUserOrders(){
        Axios.post('http://localhost:30/getuserorders',{Email:token}).then(function(succ){
                setUserorders(succ.data);
        })
    }

    useEffect(() => {
        getUserOrders();
    }, [])

    function login(){
        window.location.href = '/login';
    }

    function getuserdata(){
        Axios.post('http://localhost:30/getuserdata',{email:token}).then(function(succ){
                setName(succ.data.Name);
                setContact(succ.data.Contact);
        })
    }

    useEffect(() => {
        getuserdata();
    }, [])

    function Logout(){
        localStorage.removeItem('token');
        window.location.href="/login";
    }

    return(
        <>
        <Grid lg={12} className="bagbox">
            <Grid lg={4} xs={12} className="bag1">
                <Card >
                    <CardContent className="photo">
                        <AccountCircle id="photo" />
                    </CardContent>
                    <CardContent style={{fontWeight: '500'}}>
                        <TextField id="outlined-basic"  fullWidth variant="outlined" label="Name" value={name} />
                    </CardContent>
                    <CardContent>
                        <TextField id="outlined-basic" fullWidth  variant="outlined" label="Email" value={token} />
                    </CardContent>
                    <CardContent>
                        <TextField id="outlined-basic" fullWidth  variant="outlined" label="Contact" value={contact} />
                    </CardContent>
                    <CardContent>
                        <Button variant="outlined" fullWidth color="secondary">EDIT PROFILE</Button>
                        <Button variant="contained" fullWidth color="secondary" onClick={Logout}>Logout</Button>
                    </CardContent>
                </Card>

            </Grid>

            {token? 
            <Grid ld={8} xs={12} className="bag">
                <h1>Previous Orders</h1>

            {userorders.map((product) => (
            <Card className="cartbox" key={product._id}>
                <CardContent className="cartimgcont">
                    <img className="cartimg" src={product.Prod_img} />
                </CardContent>
                <Grid lg={12} className="cartDtls">
                    <CardContent className="cartname">
                        {product.Prod_Name}
                    </CardContent>
                    <CardContent>
                        {product.Prod_Brand}
                    </CardContent>
                    <CardContent className="cartctgy">
                        {product.Prod_Description}
                    </CardContent>
                    <CardContent className="cartprice">
                        Rs.{product.Prod_MRP}
                    </CardContent>
                </Grid>
            </Card>
             ))}
            </Grid>
             :<Grid lg={8} className="bag grid">
                 <img id="emptyimg" src={shopping} alt="Nothing in Orders" />
                 <h3 style={{marginTop: "-60px"}}>You have not login. Please Login first</h3>
                 <Button color="secondary" variant="outlined" onClick={login}>Login</Button>
                 </Grid>
            }
        </Grid>
        
        </>
    );
}

export default Bag;