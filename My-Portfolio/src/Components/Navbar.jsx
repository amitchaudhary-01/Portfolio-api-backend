// import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import {LoaderPinwheel, LogIn} from "lucide-react"


// import axios from 'axios';


// const Navbar = () => {
//   const [loading,setLoading]=useState(false)
//   const fetchData = async()=>{
//        setLoading(true)
//         const user =  await axios.get("http://localhost:5173/")
       
//         // setData(user.data)
//          setLoading(false)
//     }

//      useEffect(()=>{
//         fetchData()
        
//     },[fetch])


//   if(loading){
//   return(
    
//   <div className='flex justify-center items-center h-screen w-full'>
//    <LoaderPinwheel className='text-9xl text-blue-500 animate-spin h-40 w-30'/>
//   </div>
//   )
// }
//   return (

//      <nav 
     
//    className="fixed top-0 left-0  z-10 backdrop-blur-md border-b border-white/20 w-full gap-40">

//         <Navbar expand="lg" className="bg-orange-400 " >
//       <Container>
//         {/* <Navbar.Brand to="/home" >Amit</Navbar.Brand> */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
            
//             <img className="rounded-md w-22 h-10 " src="logo.webp"/>

//             <Nav.Link to="/" className="t0-blue-500">Home</Nav.Link>
          
//           <NavDropdown title="Company" id="basic-nav-dropdown">
//               <NavDropdown.Item to="/about">About</NavDropdown.Item>
              
//               </NavDropdown>


            
//                <Nav.Link to="/portfolio" className="to-blue-500">Portfolio</Nav.Link>
//               <Nav.Link to="/ourteam" className="to-blue-500">Our team</Nav.Link>
//               <Nav.Link to="/career" className="to-blue-500">Career</Nav.Link>
//               <Nav.Link to="/blog" className="to-blue-500">Blogs</Nav.Link>
              
             
           
//           </Nav>

//           <Nav.Link to="/login" className="to-blue-500 justify-end">Login <LogIn className="text-black " /></Nav.Link>
//         </Navbar.Collapse>
        
        
//       </Container>
//     </Navbar>

// </nav>
   
//   )
// }

// export default Navbar

import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
   
        <nav className='bg-orange-400 shadow-md p-4 flex justify-between items-center'>
            <h1 className='text-xl font-bold'>My Portfolio</h1>

        <div className='space-x-4'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contacts</Link>      
        </div>
        </nav>
  )
}

export default Navbar


