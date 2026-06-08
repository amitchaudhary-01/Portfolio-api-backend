import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoaderScreen from "./Components/Loaderscreen";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

import Loaderscreen from "./Components/Loaderscreen";
// import { Product } from "../../Backend/schema/product";
import Products from "./Pages/Products";
import Users from "./Pages/Users";

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
          </Routes>
        </main>
        <div className="flex gap-190">
        <Users/>
        <Products/>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;