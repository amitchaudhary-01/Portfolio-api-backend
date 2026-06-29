import { Auth } from "../schema/auth.schema.js";
import bcrypt from 'bcrypt'

export const authCreate = async(req,res)=>{
    try {
        const{name, password, email, contact} = req.body



        if(!name || !password || !email || !contact){
            return res.status(400).json({
                message:"Data Missing"
            })
        }


        const existingUser = await Auth.findOne({
    $or: [
        { email: email },
        { contact: contact }
    ]
});


if (existingUser) {
    if (existingUser.contact === contact) {
        return res.status(400).json({ message: "Contact number already exists" });
    }
    if (existingUser.email === email) {
        return res.status(400).json({ message: "Email already exists" });
    }
}



        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync("B4c0/\/", salt);

        const data = await Auth.create({
            name,
            password:hash,
            email,
            contact
        })
        res.status(200).json({
            message:" Auth Created Successfully",
            data:data

        })
        
    } catch (error) {
        res.status(500).json({
            message:"Server Error"
        })
        console.log(error);
    }
}

