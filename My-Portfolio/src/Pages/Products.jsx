import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:2001/api/v1/table/getproduct");
        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>

      {products.map((item) => (
        <div key={item._id} className="border-2 mt-3 p-10">
          <h3>{item.title}</h3>
          <p>Price: {item.price}</p>
          <p>Category: {item.category}</p>
          <p>Rating: {item.rating}</p>
          <p>Description: {item.description}</p>
          <p>Stock: {item.stock}</p>
          <p>Brand: {item.brand}</p>
          <p>Review: {item.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;