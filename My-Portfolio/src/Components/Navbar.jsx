
import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {

    // const[search,setSearch]=useState("")
    // const searchData = data.filter((value)=>{
    //     value.category.toLowerCase().includes(search,toLowerCase().trim())
    // })
  return (
   

    // <nav className="p-4 shadow-md flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400"> 
         <nav className='bg-orange-400 shadow-md p-4 flex justify-between items-center'>
            <h1 className='text-xl font-bold'>My Portfolio</h1>

            {/* <div className='flex justify-center items-center gap-2  h-20 w-full bg-blue-100'>
      <input type="text" placeholder='this is search'  className='border-2 bg-white'
       onChange={(e)=>{
        setSearch(e.target.value)
      }}
      value={search}/>
       <button onClick={searchData}className="text-black  rounded cursor-pointer border-2 bg-blue-400 hover:bg-orange-200">Search
         
        </button>
        </div> */}

        <div className='space-x-4'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contacts</Link> 
            <Link to="/users">Users</Link>
            <Link to="/products">Products</Link>   
            <Link to="/register">Register</Link>  
            <Link to="/table">Table</Link>
            <Link to="/adduser">Add User</Link>
            <Link to="/edit">Edit</Link>
            <Link to="/tableproduct">TableProduct</Link>
            <Link to="/addproduct">Add Product</Link>
            <Link to="/productedit">Product Edit</Link>
            <Link to="/formcard">Form Card</Link>
        </div>
        </nav>
  )
}

export default Navbar


