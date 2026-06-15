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

export const getEditbyId = async(req,res)=>{
    try {
        const {id} = req.params
        const data = await Edit.findById(id)
        res.status(200).json({
            message:"edit data of id",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message:"server Error"
        })
    }
}

export const updateEdit = async(req,res)=>{
    try {
        const {id} = req.params
        const data = await Edit.findByIdAndUpdate(id, req.body, {new:true})

        res.status(200).json({
            message:"updated successfully",
            data:data
        })
    } catch (error) {
      res.status(500).json({
        message:"Server Error"
      })  
    }
}