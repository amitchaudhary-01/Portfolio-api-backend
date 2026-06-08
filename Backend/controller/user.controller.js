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
