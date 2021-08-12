import React , {useState,useEffect} from 'react';
import { Button,CardContent,Card,Grid, Typography } from '@material-ui/core';
import {Clear} from '@material-ui/icons';
import Axios from 'axios';
import shopping from './images/shopping.png';


function Cart(){    
    const token = localStorage.getItem('token');

    const [items, setItems] = useState([]);


    function getitems(){
        Axios.post('http://localhost:30/getitem',{Email:token}).then(function(succ){
            setItems(succ.data);
        })
    }
    useEffect(() => {
        getitems();
    }, [])

    var amount;

    function amt(){
        var price = document.getElementsByClassName('recptprice');
        amount = amount + price;
    }

    function Delete(x){
        // alert('item deleted');
        Axios.post('http://localhost:30/delete',{id:x}).then(function(succ){
            if(succ.data == true)
                alert("Item deleted");
            else
                alert("Error");
        })
    }

    function login(){
        window.location.href = '/login';
    }

    function payAmt(){
        window.location.href = '/address';
    }

    return(
        <>
        {token? 
        <Grid lg={12} className="cart">
            <Grid ld={8} xs={12} className="first">
            {items.map((product) => (
            <Card className="cartbox" key={product._id}>
                <CardContent className="cartimgcont">
                    <img className="cartimg" src={product.Prod_img} />
                </CardContent>
                <Grid lg={12} className="cartDtls">
                    <CardContent className="deleteItm">
                        <Button onClick={() => Delete(product._id)}><Clear /></Button>
                    </CardContent>
                    <CardContent className="cartname">
                        {product.Prod_Name}
                    </CardContent>
                    <CardContent>
                        {product.Prod_Brand}
                    </CardContent>
                    <CardContent className="cartctgy">
                        {product.Prod_Category}
                    </CardContent>
                    <CardContent className="cartsubctgy">
                        {product.Prod_Subcategory}
                    </CardContent>
                    <CardContent className="cartprice">
                        Rs.{product.Prod_MRP}
                    </CardContent>
                </Grid>
            </Card>
        ))}
        </Grid>
            <Grid lg={4} xs={12} className="second">
                <Card className="reciept">
                    <h2>Total Amount</h2>
                    {items.map((product) => (
                        <CardContent key={product._id}>
                            <CardContent className="recptname">
                                {product.Prod_Name}
                            </CardContent>
                            <CardContent className="recptprice">
                                Rs. {product.Prod_MRP}
                            </CardContent>
                        </CardContent>
                    ))}
                    <hr id="hr" />
                    <CardContent>
                        <p>Total Amount: {amount}</p>
                    </CardContent>
                    <CardContent>
                        <Button fullWidth variant="contained" color="secondary" onClick={payAmt}>PAY AMOUNT</Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        : 
        <Grid lg={12} className="grid" style={{marginLeft:"60px"}}>
                 <img style={{width: "20%",height:"30%",marginTop:"150px"}} src={shopping} alt="Nothing in Cart" />
                 <h3 style={{marginTop: "-20px"}}>You have not login. Please Login first</h3>
                 <Button color="secondary" variant="outlined" onClick={login}>Login</Button>
                 </Grid>
        }
           
        </>
    );
}

export default Cart;