import React from 'react'
import './Navbar.css'
import logo from "../../assets/icons8-education-48.png"
const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt='logo' />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar