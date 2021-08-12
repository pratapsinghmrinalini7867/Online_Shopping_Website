import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField, Table, TableCell, TableBody, TableRow, TableHead} from '@material-ui/core';
import {FavoriteBorder} from '@material-ui/icons';

function ShowProduct(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const [product, setProduct] = useState('');

    const [currentUser, setCurrentuser] = useState('');

    const token = localStorage.getItem('token');

    function session(){
        setCurrentuser(token);
    }
    useEffect(() => {
        session();
    }, [])

    function getUserOrders(){
        Axios.post('http://localhost:30/getprod',{id:id}).then(function(succ){
            if(succ){
                console.log(succ.data);
                setProduct(succ.data);
            }
            else
                alert("Some error");
        })
    }

    function addtocart(x){
        Axios.post('http://localhost:30/addtocart',{id:x,uid:currentUser}).then(function(succ){
            if(succ.data == true)
                alert("product added to cart");
            else
                alert('Try again');
        })
    }

    useEffect(() => {
        getUserOrders();
    }, [])



    return(
        <>
        <Grid lg={12}>
            <Card className="prodbox">
                <CardContent>
                    <img className="img" src={product.img} />
                </CardContent>
                <Grid lg={12} className="prodDtls">
                    <CardContent className="prodname">
                        {product.Name}
                    </CardContent>
                    <CardContent>
                        {product.Brand}
                    </CardContent>
                    <CardContent  className="desc">
                        {product.Description}
                    </CardContent>
                    <CardContent className="ctgy">
                        {product.Category}
                    </CardContent>
                    <CardContent className="subctgy">
                        {product.Subcategory}
                    </CardContent>
                    <CardContent className="qty">
                        {product.Quantity}
                    </CardContent>
                    <CardContent className="qtytype">
                        {product.Quantity_type}
                    </CardContent>
                    <CardContent className="size">
                        Sizes Available: {product.Size}
                    </CardContent>
                    <CardContent className="price">
                        Rs.{product.MRP}
                    </CardContent>
                    <CardContent>
                        <Button className="btn" onClick={() => addtocart(product._id)}><FavoriteBorder/>Wishlist</Button>              
                    </CardContent>
                </Grid>
            </Card>
        </Grid>
        
        </>
    );
}

export default ShowProduct;