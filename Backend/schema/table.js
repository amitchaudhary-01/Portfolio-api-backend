import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
    name:{
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
    thumbnail:{
        required:true,
        type:String
    },
    item:{
        required:true,
        type:String
    }
    

})

export const Table = mongoose.model("table",tableSchema)