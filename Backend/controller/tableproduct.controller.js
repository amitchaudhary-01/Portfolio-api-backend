import { TableProduct } from "../schema/tableproduct.js";

export const tableproductCreate = async(req,res)=>{
    try {
        const {title, description, category, price, qty, review} = req.body

        if(!title || !description || !category ||!price ||!qty || !review){
            res.status(400).json({
                message:"Data Missing"
            })
        }
        const newData = await TableProduct.create({
                    title,
                    description,
                    category,
                    price,
                    qty,
                    review
                });
                return res.status(200).json({
                    message:"data created successfully",
                    data:newData
                })
    } catch (error) {
        res.status(500).json({
            message:"Server Error"
        })
    }
}

export const getTableProduct = async(req,res)=>{
    try {
        const getData = await TableProduct.find()
        return res.status(200).json({
            message:"Product Table Get Successfully",
            data:getData
        })
    } catch (error) {
        return res.status(500).json({
            message:"Server Error"
        })
        
    }
}

export const getTableProductbyId = async(req,res)=>{
    try {
const {id} = req.params

        const Data = await TableProduct.findById(id)
        if(!Data){
            return res.status(404).json({
                message:"Data Not Found"
            })
        }
        return res.status(200).json({
            message:"Get Product Data",
            data:Data
            
        })
    } catch (error) {
        return res.status(500).json({
            message:"Server Error"
        })
    }
}

export const updateTableProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const updateTable = await TableProduct.findByIdAndUpdate(id,req.body )

        return res.status(200).json({
            message:"Updated Successfully",
            data:updateTable
        })
    } catch (error) {
        return res.status(500).json({
            message:"Server Error"
        })
        
    }
}


export const deleteTableProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const data = await TableProduct.findByIdAndDelete(id)
      return  res.status(200).json({
            message:"Successfully Deleted Product",
            data:data
        })
    } catch (error) {
       return res.status(500).json({
            message:"Server Error"

        })
        console.log(error)
        
    }
}
