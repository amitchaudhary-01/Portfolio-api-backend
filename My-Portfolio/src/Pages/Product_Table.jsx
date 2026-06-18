import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowDownToLine, Trash, SquarePen } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Product_Table = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:2001/producttable"
      );

      console.log(res.data);

      setData(res.data.data);

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);



  const deleteTableProduct = async (id) => {

    try {

      await axios.delete(
        `http://localhost:2001/producttable/${id}`
      );

      toast.success("Deleted successfully");

      fetchData();

    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }

  };


  return (

    <div className="p-6">

      <div className="flex justify-end mb-5">

        <Link
          to="/addproduct"
          className="bg-orange-400 hover:bg-orange-300 px-5 py-2 rounded"
        >
          Add Product
        </Link>

      </div>


      <div className="overflow-x-auto">

        <table className="w-full border border-gray-300 shadow-lg">

          <thead className="bg-gray-700 text-white">

            <tr>

              <th className="p-3">Title</th>
              <th className="p-3">Description</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Image</th>
              <th className="p-3">Review</th>
              <th className="p-3">Action</th>

            </tr>

          </thead>



          <tbody>


          {
            data.map((value)=>(

              <tr 
                key={value._id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-3">
                  {value.title}
                </td>


                <td className="p-3">
                  {value.description}
                </td>


                <td className="p-3">
                  {value.category}
                </td>


                <td className="p-3">
                  {value.price}
                </td>


                <td className="p-3">
                  {value.qty}
                </td>



                <td className="p-3">

                  <img
                    src={`http://localhost:2001/uploads/${value.image}`}
                    alt={value.title}
                    className="w-16 h-16 object-cover rounded"
                  />

                </td>



                <td className="p-3">
                  {value.review}
                </td>



                <td className="p-3">

                  <div className="flex gap-3">


                    <ArrowDownToLine 
                      className="cursor-pointer"
                    />


                    <button
                      onClick={() =>
                        deleteTableProduct(value._id)
                      }
                    >

                      <Trash 
                        className="text-red-500"
                      />

                    </button>



                    <Link
                      to={`/productedit/${value._id}`}
                    >

                      <SquarePen
                        className="text-blue-500"
                      />

                    </Link>


                  </div>


                </td>


              </tr>

            ))
          }


          </tbody>


        </table>


      </div>


    </div>

  );

};


export default Product_Table;