/*const express=require('express');

const router=express.Router();
const postController=require("./post.controller.js")

router.post('/addPost',postController.addPost);



module.exports=router;
*/
//=======================================================
import express from 'express'
import {addPost} from "./post.controller.js"

export const postRouter=express.Router();


postRouter.post('/addPost',addPost);

