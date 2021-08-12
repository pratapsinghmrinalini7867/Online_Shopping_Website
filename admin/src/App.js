import './App.css';
import Dashboard from './components/dashboard';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login';
import AddProduct from './components/addproduct';
import {AppBar, Toolbar, MenuItem,Typography,Button} from '@material-ui/core';
import ShowUsers from './components/showusers';
import ShowProduct from './components/showproducts';
import ShowOrders from './components/showorders';
import Forgotpass from './components/forgotpass';
import submitOTP from './components/otp';
import Newpassword from './components/newpassword';

function App() {
  return (
    <>
    <AppBar position="fixed" className="navbar">
        <Toolbar>
          <Typography variant="h6">
            <a href="/dashboard">MyStore</a>
          </Typography>
          <Button color="inherit" className="right"><a href="/">Login</a></Button>
        </Toolbar>
      <Toolbar id="toolbar" />

      </AppBar>
      <Router>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Login} />
        <Route path="/addproducts" component={AddProduct} />
        <Route path="/showusers" component={ShowUsers} />
        <Route path="/showproducts" component={ShowProduct} />
        <Route path="/showorders" component={ShowOrders} />
        <Route path="/forgotpass" component={Forgotpass} />
        <Route path="/otp" component={submitOTP} />
        <Route path="/newpassword" component={Newpassword} />
      </Router>
      
    </>
  );
}

export default App;
