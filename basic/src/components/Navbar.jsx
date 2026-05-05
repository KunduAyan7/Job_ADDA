import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
       
        <h1 className="logo1">JOB_ADDA</h1>

        <ul className="nav-links">

          <li><Link to="/home">Home</Link></li>
          <li><Link to="/jobs">Find Job</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact </Link></li>
        </ul>

        
              
      </nav>
    </header>
  )
}

export default Navbar
