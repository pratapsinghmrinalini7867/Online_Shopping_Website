import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField,Table,TableCell,TableHead,TableBody,TableRow} from '@material-ui/core';
import { Create, LocalMall, Person, ShoppingCart, Add, Dashboard,Group, Shop } from '@material-ui/icons';


function ShowUsers(){
    const [users, setUsers] = useState([]);

    const [admin, setCurrenAdmin] = useState('');

    const token = localStorage.getItem('token');
    
    if(token == null){
        window.location.href='/';
    }

    function session(){
        setCurrenAdmin(token);
      }
    function Logout(){
        localStorage.removeItem('token');
        window.location.href="/";
    }
    
      useEffect(() =>{
          session();
      }, [])
    function showusers(){
        Axios.get('http://localhost:1000/showuser').then(function(succ){
            setUsers(succ.data);
            showusers();
        })
    }

    useEffect(() => {
        showusers();
    }, [])

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
        <Grid lg={9} className="userdetails">
            <h1>Users List</h1>
            <Card className="details">
                <Table>
                  <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Contact</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>{item.Name}</TableCell>
                                <TableCell>{item.Email}</TableCell>               
                                <TableCell>{item.Password}</TableCell>               
                                <TableCell>{item.Contact}</TableCell>               
                            </TableRow>
                        ))}
                  </TableBody>
                </Table>
            </Card>
    
         </Grid>
        </>
    );
}

export default ShowUsers;