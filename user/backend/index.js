const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const app = express();

const mongo = require('mongodb');
const mongoClient = require('mongodb').MongoClient;
const connectionString = 'connectionstring';
const Client = new mongoClient(connectionString);
const nodemailer = require('nodemailer');

//database connection
var register;
var products;
var orders;
var cart;

mongoClient.connect(connectionString,{useUnifiedTopology: true}).then(Client => {
    console.log("Connected to database");
    db = Client.db("mydb");
    register = db.collection('first');
    products = db.collection('products');
    orders = db.collection('orders');
    cart = db.collection('cart');
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xyz@gmail.com',
        pass: 'vxzhsbdfjvkiol'
    }
})

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use(cors())

//user data inserted
app.post('/insertdata',(req,res) => {
    register.insert(req.body).then(function(succ){
        var mailOption = {
            from: "xyz@gmail.com",
            to: req.body.Email,
            subject: 'MyStore - Register Confirmation',
            text: 'Greetings from MyStore! You have been succesfully registered. Enjoy Shoping online :) '
        }
        transporter.sendMail(mailOption, function(error,scc){
            if(error)
                console.log(error);
            else{
                console.log("Email send");
                res.send(succ);
            }
        })
        res.send('true');
    }).catch(function(err){
        res.send('false');
    });
})

//user login
app.post('/userlogin', (req,res) => {
    register.findOne({
        Email:req.body.Email,
        Password:req.body.Password
    }).then(function(succ){
        if(succ == null)
            res.send('false');
        else
            res.send('true');
    }).catch(function(err){
        res.send('false');
        console.log(err);
    })
})

//show products
app.post('/getproducts',(req,res) => {
    var sub = req.body.Subcategory.charAt(0).toUpperCase() + req.body.Subcategory.slice(1);
    products.find({Subcategory:sub}).toArray().then(function(succ){
        res.send(succ);
    })
})

app.get('/getallproducts', (req,res) => {
    products.find().toArray().then(function(succ){
        res.send(succ);
    })
})

app.post('/getprod',(req,res) => {
    var pid = new mongo.ObjectId(req.body.id);
    products.findOne({_id:pid}).then(function(succ){
        res.send(succ);
        // res.send('true');
    }).catch(function(err){
        res.send('false');
    })
})

app.post('/address', (req,res) => {
    var uid = req.body.uid;
    register.findOne({Email:uid}).then(function(succ){
        cart.updateMany({
            Email:uid
        },{
            $set: {
                Del_Name:req.body.Name,
                Email:uid,
                Del_City:req.body.City,
                Del_Address:req.body.Address,
                Del_Contact:req.body.Contact,
            }
        }).then(function(scc){
            res.send('true');
        }).catch(function(err){
            res.send('false');
        })
    })
})


app.post('/placeorder',(req,res) => {
    var uid = req.body.uid;
    register.findOne({Email:uid}).then(function(succ){
        cart.find({Email:uid}).toArray().then(function(success){
            orders.insertMany(success).then(function(succ){
                orders.updateMany({Email:uid},{$set:{Payment_method: req.body.Payment_type}})
                .then(function(scccc){
                    res.send('true');
                }).catch(function(err){
                    res.send('false');
            })
            })
        })
    })
})


//forgot password
app.post('/sendOTP',(req,res) => {
    register.findOne({
        Email:req.body.Email
    }).then(function(succ){
        if(succ == null)
            res.send('nomail');
        else{
            var otp = Math.floor(Math.random() * 999999);
            register.updateOne({Email:req.body.Email},{
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

//payment
app.post('/payment',(req,res) => {
    register.updateOne({Name:req.body.Name},{
        $set: {
            Payment_method:req.body.Payment_type
        }
    }).then(function(succ){
        res.send('true');
    }).catch(function(err){
        res.send('false');
    })
})


//bag
app.post('/getuserorders', (req,res) => {
    orders.find({Email:req.body.Email}).toArray().then(function(succ){
            res.send(succ);
            // console.log(succ);
        })
})

//cart
app.post('/addtocart', (req,res) => {
    var pid = new mongo.ObjectId(req.body.id);
    products.findOne({_id:pid}).then(function(succ){
        register.findOne({Email:req.body.uid}).then(function(sccc){
            cart.insertOne({
                Email:sccc.Email,
                Prod_Name:succ.Name,
                Prod_Brand:succ.Brand,
                Prod_img:succ.img,
                Prod_Description:succ.Description,
                Prod_Category:succ.Category,
                Prod_Subcategory:succ.Subcategory,
                Prod_MRP:succ.MRP
            }).then(function(succc){
                res.send('true');
            })
        })
    })
})

app.post('/getitem', (req,res) => {
    // console.log(req.body.Email);
        cart.find({Email:req.body.Email}).toArray().then(function(succ){
            res.send(succ);
            // console.log(succ);
        })
})

app.post('/delete', (req,res) => {
    var pid = new mongo.ObjectId(req.body.id);
    cart.deleteOne({
        _id:pid
    }).then(function(succ){
        res.send('true');
    }).catch(function(err){
        res.send('false');
    })
})

app.post('/getuserdata', (req,res) => {
    register.findOne({Email:req.body.email}).then(function(succ){
        res.send(succ);
    })
})

app.listen(30, (req,res) => {
    console.log("Server started");
})
