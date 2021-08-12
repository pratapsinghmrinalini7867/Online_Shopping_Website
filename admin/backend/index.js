const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const app = express();

const mongodb = require('mongodb');
const mongoClient = require('mongodb').MongoClient;
const connectionString = 'connectionstring';
const Client = new mongoClient(connectionString);
const nodemailer = require('nodemailer');


//database connection
var admin;
var orders;
var products;
var register;
mongoClient.connect(connectionString,{useUnifiedTopology: true}).then(Client => {
    console.log("Connected to database");
    db = Client.db("mydb");
    register = db.collection('first');
    admin = db.collection('admin');
    products = db.collection('products');
    orders = db.collection('orders');
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xyz@gmail.com',
        pass: 'posvcbdakdj'
    }
})


app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use(cors())

//admin login
app.post('/adminlogin',(req,res) => {
    admin.findOne({
        Email:req.body.Email,
        Password:req.body.Password
    }).then(function(succ){
        if(succ == null)
            res.send('false');
        else
            res.send('true');
    }).catch(function(err){
        res.send('false');
    })
})

//add product
app.post('/addproduct',(req,res) => {
    var sub = req.body.Subcategory.charAt(0).toUpperCase() + req.body.Subcategory.slice(1);
    products.insert({
        Name:req.body.Name,
        Brand:req.body.Brand,
        img:req.body.img,
        Cost_Price:parseInt(req.body.Cost_Price),
        Selling_Price:parseInt(req.body.Selling_Price),
        MRP:parseInt(req.body.MRP),
        Description:req.body.Description,
        Quantity:parseInt(req.body.Quantity),
        Quantity_type:req.body.Quantity_type,
        Size:req.body.Size,
        Category:req.body.Category,
        Subcategory:sub
    }).then(function(succ){
        res.send('true');
    }).catch(function(err){
        res.send('false');
    })
})

//get products
app.get('/getallproducts',(req,res) => {
    products.find().toArray().then(function(succ){
        res.send(succ);
    })
})
//show orders
app.get('/getallorders',(req,res) => {
    orders.find().toArray().then(function(succ){
        res.send(succ);
    })
})
//show users
app.get('/showuser',(req,res) => {
    register.find().toArray().then(function(succ){
        res.send(succ);
    })
})

//forgot password
app.post('/sendOTP',(req,res) => {
    admin.findOne({
        Email:req.body.Email
    }).then(function(succ){
        if(succ == null)
            res.send('nomail');
        else{
            var otp = Math.floor(Math.random() * 999999);
            admin.updateOne({Email:req.body.Email},{
                $set: {
                    OTP: otp
                }
            }).then(function(success){
                var mailOption = {
                    from: "xyz@gmail.com",
                    to: req.body.Email,
                    subject: 'MyStore - One Time Password',
                    text: 'Greetings from MyStore! Your OTP is ' + otp + ' Please do not share it with anyone.'
                }
                transporter.sendMail(mailOption, function(error,scc){
                    if(error)
                        console.log(error);
                    else{
                        console.log("Email send");
                        res.send(succ);
                    }
                })
            }).catch(function(err){
                res.send('error');
            })
        }
    })
})

//otp verification
app.post('/submitOTP', (req,res) => {
    // var uid = new mongo.ObjectId(req.body.uid);
    register.findOne({
        OTP: parseInt(req.body.OTP)
    }).then(function(succ){
        if(succ == null)
            res.send('error');
        else
            res.send('true');
    })
})

app.post('/submitpass',(req,res) => {
    var idd = new mongo.ObjectId(req.body.id);
    register.updateOne({_id:idd},{
        $set: {
            Password: req.body.Newpass
        }
    }).then(function(succ){
        res.send('true');
    }).catch(function(err){
        res.send('false');
    })
})




app.listen(1000, (req,res) => {
    console.log("Admin server started");
})
