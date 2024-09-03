import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/icons8-education-48.png"
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
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