import { Uform } from "../schema/form.js"

export const uformCreate = async(req,res)=>{
    try {
        const{firstname, lastname, email, contact} = req.body

        if(!firstname || !lastname || !email || !contact){
            return res.status(400).json({
                message:"Data Missing"
            })
        }

        const form = await Uform.create({
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
        console.log(error);
        
        
    }
}