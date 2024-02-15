import express from 'express'
import mongoose from 'mongoose';
import dotenv from "dotenv"
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
 

app.listen(3000,() => {
    console.log("server running on port 3000vv ");
});


app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);


app.use((err ,req, res , next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error ';
    res.status(statusCode).json({
        sucess:false,
        statusCode,
        message,
    });
});