import { Users } from "../schema/users.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'

export const userCreate = async(req,res)=>{
    try {
        const{firstname,lastname, contact, email, age, gender, username, password, bloodgroup, height, weight, address } = req.body 

        if(!firstname || !lastname || !contact || !email || !age || !gender || !username || !password || !bloodgroup || !height || !weight || !address){
            return res.status(400).json({
                message:"User Data Missing"
            })
        } 
        const exist = await Users.findOne({$or:[{contact},
            {email},
            {username}
        ]})

if(exist){
    if(exist.contact===contact){
        return res.status(400).json({
            message:"contact already exist"
        })
    }
    if(exist.email === email){
        return res.status(400).json({
            message:"Email already exist"
        })
    }
    if(exist.username === username){
        return res.status(400).json({
            message:"Username Already Exist"
        })
    }
}
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync("B4c0/\/", salt);



     const data = await Users.create({
    firstname,
    lastname,
    contact,
    email,
    age,
    gender,
    username,
    password:hash,
    bloodgroup,
    height,
    weight,
    address
  })
  res.status(200).json({
    message:"user created sucessfully",
    data:data
  })
        
    } catch (error) {
        res.status(500).json({
            message:"server crash vayo"
        })   
    }
}


export const updateUser = async (req,res)=>{
    try {
        
        const {id} = req.params
        const userdata = await User.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
         res.status(200).json({
            message:"user updated sucessfully",
            data:userdata
        })
    } catch (error) {
        res.status(500).json({
            message:"Server Crash"
        })   
    }
}


export const deleteUser = async(req,res)=>{
    try {
        const {id} = req.params

        const userData = await User.findByIdAndDelete(
            id
        )

        res.status(200).json({
            message:"Delete successfully",
            data:userData
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Server Error"
        })
        
    }
}


export const getUser = async(req,res)=>{
    try {
        const userData = await User.find()

        res.status(200).json({
            message:"Successfully Get",
            data:userData
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Server Crash"
        })
        
    }
}


export const getUserbyId = async(req,res)=>{
    try {
const id = req.params.id

        const userData = await User.findById(id)

        res.status(200).json({
            message:"Successfully Get",
            data:userData
        })

        
        
    } catch (error) {
        res.status(500).json({
            message:"Server Crash"
        })
        
    }
}