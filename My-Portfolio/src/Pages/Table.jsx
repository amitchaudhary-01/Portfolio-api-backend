import React, { useEffect, useState } from "react";
import axios from "axios"
import { ArrowDownToLine } from 'lucide-react';
import { Trash } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import {Link} from "react-router-dom"

const Table = () => {

  const [data,setData] =useState([])


  const fetchData = async()=>{
    try {

      const res = await axios.get("http://localhost:2001/gettable")

      setData(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])


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
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

         


          <tbody>
            {
       data.map((value)=>{
        return (
          <tr key={value.id}>
            <td>{value.firstname}</td>
            <td>{value.middlename}</td>
            <td>{value.lastname}</td>
            <td>{value.dateofbirth}</td>
            <td>{value.gender}</td>
            <td>{value.emailaddress}</td>
            <td>{value.address}</td>
            <td>
                <p className="flex">
                  <ArrowDownToLine/>
                    <Trash />
                      <SquarePen />
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