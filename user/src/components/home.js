import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { Card, Button, CardContent, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import {FavoriteBorder} from '@material-ui/icons';

function Home(){
    const [products, setProducts] = useState([]);

    const [currentUser, setCurrentuser] = useState('');

    const token = localStorage.getItem('token');

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sub = urlParams.get('Subcategory');
 

    function session(){
        setCurrentuser(token);
    }
    useEffect(() => {
        session();
    }, [])

    function getProducts(){
        if(sub == 'allproducts'){
            Axios.get('http://localhost:30/getallproducts').then(function(succ){
                setProducts(succ.data);
                getProducts();
            })
        }
        else{
            Axios.post('http://localhost:30/getproducts',{Subcategory:sub}).then(function(succ){
                setProducts(succ.data);
                getProducts();
            })
        }
    }
    useEffect(() => {
        getProducts();
    }, [])

    function addtocart(x){
        // window.location.href = '/cart/?id='+x;
        Axios.post('http://localhost:30/addtocart',{id:x,uid:currentUser}).then(function(succ){
            if(succ.data == true)
                alert("product added to cart");
            else
                alert('Try again');
        })
    }
    function ShowOneProd(x){
        window.location.href = '/showoneprod/?id=' + x;
    }

    return(
        <>
        <Grid lg={3} id="dash2">
                <Card className="vetical">
                    <CardContent>
                        <h3>Category</h3>
                        <Button className="vmenu"><a href="#women">Women</a></Button><br />
                        <Button className="vmenu"><a href="#men">Men</a></Button>
                        <Button className="vmenu"><a href="#kids">Kids</a></Button>
                        <Button className="vmenu"><a href="#grls">Girls</a></Button>
                        <Button className="vmenu"><a href="boys">Boys</a></Button>
                    </CardContent>
                    <CardContent className="vbox">
                        <h3>Brands</h3>
                        <Button className="vmenu"><a href="#women">Roadster</a></Button><br />
                        <Button className="vmenu"><a href="#men">Levis</a></Button>
                        <Button className="vmenu"><a href="#kids">Puma</a></Button>
                        <Button className="vmenu"><a href="#grls">Max</a></Button>
                        <Button className="vmenu"><a href="boys">Mast & Harbour</a></Button>
                    </CardContent>
                </Card>
            </Grid>
        <Grid lg={9} className="dashcontent">
            <Grid container>
                {products.map((item) => (
                <Card className="products">
                    <Grid lg={4} key={item._id}>
                        <Button className="imagebtn" onClick={() => ShowOneProd(item._id)}>
                            <img src={item.img} className="image" alt="" />
                        </Button>
                        <Typography variant="h6" className="block">{item.Name}</Typography>
                        <Typography className="line">{item.Size}</Typography>               
                        <Typography className="line">{item.Category}</Typography>               
                        <Typography className="line">{item.Subcategory}</Typography>
                        {/* <Typography className="block">{item.Description}</Typography>                */}
                        <Typography className="block bold pprice">Rs.{item.MRP}</Typography> 
                        <Button className="btn" onClick={() => addtocart(item._id)}><FavoriteBorder/>Wishlist</Button>              
                    </Grid>    
                </Card>
                ))}
            </Grid>
        </Grid>
        </>
    );
}

export default Home;