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

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const res = await fetch("http://localhost:2001/projects");
  //       if (!res.ok) throw new Error("Failed to fetch projects");

  //       const data = await res.json();
  //       setProjects(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="h-screen flex items-center justify-center text-gray-500">
  //       Loading projects...
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="h-screen flex items-center justify-center text-red-500">
  //       {error}
  //     </div>
  //   );
  // }
  return (
    <div className="grid md:grid-cols-3 gap-8">
  {projects.map((p) => (
    <motion.div
      key={p.id}
      whileHover={{ y: -10, scale: 1.03 }}
      className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg"
    >
      <h3 className="text-xl font-semibold">{p.name}</h3>
      <p className="text-gray-400 mt-2">{p.category}</p>

      <a
        href={p.link}
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



  


//   useEffect(() => {
//   fetch("http://localhost:2001/projects")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }, []);

  

  