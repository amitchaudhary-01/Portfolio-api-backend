import { Edit } from "../schema/edit.js";

export const editCreate = async(req,res)=>{
    try {
        const{data, confirmdata} = req.data

        if(!data || !confirmdata){
           return res.status(404).json({
                message:"data missing"
            })
            const data = await Edit.create({
                data,
                confirmdata
            })

            res.status(200).json({
                message:"Data Change Successfully",
                data:data
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Server Error"
        })
         console.log(error)
    }
}


export const getEdit = async(req,res)=>{
    try {
        const editData = await Edit.find()

        res.status(200).json({
            message:"data edit successfully",
            data:editData

        })
    } catch (error) {
        res.status(500).json({
            message:"Server Error"
        })
        
    }
}