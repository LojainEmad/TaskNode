/*const express=require('express');
const userController=require("./user.controller.js");
const router =express.Router();


router.get("/user", userController.getUser);
//router.get('/user',(req,res,next) =>{
  //  res.json({name:"logy" , age:20});
//});

router.post('/addUser',userController.addUser);
router.patch('/updateUser')
router.delete('/deleteUser')

module.exports=router;
*/

//====================================================================

import express from 'express'
import {getUser , addUser} from "./user.controller.js"
export const userRouter =express.Router();


userRouter.get("/user",getUser);
//router.get('/user',(req,res,next) =>{
  //  res.json({name:"logy" , age:20});
//});

userRouter.post('/addUser',addUser);
userRouter.patch('/updateUser')
userRouter.delete('/deleteUser')


//======================================================================
/*import express from 'express'
import * as userController from "./user.controller.js" 
export const userRouter =express.Router();


userRouter.get("/user",getUser);
//router.get('/user',(req,res,next) =>{
  //  res.json({name:"logy" , age:20});
//});

userRouter.post('/addUser',userController.addUser);
userRouter.patch('/updateUser')
userRouter.delete('/deleteUser')
*/