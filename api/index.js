import express from 'express'
import mongoose from 'mongoose';
import dotenv from "dotenv"
import cors from 'cors';
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {console.log("MongoDB Connected")
}).catch((err)=>{
    console.log(err);
});


const app = express()

app.use(express.json())
app.use(cors());
 

app.listen(3000,() => {
    console.log("server running on port 3000 ");
});


app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);


app.use((err ,req, res , next) =>{
    console.log('Signup request received:', req.body); 
    const statusCode = err.statusCode || 500;
    console.log(statusCode)
    const message = err.message || 'Internal Server error ';
    res.status(statusCode).json({
        sucess:false,
        statusCode,
        message,
    });
});