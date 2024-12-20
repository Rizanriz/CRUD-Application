import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './DB/connection.js';
import router from './routes/user.routes.js';

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json())

app.use("/",router)

const port = process.env.PORT || 5000 

app.listen(port,()=>{
    connectDB()
    console.log("server running");
})