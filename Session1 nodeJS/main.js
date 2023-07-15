import express from 'express'
import {dataRouter} from './modules/data/data.router.js'
const app = express();     
app.use(express.json());   //parse
app.use(dataRouter);


app.listen(3000 ,()=>{
    console.log("server is running")
});
