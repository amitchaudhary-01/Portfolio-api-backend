import React from "react";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {Link, useNavigate} from "react-router-dom"
import { toast } from "react-toastify";


const AddUser = () => {

const {
    register,
    handleSubmit,
  } = useForm();

  const navigate = useNavigate()
 

const onSubmit = async(data)=>{
    try {
        const res = await axios.post("http://localhost:2001/table",data)
        toast.success("Registered Successfully")
        navigate("/table")
    } catch (error) {
        console.log(error)
        toast.error("Invalid detail")
    }
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center px-4 py-10">
       
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-2">Add</h1>

        <p className="text-center text-gray-500 mb-8">Add User</p>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">First Name</label>
            <input type="text"{...register('firstname')} placeholder="Enter your First Name"
              className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </div>

          {/* Middle Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Middle Name
            </label>
            <input
              type="text"
              {...register('middlename')}
              placeholder="Enter your Middle Name"
              className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              {...register('lastname')}
              placeholder="Enter your Last Name"
              className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Gender
            </label>
            <select 
            {...register('gender')}
            className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              {...register('dateofbirth')}
              className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              {...register('emailaddress')}
              placeholder="Enter Email Address"
              className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </div>

          {/* address */}

          <div>
            <label className="block mb-2 font-medium text-gray-700">
             Address
            </label>
            <input
              type="address"
              {...register('address')}
              placeholder="Enter your Address"
              className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </div>

         

          

          {/* Button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-green-700 transition duration-300 shadow-lg hover:shadow-green-400">
              Add User
            </button>
          </div>
           {/* <Link to="/table" className="border-2 bg-orange-300 hover:bg-orange-200  ">User Table</Link> */}
        </form>

       
      </div>
    </div>
  );
};

export default AddUser;