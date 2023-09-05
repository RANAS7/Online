import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/' className='logo'>ROOM HUNT</NavLink>
    <div>
    <NavLink id='add-item' to='/addRoom' variant="outlined">Add Room</NavLink>
    </div>
    <div id='menu'>
    <NavLink to='/contact' variant="outlined">Contact Us</NavLink>
    <NavLink to='/about' variant="outlined">About Us</NavLink>
    <NavLink to='/login' variant="outlined">Login</NavLink>
    <NavLink to='/signUp' variant="outlined">SignUp</NavLink>
    
    </div>
    </div>
  )
}

export default Navbar