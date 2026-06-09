import { User } from "../schema/users.js";

export const userCreate = async(req,res)=>{
    try {
        const{firstname,lastname, contact, email, age, gender, username, password, bloodgroup, height, weight, address } = req.body 

     const user= await User.create({
    firstname,
    lastname,
    contact,
    email,
    age,
    gender,
    username,
    password,
    bloodgroup,
    height,
    weight,
    address
  })
  res.status(200).json({
    message:"user created sucessfully",
    data:user
  })
        
    } catch (error) {
        res.status(500).json({
            message:"server crash vayo"
        })
        
        
    }

}


export const updateUser = async (req,res)=>{
    try {
        
        const {id} = req.params
        // const req = req.body

        const userdata = await User.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
         res.status(200).json({
            message:"user updated sucessfully",
            data:userdata
        })

    } catch (error) {
        res.status(500).json({
            message:"Server Crash"
        })
        
        
    }
}



export const getUser = async(req,res)=>{
    try {
        const userData = await User.find()

        res.status(200).json({
            message:"Successfully Get",
            data:userData
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Server Crash"
        })
        
    }
}


export const getUserbyId = async(req,res)=>{
    try {
const id = req.params.id

        const userData = await User.findById(id)

        res.status(200).json({
            message:"Successfully Get",
            data:userData
        })

        
        
    } catch (error) {
        res.status(500).json({
            message:"Server Crash"
        })
        
    }
}