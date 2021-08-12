import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField, Table, TableCell, TableBody, TableRow, TableHead} from '@material-ui/core';

function ShowOrders(){
    const [allorders, setAllorders] = useState([]);

    function getAllOrders(){
        Axios.get('http://localhost:1000/getallorders').then(function(succ){
            setAllorders(succ.data);
            getAllOrders();
        })
    }

    useEffect(() => {
        getAllOrders();
    }, [])


    return(
        <>
        <Grid lg={12}>
            <h1>Product Details</h1>
            <Card className="prodtable">
                <Table>
                    <TableHead aria-label="sticky table">
                      <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Contact</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Subcategory</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Payment Method</TableCell>
                        </TableRow>
                    </TableHead>
                  <TableBody>
                    {allorders.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>{item.Del_Name}</TableCell>
                                <TableCell>{item.Del_City}</TableCell>               
                                <TableCell>{item.Del_Address}</TableCell>               
                                <TableCell>{item.Del_Contact}</TableCell>               
                                <TableCell>{item.Prod_Name}</TableCell>               
                                <TableCell>{item.Prod_Brand}</TableCell>               
                                <TableCell>{item.Prod_Description}</TableCell>               
                                <TableCell>{item.Prod_Subcategory}</TableCell>               
                                <TableCell>{item.Prod_Category}</TableCell>               
                                <TableCell>{item.Prod_MRP}</TableCell>               
                                <TableCell>{item.Payment_method}</TableCell>               
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

export default ShowOrders;