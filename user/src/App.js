import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import './App.css';
import { Route,BrowserRouter as Router } from 'react-router-dom';
import {Link,FormControl, InputLabel, NativeSelect,makeStyles, Popper, AppBar,Typography,Button,InputBase,Toolbar,TextField} from '@material-ui/core';
import {AccountCircle, Search, FavoriteBorder, LocalMall, SettingsOverscanOutlined, AirlineSeatIndividualSuiteRounded} from '@material-ui/icons';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Address from './components/address';
import Forgotpass from './components/forgotpass';
import submitOTP from './components/otp';
import Newpassword from './components/newpassword';
import Payment from './components/payment';
import Cart from './components/cart';
import ShowProduct from './components/showProduct';
import Bag from './components/bag';
import shadows from '@material-ui/core/styles/shadows';
import Landing from './components/landing';
import axios from 'axios';


function App() {
    const token = localStorage.getItem('token');

    const [value, setValue] = useState('');

    function Logout(){
      localStorage.removeItem('token');
      window.location.href="/login";
  }

    const useStyles = makeStyles((theme) => ({
      paper: {
        boxShadow: '1px 1px 5px grey', 
        width: "250px",
        marginTop: "10px",
        color: "black",
        textAlign: "center",
        paddingTop: "10px",
        padding: "5px",
        backgroundColor: theme.palette.background.paper,
      },
    }));

    function result(event){
    if(event.keyCode == 13)
        window.location.href = '/home/?Subcategory='+ value;
    }

    function profile(){
      window.location.href = '/bag';
    }

    function wishlist(){
      window.location.href = '/cart';
    }
    
    function orders(){
      window.location.href = '/bag';
    }

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

  return (
      <>
      <AppBar position="fixed" className="navbar">
        <Toolbar>
          <Typography variant="h6">
            <a href="/" id="logo"><span className="purple">p</span><span className="white">u</span><span className="purple">r</span><span className="white">p</span><span className="purple">l</span><span className="white">e</span></a>
          </Typography>

          <div  className="search">
            <div>
              <Search />
            </div>
            <InputBase className="inputbase" placeholder="Search Brands" inputProps={{ 'aria-label': 'search' }} onChange={(event) => {setValue(event.target.value)}} onKeyUp={result} />
          </div>
          
              <Typography className="right">

              <Button aria-describedby={id} type="button" onClick={handleClick} style={{marginTop: "-15px"}}>
                <AccountCircle style={{color: 'white'}} />
              </Button>
              <Popper id={id} open={open} anchorEl={anchorEl}>
                <div className={classes.paper}>
                  {token? <a style={{fontSize:"15px"}}><span style={{color:"red"}}>Signed in as:</span><br/>{token}<hr/></a>:<Button fullWidth color="secondary" variant="outlined"><a href="/login" style={{color: "red",textDecoration:'none'}}>Login</a></Button>}
                  <Button fullWidth color="secondary" onClick={profile}>My Account</Button>
                  <Button fullWidth color="secondary" onClick={wishlist}>My Wishlist</Button>
                  <Button fullWidth color="secondary" onClick={orders}>My Orders</Button>
                  {token? <Button color="secondary" variant="outlined" fullWidth onClick={Logout}>Logout</Button>:<Button color="secondary" fullWidth variant="outlined"><a href="/register" style={{color: "red",textDecoration:'none'}}>Register</a></Button>} 
                </div>
              </Popper>

            <a href="/cart"><FavoriteBorder /></a>
            <a href="/bag"><LocalMall /></a>
          </Typography>

        </Toolbar>
        <Toolbar id="toolbar" />
      </AppBar>

        <Router>
          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/address" component={Address} />
          <Route path="/forgotpass" component={Forgotpass} />
          <Route path="/otp" component={submitOTP} />
          <Route path="/newpassword" component={Newpassword} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route path="/showoneprod" component={ShowProduct} />
          <Route path="/bag" component={Bag} />
        </Router>
      </>
  );
}

export default App;
