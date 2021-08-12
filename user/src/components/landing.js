import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { Card, Button, ListItemText, List, ListItemIcon, ListItem, CardContent, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import {ArrowForward, Facebook, FavoriteBorder, Instagram, Mail, Twitter} from '@material-ui/icons';
import Image from './images/jumbo.png';


function Landing(){

    function formSubmit(s){
        window.location.href = '/home/?Subcategory=' + s;
    }

    function product(){
        window.location.href = '/home/?Subcategory=allproducts';
    }

    return(
        <>
            <Grid className="jumbox">
            <img className="jumbotron" src={Image} alt="" />
            <Grid lg={12} className="jumbocontent">
                <h1 style={{color: "white"}}>Amazing Deals at Best price</h1>
                <Button variant="outlined" style={{color: "white",borderColor: "white"}} onClick={product}>Shop Now</Button>
            </Grid>
            </Grid>

            <Grid lg={12} className="landing">
                <h1 style={{display: "inline-block"}}>TOP FASHION</h1>
                <a onClick={product} style={{marginLeft:"70%",textDecoration: "none",justifyContent: "center",fontSize: "20px"}}>View All<ArrowForward/></a>
            <Grid container>
                <Card className="products">
                    <Grid lg={4} xs={8}>
                        <Button className="imgbtn" onClick={() => formSubmit("Dresses")}>
                            <img src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="jumimg" alt="" />
                        </Button>
                        <Typography variant="h6" className="block bold">ZIYAA</Typography>
                        <Typography className="line">L</Typography>               
                        <Typography className="line">Women</Typography>               
                        <Typography className="line">Dress</Typography>
                        <Typography className="block">Maroon Dress</Typography>               
                        <Typography className="block bold pprice">Rs. 863</Typography> 
                    </Grid>    
                </Card>
                <Card className="products">
                    <Grid lg={4} xs={8}>
                        <Button className="imgbtn" onClick={() => formSubmit("Shirt")}>
                            <img src="https://images.unsplash.com/flagged/photo-1564468781192-f023d514222d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="jumimg" alt="" />
                        </Button>
                        <Typography variant="h6" className="block bold">HIGHLANDER</Typography>
                        <Typography className="line">S</Typography>               
                        <Typography className="line">Men</Typography>               
                        <Typography className="line">Shirt</Typography>
                        <Typography className="block">Slim Fit Solid Casual Shirt</Typography>               
                        <Typography className="block bold pprice">Rs. 527</Typography> 
                    </Grid>    
                </Card>
                <Card className="products">
                    <Grid lg={4}>
                        <Button className="imgbtn" onClick={() => formSubmit("Shirt")}>
                            <img src="https://images.unsplash.com/photo-1602810318660-d2c46b750f88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="jumimg" alt="" />
                        </Button>
                        <Typography variant="h6" className="block bold">Roadster</Typography>
                        <Typography className="line">M</Typography>               
                        <Typography className="line">Men</Typography>               
                        <Typography className="line">Shirt</Typography>
                        <Typography className="block">Regular Fit Casual Shirt</Typography>               
                        <Typography className="block bold pprice">Rs. 1079</Typography> 
                    </Grid>    
                </Card>
                <Card className="products">
                    <Grid lg={4}>
                        <Button className="imgbtn" onClick={() => formSubmit("Suit")}>
                            <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="jumimg" alt="" />
                        </Button>
                        <Typography variant="h6" className="block bold">Peter England</Typography>
                        <Typography className="line">L</Typography>               
                        <Typography className="line">Men</Typography>               
                        <Typography className="line">Suit</Typography>
                        <Typography className="block">Slim Fit Two-Piece Suit</Typography>               
                        <Typography className="block bold pprice">Rs. 4829</Typography> 
                    </Grid>    
                </Card>
                <Card className="products">
                    <Grid lg={4}>
                        <Button className="imgbtn" onClick={() => formSubmit("Jacket")}>
                            <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="jumimg" alt="" />
                        </Button>
                        <Typography variant="h6" className="block bold">Liva</Typography>
                        <Typography className="line">L</Typography>               
                        <Typography className="line">Men</Typography>               
                        <Typography className="line">Jacket</Typography>
                        <Typography className="block">White Jacket</Typography>               
                        <Typography className="block bold pprice">Rs. 1900</Typography> 
                    </Grid>    
                </Card>
            </Grid>
            </Grid>

            <Grid lg={12} className="landing">
                <h1>CATEGORIES TO BAG</h1>
                <Grid lg={4} className="circlebox">
                    <Button onClick={() => formSubmit("TShirt")}>
                        <img className="circle" src="https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
                    </Button>
                        <Typography variant="h6">T-Shirts</Typography> 
                </Grid>
                <Grid lg={4} className="circlebox">
                    <Button onClick={() => formSubmit("Tops")}>
                        <img className="circle" src="https://tse2.mm.bing.net/th?id=OIP.ZUp1gvUAbKG3LYBGcPokoAHaHa&pid=Api&P=0&w=300&h=300" alt="" />
                    </Button>
                        <Typography variant="h6">Tops</Typography> 
                </Grid>
                <Grid lg={4} className="circlebox">
                    <Button onClick={() => formSubmit("Suits")}>
                        <img className="circle" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
                    </Button>
                        <Typography variant="h6">Suits</Typography> 
                </Grid>
                <Grid lg={4} className="circlebox">
                    <Button onClick={() => formSubmit("Shirt")}>
                        <img className="circle" src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
                    </Button>
                        <Typography variant="h6">Shirts</Typography> 
                </Grid>
                <Grid lg={4} className="circlebox">
                    <Button onClick={() => formSubmit("Kids")}>
                        <img className="circle" src="https://tse4.mm.bing.net/th?id=OIP.eeyBykoSrX7hSQaqbwI2EAHaIq&pid=Api&P=0&w=300&h=300" alt="" />
                    </Button>
                        <Typography variant="h6">Kids Wear</Typography> 
                </Grid>
                <Grid lg={4} className="circlebox">
                    <Button onClick={() => formSubmit("Dresses")}>
                        <img className="circle" src="https://tse4.mm.bing.net/th?id=OIP.2uvD-s77Vc9oujWwUH66QAHaLH&pid=Api&P=0&w=300&h=300" alt="" />
                    </Button>
                        <Typography variant="h6">Dresses</Typography> 
                </Grid>
                <Grid lg={4} className="circlebox">
                    <Button onClick={() => formSubmit("Saree")}>
                        <img className="circle" src="https://tse2.mm.bing.net/th?id=OIP.dqaj3owlcDjLmnUgMqq40AHaKL&pid=Api&P=0&w=300&h=300" alt="" />
                    </Button>
                        <Typography variant="h6">Sarees</Typography> 
                </Grid>
                <Grid lg={4} className="circlebox">
                    <Button onClick={() => formSubmit("Jumpsuits")}>
                        <img className="circle" src="https://tse1.mm.bing.net/th?id=OIP.sugSg720WsYT6VKsoyYLeQHaMV&pid=Api&P=0&w=300&h=300" alt="" />
                    </Button>
                        <Typography variant="h6">Jumpsuits</Typography> 
                </Grid>
                <Grid lg={4} className="circlebox">
                    <Button onClick={() => formSubmit("Skirts")}>
                        <img className="circle" src="https://tse3.mm.bing.net/th?id=OIP.IVRbD2rwyg68NXGiGXB2cAHaMW&pid=Api&P=0&w=300&h=300" alt="" />
                    </Button>
                        <Typography variant="h6">Skirts</Typography> 
                </Grid>
                <Grid lg={4} className="circlebox">
                    <Button onClick={() => formSubmit("Jeans")}>
                        <img className="circle" src="https://tse2.mm.bing.net/th?id=OIP.C_-pj_r-Ol_AwWwdbHj11AHaLH&pid=Api&P=0&w=300&h=300" alt="" />
                    </Button>
                        <Typography variant="h6">Jeans</Typography> 
                </Grid>
                <Grid lg={4} className="circlebox">
                    <Button onClick={() => formSubmit("Jacket")}>
                        <img className="circle" src="https://tse2.mm.bing.net/th?id=OIP.lSlBEgJxGmp5xTZWS59TcwHaIw&pid=Api&P=0&w=300&h=300" alt="" />
                    </Button>
                        <Typography variant="h6">Jackets</Typography> 
                </Grid>
                <Grid lg={4} className="circlebox">
                    <Button onClick={() => formSubmit("Ethnical Wear")}>
                        <img className="circle" src="https://tse3.mm.bing.net/th?id=OIP.QHC2u6Sedwh5sOD7ipS1IAHaLH&pid=Api&P=0&w=300&h=300" alt="" />
                    </Button>
                        <Typography variant="h6">Ethnical Wear</Typography> 
                </Grid>
            </Grid>

            
            <Grid lg={12} className="landing">
                <h1 style={{display: "inline-block"}}>BEST DEALS UPTO 30% OFF</h1>
                <a onClick={product} style={{marginLeft:"55%",textDecoration: "none",justifyContent: "center",fontSize: "20px"}}>View All<ArrowForward/></a>
            <Grid container>
                <Card className="products">
                    <Grid lg={4}>
                        <Button className="imgbtn" onClick={() => formSubmit("Suit")}>
                            <img src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" className="jumimg" alt="" />
                        </Button>
                        <Typography variant="h6" className="block bold">Allen Solly</Typography>
                        <Typography className="line">L</Typography>               
                        <Typography className="line">Men</Typography>               
                        <Typography className="line">Suit</Typography>
                        <Typography className="block">Formal Suit</Typography>               
                        <Typography className="block bold pprice">Rs. 7419</Typography> 
                    </Grid>    
                </Card>
                <Card className="products">
                    <Grid lg={4}>
                        <Button className="imgbtn" onClick={(event) => formSubmit("Suit")}>
                            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="jumimg" alt="" />
                        </Button>
                        <Typography variant="h6" className="block bold">Arrow</Typography>
                        <Typography className="line">S</Typography>               
                        <Typography className="line">Men</Typography>               
                        <Typography className="line">Suit</Typography>
                        <Typography className="block">Tailored Fit Men Suit</Typography>               
                        <Typography className="block bold pprice">Rs. 5399</Typography> 
                    </Grid>    
                </Card>
                <Card className="products">
                    <Grid lg={4}>
                        <Button className="imgbtn" onClick={() => formSubmit("Suit")}>
                            <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="jumimg" alt="" />
                        </Button>
                        <Typography variant="h6" className="block bold">Blackberrys</Typography>
                        <Typography className="line">L</Typography>               
                        <Typography className="line">Men</Typography>               
                        <Typography className="line">Suit</Typography>
                        <Typography className="block">Partywear Suit</Typography>               
                        <Typography className="block bold pprice">Rs. 4980</Typography> 
                    </Grid>    
                </Card>
                <Card className="products">
                    <Grid lg={4}>
                        <Button className="imgbtn" onClick={() => formSubmit("Suit")}>
                            <img src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="jumimg" alt="" />
                        </Button>
                        <Typography variant="h6" className="block bold">MANQ</Typography>
                        <Typography className="line">S</Typography>               
                        <Typography className="line">Men</Typography>               
                        <Typography className="line">Suit</Typography>
                        <Typography className="block">Formal Wear</Typography>               
                        <Typography className="block bold pprice">Rs. 7690</Typography> 
                    </Grid>    
                </Card>
                <Card className="products">
                    <Grid lg={4}>
                        <Button className="imgbtn" onClick={() => formSubmit("Suit")}>
                            <img src="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHN1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="jumimg" alt="" />
                        </Button>
                        <Typography variant="h6" className="block bold">FOREVER21</Typography>
                        <Typography className="line">M</Typography>               
                        <Typography className="line">Women</Typography>               
                        <Typography className="line">Coat</Typography>
                        <Typography className="block">Black Tailored Coat</Typography>               
                        <Typography className="block bold pprice">Rs. 1980</Typography> 
                    </Grid>    
                </Card>
            </Grid>
            </Grid>

            <Grid lg={12}  container className="footer">
                <Grid lg={12}>
                    <a href="/" id="logo" className="block"><span className="fpurple">p</span><span className="fwhite">u</span><span className="fpurple">r</span><span className="fwhite">p</span><span className="fpurple">l</span><span className="fwhite">e</span></a>
                </Grid>
                <Grid lg={4}>
                    <List component="nav" aria-label="main mailbox folders"  className="footerlogo">
                        <h4>ONLINE SHOPPING</h4>
                        <ListItem button>
                            <ListItemText primary="Men" onClick={() => {formSubmit("Shirt")}}/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Women" onClick={() => {formSubmit("Dresses")}}/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Kids" onClick={() => {formSubmit("Dress")}}/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Gift Cards"/>
                        </ListItem>
                    </List>
                </Grid>
                <Grid lg={4}>
                    <List component="nav" aria-label="main mailbox folders"  className="footerlogo">
                        <h4>USEFUL LINKS</h4>
                        <ListItem button>
                            <ListItemText primary="Contact Us" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Terma of Use" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Track Orders" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="FAQ" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid lg={4}>
                    <List component="nav" aria-label="main mailbox folders"  className="footerlogo">
                        <h4>CONNECT WITH US</h4>
                        <Mail className="links" />
                        <Facebook className="links" />
                        <Twitter className="links" />
                        <Instagram className="links" />
                        <p style={{fontSize: "15px",fontWeight:"lighter"}}>all rights reseved by purple</p>
                    </List>
                </Grid>
            </Grid>

        </>
    );
}

export default Landing;