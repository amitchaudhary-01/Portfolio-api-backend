import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    contact:{
        required:true,
        type:Number
    },
    password:{
        required:true,
        type:String
    }
    
}) 

export const Auth = mongoose.model("auth",authSchema)