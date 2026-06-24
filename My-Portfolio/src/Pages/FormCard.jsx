import React, { useEffect, useState } from "react";
import axios from "axios";

const FormCard = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:2001/getform");

      console.log("API Response:", res.data);

      setData(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        User Information
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


        
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition"
          >
            {/* Image Section */}
             <div className="flex justify-center gap-2 flex-wrap">
              {Array.isArray(item.image) ? (
                item.image.map((img, index) => (
                  <img
                    key={index}
                    src={`http://localhost:2001/uploads/${img}`}
                    alt={`${item.firstname}-${index}`}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                  />
                ))
              ) : item.image ? (
                <img
                  src={`http://localhost:2001/uploads/${item.image}`}
                  alt={item.firstname}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                  No Image
                </div>
              )}
            </div>

            {/* User Details */}
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold">
                {item.firstname} {item.lastname}
              </h2>

              <p className="text-gray-600 mt-2">
                📧 {item.email}
              </p>

              <p className="text-gray-600">
                📱 {item.contact}
              </p>
            </div>
          </div>
        ))} 
       </div>
     </div>
  );
};

export default FormCard;