import axios from "axios";
import React from "react";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

const Form = () => {
    const {
    register,
    handleSubmit,
  } = useForm();

const navigate = useNavigate()

const onSubmit = async(data)=>{
    try {
        const res = await axios.post("http://localhost:2001/getform",data)
        toast.success("Registered Successfully")
        navigate("/")
    } catch (error) {
        console.log(error)
        toast.error("Invalid Criteria")  
    }
}
  

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Registration Form
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              First Name
            </label>
            <input type="text"
              {...register('firstname')}
              placeholder="Enter First Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              {...register('lastname')}
              placeholder="Enter Last Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              {...register('email')}
            
              placeholder="Enter Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              {...register("contact")}
              placeholder="Enter Contact Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;