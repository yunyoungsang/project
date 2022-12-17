const express = require("express");
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://sion:youn8694@sion.x6sveh9.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))

const port = 3000

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>console.log(`서버 정상 가동 ${port}!`));
