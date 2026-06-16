import mongoose from "mongoose";

const editSchema = new mongoose.Schema({
    firstname:{
        required:true,
        type:String
    },
    middlename:{
        required:true,
        type:String
    },
    lastname:{
        required:true,
        type:String
    },
    gender:{
        required:true,
        type:String
    },
    dateofbirth:{
        required:true,
        type:String
    },
    emailaddress:{
        required:true,
        type:String
    },
    address:{
        required:true,
        type:String
    }
})

export const Edit = mongoose.model("edit",editSchema)