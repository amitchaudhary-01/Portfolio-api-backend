import mongoose from "mongoose";

const editSchema = new mongoose.Schema({
    data:{
        required:true,
        type:String
    },
    confirmdata:{
        required:true,
        type:String
    }
})

export const Edit = mongoose.model("edit",editSchema)