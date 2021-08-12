import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {Button, Grid, Card, CardContent, TextField} from '@material-ui/core';
import { Create, LocalMall, Person, ShoppingCart, Add, Dashboard,Group, Shop } from '@material-ui/icons';
import { Chart } from 'chart.js';
import { Doughnut} from 'react-chartjs-2';

function Dashboards(){
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);

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
    

    const data = {
        labels: ['Users','Products','Orders'],
        datasets: [{
          label: 'Database Stats',
          data: [users.length,products.length,orders.length],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(209, 250, 211, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)'
          ],
          borderWidth: 1
        }]
      };

    function getAllProducts(){
        Axios.get('http://localhost:1000/getallproducts').then(function(succ){
            setProducts(succ.data);
            // getAllProducts();
        })
    }
    function showusers(){
        Axios.get('http://localhost:1000/showuser').then(function(succ){
            setUsers(succ.data);
            // showusers();
        })
    }
    function getOrders(){
        Axios.get('http://localhost:1000/getallorders').then(function(succ){
            setOrders(succ.data);
            // getOrders();
        })
    }

    useEffect(() => {
        getOrders();
        getAllProducts();
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
                            <p className="batch">
                                Current Email
                                <br />
                                {admin}
                                <br /><br />
                                <Button variant="outlined" color="secondary" onClick={Logout}>Logout</Button>
                            </p>
                        </CardContent>
                    </CardContent>
                </Card>
            </Grid>
            <Grid lg={9} id="dash2" className="dashcontent">
                <Grid lg={12}>
                <Card className="dash">
                        <CardContent>
                            <Create />
                            <p className="cont"><br />Pending Orders</p>
                        </CardContent>
                    </Card>
                    <Card className="dash">
                        <CardContent>
                            <ShoppingCart />
                            <p className="cont">{products.length}<br />Products</p>
                        </CardContent>
                    </Card>
                    <Card className="dash">
                        <CardContent>
                            <LocalMall />
                            <p className="cont">{orders.length}<br />Orders</p>
                        </CardContent>
                    </Card>
                    <Card className="dash">
                        <CardContent>
                            <Person />
                            <p className="cont">{users.length}<br />Users</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid lg={12} className="coltwo">
                    <Card className="graph">
                        <CardContent id="stats">
                            <Doughnut data={data} />
                        </CardContent>
                    </Card>
                    <Card className="graph2">
                        <CardContent>
                            <Create />
                            <p className="cont">1,909<br />Products</p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default Dashboards;