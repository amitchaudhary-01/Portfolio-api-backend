import React, { useEffect, useState } from "react";
import axios from "axios"
import { ArrowDownToLine } from 'lucide-react';
import { Trash } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import {Link} from "react-router-dom"
import { toast } from "react-toastify";


const Product_Table = () => {

  const [data,setData] =useState([])


  const fetchData = async () => {
  try {
    const res = await axios.get("http://localhost:2001/producttable");

    console.log("API Response:", res.data);

    setData(res.data.data);
  } catch (error) {
    console.log(error);
  }
};
  useEffect(()=>{
    fetchData()
  },[])


  const deleteTableProduct = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:2001/producttable/${id}`);
    toast.success("Deleted successfully");
    fetchData();
  } catch (error) {
    console.log(error);
  }
};
  useEffect(()=>{
fetchData()
  },[])

  return (
    <div className="p-6">
      
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Quantity</th>
              <th className="px-4 py-3 text-left">Review</th>
              
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

         


          <tbody>
            {
       data.map((value)=>{
        return (
          <tr key={value._id}>
            <td>{value.title}</td>
            <td>{value.description}</td>
            <td>{value.category}</td>
            <td>{value.price}</td>
            <td>{value.qty}</td>
            <td>{value.review}</td>
            
            <td>
                <p className="flex">
                  
                    <ArrowDownToLine />

                  <button onClick={() => deleteTableProduct(value._id)} title="Delete Data">  <Trash  /></button>

                    <Link to={`/productedit/${value._id}`} title="Edit Product Data"><SquarePen />  </Link>
                      </p>
              </td>

          </tr>
        )
       })
            }
          </tbody>
        </table>
              <Link to="/addproduct" className="border-2 bg-orange-300 hover:bg-orange-200 justify-end items-end">Add Product</Link>

      </div>
    </div>
  );
};

export default Product_Table;