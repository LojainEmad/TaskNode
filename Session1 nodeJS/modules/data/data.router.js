import express from 'express'
const dataController = require('./data.controller');
import {readUsersData, getUserById ,getuser,addUser,updateUser,deleteUser} from "./data.controller.js"
export const dataRouter =express.Router();
dataRouter.get('/User',getuser);
dataRouter.post('/User/add',addUser);
dataRouter.patch('/User/update',updateUser);
dataRouter.delete('/User/delete',deleteUser );  
