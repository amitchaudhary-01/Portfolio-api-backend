import React, { useEffect, useState } from "react";
import axios from "axios"
import { ArrowDownToLine } from 'lucide-react';
import { Trash } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import {Link} from "react-router-dom"
import { toast } from "react-toastify";


const Table = () => {

  const [data,setData] =useState([])


  const fetchData = async () => {
  try {
    const res = await axios.get("http://localhost:2001/api/v1/table/gettable");

    console.log("API Response:", res.data);

    setData(res.data.data);   
  } catch (error) {
    console.log(error);
  }
};
  useEffect(()=>{
    fetchData()
  },[])


  const deleteUser = async (id) => {
  try {
    await axios.delete(`http://localhost:2001/deletetable/${id}`);
    toast.success("Deleted successfully");
    fetchData();
  } catch (error) {
    console.log(error);
  }
};
  useEffect(()=>{
fetchData()
  },[])


//   const downloadUserData = (user) => {
//   try {
//     // 1. Convert the user object into a clean string format
//     const fileData = JSON.stringify(user, null, 2);
    
//     // 2. Create a Blob (Binary Large Object) containing the data
//     const blob = new Blob([fileData], { type: "application/json" });
    
//     // 3. Create a hidden download link in memory
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
    
//     // 4. Name the file dynamically using the user's name
//     link.download = `${user.firstname || 'user'}_data.json`;
    
//     // 5. Trigger the download automatically and clean up
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
    
//     toast.success("Download started!");
//   } catch (error) {
//     console.error("Download failed:", error);
//     toast.error("Could not download file");
//   }
// };



  return (
    <div className="p-6">
      
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left">FirstName</th>
              <th className="px-4 py-3 text-left">MiddleName</th>
              <th className="px-4 py-3 text-left">LastName</th>
              <th className="px-4 py-3 text-left">Date OF Birth</th>
              <th className="px-4 py-3 text-left">Gender</th>
              <th className="px-4 py-3 text-left">Email Address</th>
              <th className="px-4 py-3 text-left">Image</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

         


          <tbody>
            {
       data.map((value)=>{
        return (
          <tr key={value._id}>
            <td>{value.firstname}</td>
            <td>{value.middlename}</td>
            <td>{value.lastname}</td>
            <td>{value.dateofbirth}</td>
            <td>{value.gender}</td>
            <td>{value.emailaddress}</td>
            <td className="p-3">
            <img src={`http://localhost:2001/uploads/${value.image}`}alt={value.title}className="w-16 h-16 object-cover rounded"/> </td>

            <td>{value.address}</td>
            <td>
                <p className="flex">
                  {/* <button onClick={() => downloadUserData(value)} className="text-black" title="Download Data">
                          <ArrowDownToLine />
                          </button> */}

                          <ArrowDownToLine />

                  <button onClick={() => deleteUser(value._id)} title="Delete Data">  <Trash  /></button>

                    <Link to={`/edit/${value._id}`} title="Edit Data"><SquarePen />  </Link>
                      </p>
              </td>

          </tr>
        )
       })
            }
          </tbody>
        </table>
              <Link to="/adduser" className="border-2 bg-orange-300 hover:bg-orange-200 justify-end items-end">Add user</Link>

      </div>
    </div>
  );
};

export default Table;