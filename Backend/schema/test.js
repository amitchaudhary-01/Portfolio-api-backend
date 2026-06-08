import mongoose from "mongoose";
const testSchema = new mongoose.Schema({
    caption:{
        required:true,
        type:String
    },
    image:{
        required:true,
        type:String
    }
})

export const Test = mongoose.model("test",testSchema)