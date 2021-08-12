import React, {useState} from 'react';
import Axios from 'axios';
import { Create, LocalMall, Person, ShoppingCart, Add, Dashboard,Group, Shop } from '@material-ui/icons';
import {Button, Grid, Card, CardContent, TextField, Table, TableCell, TableBody, TableRow, TableHead} from '@material-ui/core';

function AddProduct(){
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [image, setImage] = useState('');
    const [cp, setCp] = useState('');
    const [sp, setSp] = useState('');
    const [mrp, setMrp] = useState('');
    const [desc, setDesc] = useState('');
    const [qty, setQty] = useState('');
    const [qtytype, setQtytype] = useState('');
    const [size, setSize] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');

    function prodSubmit(){
        Axios.post('http://localhost:1000/addproduct',{
            Name:name,
            Brand:brand,
            img:image,
            Cost_Price:cp,
            Selling_Price:sp,
            MRP:mrp,
            Description:desc,
            Quantity:qty,
            Quantity_type:qtytype,
            Size:size,
            Category:category,
            Subcategory:subcategory
        }).then(function(succ){
            if(succ.data == true)
                alert('product inserted');
            else
                alert('not added');
        })
    }

    return(
        <>
        <Grid lg={3} id="dash2">
            <Card>
                <CardContent>
                    <Button className="vmenu button" variant="contained"><a href="/addproducts">Add Product</a><Add /></Button><br />
                    <Button className="vmenu"><Dashboard /><a href="/dashboard">Dashboard</a></Button>
                    <Button className="vmenu"><Group /><a href="/showusers">Users</a></Button>
                    <Button className="vmenu"><LocalMall /><a href="/showorders">Orders</a></Button>
                    <Button className="vmenu"><ShoppingCart /><a href="/showproducts">Products</a></Button>
                    <CardContent className="vbox">
                        <p className="batch">Product<br />Details</p>
                    </CardContent>
                </CardContent>
            </Card>
            </Grid>
        <Grid lg={12} className="productgrid">
            <h1>Add Product</h1>
            <Card className="product">
                <CardContent>
                    <TextField fullWidth label="Enter name" onChange={(event) => {setName(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Enter brand" onChange={(event) => {setBrand(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Enter image URL" onChange={(event) => {setImage(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField type="number" fullWidth label="Enter cost price" onChange={(event) => {setCp(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField type="number" fullWidth label="Enter selling price" onChange={(event) => {setSp(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField type="number" fullWidth label="Enter MRP" onChange={(event) => {setMrp(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Enter description" onChange={(event) => {setDesc(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField type="number" fullWidth label="Enter quantity" onChange={(event) => {setQty(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Enter quantity type" onChange={(event) => {setQtytype(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Enter size" onChange={(event) => {setSize(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Enter category" onChange={(event) => {setCategory(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <TextField fullWidth label="Enter sub-Category" onChange={(event) => {setSubcategory(event.target.value)}} />
                </CardContent>
                <CardContent>
                    <Button variant="contained" color="primary" className="btn" onClick={prodSubmit}>Submit</Button>
                </CardContent>
            </Card>
        </Grid>
        
        </>
    );
}

export default AddProduct;