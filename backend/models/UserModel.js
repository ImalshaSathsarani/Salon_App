import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:false,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
    },

    img:{
        type:String,
        required:false,
        default:null,
    },
},{timestamps:true}

);

export default mongoose.model("User", UserSchema);