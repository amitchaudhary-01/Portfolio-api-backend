import { Table } from "../schema/table.js";

export const tableCreate = async(req,res)=>{
    try {

        const{firstname, middlename, lastname, dateofbirth, gender, emailaddress, address} = req.body

        const image = req.file.filename

        if(!firstname|| !middlename || !lastname|| !dateofbirth|| !gender || !emailaddress || !address  ){
            return res.status(404).json({
                message:"Data are missing"
            })
        }


if (!image)
{
     return res.status(404).json({
                message:"Data are missing"
            })
}

        // if(!req.file){
        //     return res.status(400).json({
        //         message:"Image missing"
        //     })

        // }



        const data= await Table.create({
            firstname,
            middlename, 
            lastname,
            dateofbirth,
            gender,
            emailaddress,
            address,
           image
           
        })
        res.status(200).json({
            message:"Table Created Successfully",
            data:data
        })   
    } catch (error) {
        res.status(500).json({
            message:"Server Error"
        })
        console.log(error)
    }
}

export const getTable = async(req,res)=>{
    try {
        const tableData = await Table.find()

        res.status(200).json({
            message:"Data Get Successfully",
            data:tableData
        })
    } catch (error) {
        res.status(500).json({
            message:"Server ERror"
        })
        
    }
}

export const getTablebyId = async(req,res)=>{

    try {
        const {id}= req.params

        const data = await Table.findById(id)

        res.status(200).json({
            message:"Get user Data",
            data:data
        })
    } catch (error) {
        res.status(500).json({
            message:"Server Error"
        })
        
    }
}

export const updateTable = async(req,res)=>{
    try {
        const {id} = req.params
        const data = await Table.findByIdAndUpdate(id,req.body,{new:true})

        res.status(200).json({
            message:"Get Single Table DAta",
            data:data
        })
    } catch (error) {
        res.status(500).json({
            message:'Server ERror'
        })
        
    }
}

export const deleteTable = async(req,res)=>{
    try {
        const {id} = req.params

        const data = await Table.findByIdAndDelete(id)

        res.status(200).json({
            message:"Delete Successfully",
            data:data
        })
    } catch (error) {
        res.status(500).json({
            message:"Server ERRor"
        })
        
    }
}