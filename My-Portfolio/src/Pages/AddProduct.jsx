import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm();


  const navigate = useNavigate();


  const onSubmit = async(data)=>{

    try {

      await axios.post("http://localhost:2001/producttable",data);

      toast.success("Product Added Successfully");

      navigate("/tableproduct");


    } catch(error){
  console.log(error.response?.data);

  toast.error(
    error.response?.data?.message || "Something went wrong"
  );
}
  };


  return (

<div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center px-4 py-10">

<div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl">


<h1 className="text-4xl font-bold text-center text-green-700">
Add Product
</h1>


<form onSubmit={handleSubmit(onSubmit)}className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">


{/* Title */}

<div>

<label>Title</label>

<input
type="text"
placeholder="Enter title"{...register("title",{required:"Title is required"})}className="w-full border p-3 rounded-xl"/>


{
errors.title &&
<p className="text-red-500">
{errors.title.message}
</p>
}


</div>



{/* Description */}

<div>

<label>Description</label>

<textarea

placeholder="Enter description"

{...register("description")}

className="w-full border p-3 rounded-xl"

/>

</div>




{/* Price */}

<div>

<label>Price</label>

<input

type="number"

placeholder="Enter price"

{...register("price",{required:"Price is required",valueAsNumber:true})}


className="w-full border p-3 rounded-xl"

/>


{
errors.price &&
<p className="text-red-500">
{errors.price.message}
</p>
}


</div>





{/* Category */}

<div>

<label>Category</label>

<select

{...register("category",{required:"Select category"})}className="w-full border p-3 rounded-xl">


<option value="">
Select Category
</option>

<option value="Fashion">
Fashion
</option>

<option value="Food">
Food
</option>

<option value="Other">
Other
</option>


</select>


{
errors.category &&
<p className="text-red-500">
{errors.category.message}
</p>
}


</div>





{/* Quantity */}

<div>

<label>Quantity</label>


<select

{...register("qty",{

required:"Choose quantity"

})}


className="w-full border p-3 rounded-xl"

>


<option value="">
Select Quantity
</option>

<option value="1">
1
</option>

<option value="2">
2
</option>

<option value="3">
3
</option>


</select>



{
errors.qty &&
<p className="text-red-500">
{errors.qty.message}
</p>
}



</div>





{/* Review */}

<div>


<label>Review</label>


<input

type="text"

placeholder="Enter Review"


{...register("review")}


className="w-full border p-3 rounded-xl"

/>


</div>




<div className="md:col-span-2">


<button

type="submit"

className="w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700"

>

Add Product

</button>


</div>


</form>


</div>

</div>


  )

}


export default AddProduct;