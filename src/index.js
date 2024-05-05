// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>
{
    console.log(`server is running at port:
    ${process.env.PORT}`)
})
})
.catch((err)=>
{
    console.log("mongodb connection failer", err);
})


/*

ANOTHER WAY TO CONNBECT TO DB

import express from "express";
const app = express();

(async ()=> {
    try 
    {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
       app.on("error",(error)=>
        {
         console.log(error);
        })
        app.listen(process.env.PORT, ()=>
        {
     
        console.log(`App is listening on port ${process.env.PORT}`)
    })
         
    } 
    catch (error) 
    {
        console.log(error); 
    }
})()

*/