import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import React from 'react'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchProjects = async () => {
    try {
      const res = await fetch("http://localhost:2001/projects");

      console.log("Status:", res.status);

      const data = await res.json();

      console.log("API Data:", data);

      setProjects(data);
    } catch (err) {
      console.log("Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProjects();
}, []);


  return (
    <div className="grid md:grid-cols-3 gap-8">
  {projects.map((p) => (
    <motion.div
      key={p.id}
      whileHover={{ y: -10, scale: 1.03 }}
      className="p-6 mt-10 rounded-2xl  backdrop-blur-xl border border-white/10 shadow-lg bg-blue-400"
    >
      <h3 className="text-xl font-semibold">{p.name}</h3>
      <p className="text-white mt-2">{p.category}</p>

      <a href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-600"
      >
        View Project
      </a>
    </motion.div>
  ))}
</div>
  )
}

export default Projects



  




  

  