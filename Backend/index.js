import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dbConnect from "./config/db.js";
import { Product } from "./schema/product.js";
import { User } from "./schema/users.js";
import { Test } from "./schema/test.js";
import { getUser, userCreate, getUserbyId, updateUser } from "./controller/user.controller.js";
import { getProduct, getProductById, productCreate, updateProduct } from "./controller/product.controller.js";
const app = express();

app.use(cors());
app.use(express.json())

dbConnect();

app.get("/",(req,res)=>{
  res.send("Data is integrated to schema mongodb/ test/ user ")
})


app.get("/projects", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Kapda",
      category: "Fashion Shop",
      link: "https://kapda-phi.vercel.app/",
    },
    {
      id: 2,
      name: "Movie Search",
      category: "Entertainment",
      link: "https://movie-search-application-xi.vercel.app/",
    },
    {
      id: 3,
      name: "Product Table",
      category: "Dynamic Routing",
      link: "https://product-table-with-dynamic-routing.vercel.app/",
    },
    {
      id: 4,
      name: "Joke Generator",
      category: "Funny and entertainment",
      link: "https://joke-eosin-delta.vercel.app/",
    },
  ]);
});


app.get("/test",async(req,res)=>{
  try {
    
    const {caption,image} = req.body

    const test = await Test.create({
      caption,
      image
    })


    res.status(200).json({
      message:"test created sucessfully",
      data:test
    })
    
  } catch (error) {
    res.status(500).json({
      message:" server cerror"
    })
    
  }
})


////////////user data created and show error if occurance
app.get("/add",userCreate)

////////////product data created and show error if happens
app.get("/reg",productCreate)


app.get("/getproduct",getProduct)

app.get("/getproduct/:id",getProductById)

app.get("/productupdate/:id",updateProduct)




///////get user data from database
app.get("/getuser",getUser)

app.get("/getuser/:id",getUserbyId)

app.get("/userupdate/:id",updateUser)






app.get("/gettest",async(req,res)=>{
  try {
    const testData = await Test.find();

  res.status(200).json({
   message:"test data in database",
   data:testData
})
    
  } catch (error) {
    res.status(500).json({
    message:"Server Crashed",
  })
    
  }
})





app.listen(2001, () => {
  console.log("Server running on http://localhost:2001");
});