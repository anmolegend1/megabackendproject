import mongoose from "mongoose";
// import { DB_NAME } from  "./";
import dotenv from "dotenv"
dotenv.config(
    {
        path: './.env'
    }
)



const connectDB = async ()=>
{
    try {
      const connenctionInstance=  await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
      console.log(`\n  MONDO DB CONNCETED SUCESSFULLY ${connenctionInstance.connection.host}`)
    } catch (error) {
        console.log(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
        console.log("mongodb connenction error", error);
        process.exit(1)
    }
}

export default  connectDB