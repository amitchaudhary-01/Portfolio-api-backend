import mongoose from "mongoose";

const tableproductSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    category:{
        required:true,
        type:String
    },
    price:{
        required:true,
        type:Number
    },
    qty:{
        required:true,
        type:Number
    },
    review:{
        required:true,
        type:String
    },
    image:{
        required:true,
        type:String
    }
})

export const TableProduct =  mongoose.model("tableproduct",tableproductSchema)