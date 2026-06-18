import React from "react";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors } // Extracted errors to show validation messages
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

formData.append("firstname", data.firstname);
formData.append("middlename", data.middlename);
formData.append("lastname", data.lastname);
formData.append("dateofbirth", data.dateofbirth);
formData.append("gender", data.gender);
formData.append("emailaddress", data.emailaddress);
formData.append("address",data.address)


if(data.image && data.image.length > 0){
  formData.append("image", data.image[0]);
}


await axios.post("http://localhost:2001/table",
 formData,
 {
  headers:{
    "Content-Type":"multipart/form-data"
  }
 }
);





      await axios.post("http://localhost:2001/table", data);
      toast.success("Registered Successfully");
      navigate("/table");
    }
    catch(error){
    
    console.log("FULL ERROR:", error);
    
    
    
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
            <input 
              type="text"
              {...register('firstname', { required: "First name is required" })} 
              placeholder="Enter your First Name"
              className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
          </div>

          {/* Middle Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Middle Name</label>
            <input
              type="text"
              {...register("middlename")} // Fixed registration key
              placeholder="Enter your Middle Name" // Fixed placeholder
              className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              {...register('lastname', { required: "Last name is required" })}
              placeholder="Enter your Last Name"
              className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Gender</label>
            <select
              {...register("gender", { required: "Please select a gender" })}
              className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
          </div>

          {/* Date of Birth */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              {...register('dateofbirth', { required: "Date of birth is required" })}
              className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.dateofbirth && <p className="text-red-500 text-sm mt-1">{errors.dateofbirth.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              {...register("emailaddress", { required: "Email is required" })}
              placeholder="Enter your Email"
              className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.emailaddress && <p className="text-red-500 text-sm mt-1">{errors.emailaddress.message}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Address</label>
            <input
              type="text"
              {...register('address', { required: "Address is required" })}
              placeholder="Enter your Address"
              className="w-full border border-green-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
          </div>


          <div>

<label>Image</label>
<input
type="file"
accept="image/*"
{...register("image",{required:"Image is required"})}className="w-full border p-3 rounded-xl"/>


{errors.image &&<p className="text-red-500">{errors.image.message}</p>}

</div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-green-700 transition duration-300 shadow-lg hover:shadow-green-400"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;