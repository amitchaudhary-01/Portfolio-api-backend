import { Product } from "../schema/product.js";

export const productCreate = async(req,res)=>{
try {

    const {title, price, description, category, stock , rating, brand, discountpercentage, tag, review} = req.body

    const product = await Product.create({
  title,
  price,
  category,
  description,
  stock,
  rating,
  brand,
  review,
  discountpercentage,
  tag
})

res.status(200).json({
  message:"Product data created successfully",
  data:product
})
    
} catch (error) {
    res.status(500).json({
        message:"Server Crash"
    })
    
}
}