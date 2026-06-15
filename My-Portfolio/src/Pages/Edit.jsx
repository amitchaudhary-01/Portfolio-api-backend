import axios from "axios";
import React from "react";
import {useForm} from "react-hook-form"
const Edit = () => {
    const {
    register,
    handleSubmit,
  } = useForm();

const onSubmit = async(data)=>{
    try {
        const res = await axios.post("http://localhost:2001/getform",data)
        alert("Change Data Successfully")
    } catch (error) {
        console.log(error)  
    }
}
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Edit
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Enter Data
            </label>
            <input type="text"
              {...register('Data')}
              placeholder="Enter Enter Data"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Confirm Data
            </label>
            <input
              type="text"
              {...register('confirmdata')}
              placeholder="Confirm Data"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-md">
            Change Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;