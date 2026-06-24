import mongoose from "mongoose";

const uformSchema = new mongoose.Schema({
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
    image:{
        required:true,
        type:String
    }
    
    

}) 

export const Uform = mongoose.model("uform",uformSchema)