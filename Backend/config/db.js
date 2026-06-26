import mongoose from "mongoose"

const dbConnect = async()=>{
    try {
       await mongoose.connect(`${process.env.DBURL}`)
       console.log("database connected")
    } catch (error)  
    {
      console.log(error)  
    }
}

export default dbConnect