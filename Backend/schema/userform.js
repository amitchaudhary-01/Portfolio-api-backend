import mongoose from "mongoose";

const userformSchema = new mongoose.Schema({
    firstname:{
        required:true,
        type:String
    },
    lastname:{
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
    }
})

export const Form = mongoose.model("form",userformSchema)