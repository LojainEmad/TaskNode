/*const express = require ('express') 
const app = express()

app.use(express.json());   //global 
app.get("/home",(req,res)=>{
    res.json({message:"home page"});
});
function isAuthorized(req,res,next){
    const isAdmin=true;
    if(isAdmin){
        next();
    }
    else{
       return res.json({message:"not authorized"});
    }
}
//app.post("/adduser",express.json(), isAuthorized,(req , res , next)=>{
  //  res.json({message:"adduser page"});
//});
app.post("/adduser", isAuthorized,(req , res , next)=>{
    const{name, age}=req.body;
    console.log(req.body);
    //console.log(name);
    //console.log(age);
    res.json({message:"adduser page"});
});
app.listen(3000 , ()=>{
    console.log("server is running ")});
    */

   // ***********************************************************************************
   //using require, type common js
/*const express = require('express')
const userRouter=require("./modules/user/user.router.js")

const postRouter=require("./modules/post/post.router.js")
const app = express();     //instance 
app.use(express.json());   //parse
app.use(userRouter);

app.use(postRouter);
app.listen(3000 ,()=>{
    console.log("server is running")
});*/
//********************************************************************************* */
//using import and export
import express from 'express'
import {userRouter} from './modules/user/user.router.js'
import { postRouter } from './modules/post/post.router.js'
const app = express();     //instance 
app.use(express.json());   //parse
app.use(userRouter);

app.use(postRouter);
app.listen(3000 ,()=>{
    console.log("server is running")
});
