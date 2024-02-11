import express from 'express'
import mongoose from 'mongoose';


mongoose.connect
('mongodb+srv://admin:admin@mern-blog.vxaqfpy.mongodb.net/mern-blog?retryWrites=true&w=majority').then(
    () => {console.log("MongoDB Connected")
}).catch((err)=>{
    console.log(err);
});


const app = express()
 

app.listen(3000,() => {
    console.log("server running on port 3000vv ");
});
