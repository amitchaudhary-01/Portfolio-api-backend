import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dbConnect from "./config/db.js";
import { Product } from "./schema/product.js";
import { User } from "./schema/users.js";

const app = express();

app.use(cors());

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


////////////user data created and show error if occurance
app.get("/add",async(req,res)=>{
  try {
     const user= await User.create({
    firstname:"Amit",
    lastname:"Chaudhary",
    contact:9888888888,
    email:"ac984939@gmail.com",
    age:23,
    gender:"male",
    username:"Amit-chy",
    password:"@mit",
    bloodgroup:"AB+",
    height:5,
    weight:70,
    address:"Nawalparasi"
  })
  res.status(200).json({
    message:"user created sucessfully",
    data:user
  })
  } catch (error) {
    res.status(404).json({
      message:"404 Error",
    })
    
  }

})

////////////product data created and show error if happens
app.get("/reg",async(req,res)=>{
try {
  const product = await Product.create({
  title:"hero amit",
  price:17,
  category:"Fashion",
  description:"Tshirt",
  stock:17,
  rating:3,
  brand:"Nike",
  review:"Good for exercise",
  discountpercentage:50,
  tag:"@nike"
})

res.status(200).json({
  message:"Product data created successfully",
  data:product
})
  
} catch (error) {
  res.status(500).json({
    message:"Server Crashed",
  })
}

})

///////get user data from database
app.get("/getuser",async(req,res)=>{
  try {
const userData = await User.find();

res.status(200).json({
  message:"user data",
  data:userData
})
    
  } catch (error) {
    res.status(500).json({
    message:"Server Crashed",
  })
    
  }
})

app.get("/getproduct",async(req,res)=>{
  try {
    const productData = await Product.find();

    res.status(200).json({
      message:"Product data get from database",
      data:productData
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