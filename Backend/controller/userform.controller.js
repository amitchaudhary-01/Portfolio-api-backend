import { User } from "../schema/users.js"

export const userformCreate = async(req,res)=>{
    try {
        const{firstname, lastname, email, contact} = req.body

        const form = await User.create({
            firstname,
            lastname,
            email,
            contact
        })
        res.status(200).json({
            message:"Form Data Created Successfully",
            data:form

        })
        
    } catch (error) {
        res.status(500).json({
            message:"Server Error"
        })
        
    }
}