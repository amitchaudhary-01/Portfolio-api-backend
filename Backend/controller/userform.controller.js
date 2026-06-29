import { Uform } from "../schema/form.js"
import bcrypt from 'bcrypt'

export const uformCreate = async(req,res)=>{
    try {
        const{firstname, lastname, email, contact} = req.body

         const images = req.files.map((file) => file.filename);

console.log(images);

        if(!firstname || !lastname || !email || !contact){
            return res.status(400).json({
                message:"Data Missing"
            })
        }

        if(!images){
            return res.status(404).json({
                message:"Image Missing"
            })
        }

        const Email = await Uform.findOne({$or:[{email:email},
            {contact:contact}
        ]})

        if(Email){
            return res.status(400).json({
                message:"Email or Contact Already exists"
            })
        }


const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0/\/", salt);


        const form = await Uform.create({
            firstname,
            lastname,
            email,
            contact,
            images
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

export const getForm = async(req,res)=>{
    try {
        const formData = await Uform.find()
         
        res.status(200).json({
            message:"Get Form data Successfully",
            data:formData
        })
    } catch (error) {
        res.status(500).json({
            message:"Server Error"
        })
        
    }
}