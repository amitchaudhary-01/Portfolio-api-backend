import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title:{
        required:true,
        type: String
    },
    price:{
        required:true,
        type:Number
    },
    category:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    stock:{
        required:true,
        type:Number
    },
    rating:{
        required:true,
        type:Number
    },
    brand:{
        required:true,
        type:String
    },
    review:{
        required:true,
        type:String
    },
    discountpercentage:{
        required:true,
        type:Number
    },
    tag:{
        required:true,
        type:String
    }
})

 export const Product = mongoose.model("Product",productSchema)