import React from 'react'
import { Loader } from "lucide-react";

const Loaderscreen = () => {
  return (
     <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white">
      <Loader className="w-12 h-12 text-purple-500 animate-spin" />
      <p className="mt-4 text-gray-400">Loading My Portfolio...</p>
    </div>
  )
}

export default Loaderscreen
