import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoaderScreen from "./Components/Loaderscreen";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

// import { Product } from "../../Backend/schema/product";
import Products from "./Pages/Products";
import Users from "./Pages/Users";
import Form from "./Pages/Form";
import Table from "./Pages/Table";
import AddUser from "./Pages/AddUser";
import Edit from "./Pages/Edit";
import Product_Table from "./Pages/Product_Table";
import AddProduct from "./Pages/AddProduct";
import ProductEdit from "./Pages/ProductEdit";
import Loaderscreen from "./Components/Loaderscreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // fake initial loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loaderscreen />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/register" element={<Form/>}/>
            <Route path="/adduser" element={<AddUser/>}/>
            <Route path="/table" element={<Table/>}/> 
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="/tableproduct" element={<Product_Table/>}/>
            <Route path="/addproduct" element={<AddProduct/>}/>
            <Route path="/productedit/:id" element={<ProductEdit/>}/>
            {/* <Route path="/edit" element={<Edit/>}/> */}
          </Routes>
        </main>
        {/* <div className="flex gap-190">
        <Users/>
        <Products/>
        </div> */}

     

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;