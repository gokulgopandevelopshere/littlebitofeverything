import{ mongoose,  Schema } from "mongoose";


const userSchema = new mongoose.Schema({
    username: { type: String, required: true,unique: true },
    email:{ type: String, required: true,unique: true },
    password: { type: String, required: true },
    profilePicture:{
        type:String,
        default:'https://imgs.search.brave.com/XLS7UX2I0_zgE8zZvkHJexzTMUI3VyAIsKCZ7GzlP3w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy8xMDk1ODY3LTIw/MC5wbmc',
    },
},
{timestamps: true}
);

const User = mongoose.model('User', userSchema)


export default User;