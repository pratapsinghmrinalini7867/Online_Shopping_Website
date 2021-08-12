import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField, Table, TableCell, TableBody, TableRow, TableHead} from '@material-ui/core';
// import { Create, LocalMall, Person, ShoppingCart, Add } from '@material-ui/icons';

function ShowProduct(){
    const [allproducts, setAllproducts] = useState([]);

    function getAllProducts(){
        Axios.get('http://localhost:1000/getallproducts').then(function(succ){
            setAllproducts(succ.data);
            getAllProducts();
        })
    }

    useEffect(() => {
        getAllProducts();
    }, [])


    return(
        <>
        <Grid lg={12}>
            <h1>Product Details</h1>
            <Card className="prodtable">
                <Table>
                  <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Brand</TableCell>
                        <TableCell>Cost Price</TableCell>
                        <TableCell>Selling Price</TableCell>
                        <TableCell>MRP</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Quantity Type</TableCell>
                        <TableCell>Size</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Subcategory</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                    {allproducts.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>{item.Name}</TableCell>
                                <TableCell>{item.Brand}</TableCell>               
                                <TableCell>{item.Cost_Price}</TableCell>               
                                <TableCell>{item.Selling_Price}</TableCell>               
                                <TableCell>{item.MRP}</TableCell>               
                                <TableCell>{item.Description}</TableCell>               
                                <TableCell>{item.Quantity}</TableCell>               
                                <TableCell>{item.Quantity_type}</TableCell>               
                                <TableCell>{item.Size}</TableCell>               
                                <TableCell>{item.Category}</TableCell>               
                                <TableCell>{item.Subcategory}</TableCell>               
                            </TableRow>
                        ))}
                  </TableBody>
                </Table>
            </Card>
                <a href="/dashboard">Go To Dashboard</a>
        </Grid>
        
        </>
    );
}

export default ShowProduct;