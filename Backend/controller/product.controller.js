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


export const updateProduct = async(req,res)=>{
  try {

     const {id} = req.params
            // const req = req.body
    
            const productdata = await Product.findByIdAndUpdate(
                id,
                req.body,
                {new:true}
            )
    
             res.status(200).json({
        message:"product updated sucessfully",
        data:productdata
      })
    
  } catch (error) {
    res.status(500).json({
            message:"Server Crash"
        })
    
  }
}

export const getProduct = async(req,res)=>{
  try {
    const productData = await Product.find()
   
    res.status(200).json({
      message:"Successfully",
       data:productData
    })
  } catch (error) {
    res.status(500).json({
      message:"Server crash"
    })

  }
}

export const getProductById = async(req,res)=>{
  try {
    
    const id = req.params.id
console.log(id)

    const productData = await Product.findById(id)
   
    res.status(200).json({
      message:"Successfully",
       data:productData
    })
  } catch (error) {
    res.status(500).json({
      message:"Server crash"
    })

  }
}

