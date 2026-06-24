import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';


const schema = z.object({
  firstname: z.string().min(3, "First name must be at least 3 characters").max(10, "First name cannot exceed 10 characters"),

  lastname: z.string().min(2, "Last name must be at least 2 characters").max(10, "Last name cannot exceed 10 characters"),

  email: z.string().email("Please enter a valid email address"),

  contact: z.string().regex(/^[0-9]{10}$/, "Contact number must be exactly 10 digits"),
   images: z
  .any()
  .refine(
    (files) => files?.length > 0,
    "Please select at least one image"
  )
  .refine(
    (files) =>
      Array.from(files).every(
        (file) => file.size <= 2 * 1024 * 1024
      ),
    "Each file must be less than 2MB"
  )
  .refine(
    (files) =>
      Array.from(files).every((file) =>
        ["image/jpeg", "image/png"].includes(file.type)
      ),
    "Only JPG and PNG files are allowed"
  ),
    
});

const Form = () => {
  const[data,setData] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
  resolver: zodResolver(schema),
});
 const navigate = useNavigate();


  const onsubmit = async(data) =>{
    try {
      
const formdata = new FormData()

formdata.append("firstname",data.firstname)
formdata.append("lastname",data.lastname)
formdata.append("email",data.email)
formdata.append("contact",data.contact)
Array.from(data.images).forEach((file) => {
  formdata.append("images", file);
});


      const res = await axios.post("http://localhost:2001/uform",formdata)
      // setData(res.data.data)
      toast.success("register successfully")

      navigate("/formcard")

    } catch (error) {
  console.log(error.response?.data);
  console.log(error);
  toast.error(error.response?.data?.message || "Something went wrong");
}
  }

 return (
  <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex items-center justify-center p-4">
    <form
      onSubmit={handleSubmit(onsubmit)} encType="multipart/form-data" className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-4">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Registration Form
      </h2>

      {/* First Name */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          {...register("firstname")}
          placeholder="Enter first name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        <p className="text-red-500 text-sm mt-1">
          {errors.firstname?.message}
        </p>
      </div>

      {/* Last Name */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          {...register("lastname")}
          placeholder="Enter last name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        <p className="text-red-500 text-sm mt-1">
          {errors.lastname?.message}
        </p>
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          placeholder="Enter email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        <p className="text-red-500 text-sm mt-1">
          {errors.email?.message}
        </p>
      </div>

      {/* Contact */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Contact Number
        </label>
        <input
          type="text"
          {...register("contact")}
          placeholder="98XXXXXXXX"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        <p className="text-red-500 text-sm mt-1">
          {errors.contact?.message}
        </p>
      </div>

      {/* Image Upload */}
      <div>
  <label className="block mb-1 font-medium text-gray-700">Upload Images</label>

  <input type="file"multiple {...register("images")}className="w-full border border-gray-300 rounded-lg p-2 file:bg-indigo-500 file:text-white file:border-0 file:px-4 file:py-2
    file:rounded-md file:cursor-pointer"/>

  <p className="text-red-500 text-sm mt-1">
    {errors.images?.message}
  </p>
</div>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg">Submit</button>
    </form>
  </div>
);
}

export default Form
