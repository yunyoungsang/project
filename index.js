const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {User} = require("./models/User");
const config = require('./config/key');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());


mongoose.connect(config.mongoURI,
{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err));

const port = 3000;

app.get("/",(req,res)=>{
    res.send("hello")
});
app.post("/register",(req,res)=>{
    const user = new User(req.body)
    user.save((err,userInfo)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({
            success:true
        })})
    });

app.listen(port,()=>console.log(`서버 정상 가동 ${port}!`));
