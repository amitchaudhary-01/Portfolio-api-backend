import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        required:true,
        type:String
    },
    lastname:{
        required:true,
        type:String
    },
    contact:{
        required:true,
        type:Number
    },
    email:{
        required:true,
        type:String
    },
    age:{
        required:true,
        type:Number
    },
    gender:{
        required:true,
        type:String
    },
    username:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    bloodgroup:{
        required:true,
        type:String
    },
    height:{
        required:true,
        type:Number
    },
    weight:{
        required:true,
        type:Number
    },
    address:{
        required:true,
        type:String
    },

}) 

export const User = mongoose.model("user",userSchema)