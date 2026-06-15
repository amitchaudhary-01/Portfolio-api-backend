import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400">        

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10 px-4">

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-orange-400 to-green-400 text-transparent bg-clip-text">
            Welcome Amit!
          </h1>

          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            To Design & Build
          </h2>

          <p className="text-gray-300 mt-6 text-lg md:text-xl">
            High-performance web experiences with modern UI & animations.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4 justify-center flex-wrap">

            {/* WORKING BUTTON */}
            

            <Link to='/projects' className="px-8 py-3 rounded-full border border-white/20 text-white backdrop-blur-md hover:bg-white/10 transition"
            >Explore Work</Link>

           
           

            <Link to="/contacts"  className="px-8 py-3 rounded-full border border-white/20 text-white backdrop-blur-md hover:bg-white/10 transition">Contact</Link>

          </div>

          

            <Link to="/adduser" className="px-8 py-3 rounded-full border border-white/20 text-white backdrop-blur-md hover:bg-white/10 transition mt-7">Add User</Link>

        </motion.div>



      </section>
    </div>
  );
};

export default Home;