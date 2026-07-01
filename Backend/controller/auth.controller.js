import { Auth } from "../schema/auth.schema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
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

       const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password, salt);

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



//login 


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and Password missing"
            });
        }

        const user = await Auth.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User doesn't exist"
            });
        }

        const checkpw = await bcrypt.compare(password, user.password);

        if (!checkpw) {
            return res.status(401).json({
                message: "Email or password is incorrect"
            });
        }

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, { expiresIn: '1h' })
        
        res.cookie("user",token,{
            httpOnly:true,
            maxAge: 24 * 60 * 60 * 1000
        })
        return res.status(200).json({
            message:"User Logged In Successfully",
            data : user.name
        })

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Server Error"
        });
    }
};





