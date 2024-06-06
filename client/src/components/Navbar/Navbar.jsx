import React, { useState } from 'react'
import './Navbar.css'
import { assests } from '../../assets/assets'

const Navbar = () => {

    const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
    <img src={assests.cafe} alt="" className='logo'/>
    <ul className="navbar-menu">
        <li onClick={() => setMenu ("home")} className={menu ==="home"? "active": ""}>Home</li>
        <li onClick={() => setMenu ("shop")} className={menu ==="shop"? "active": ""}>Shop</li>
        <li onClick={() => setMenu ("contact-us")} className={menu ==="contact-us"? "active": ""}>Contact Us</li>
        <li onClick={() => setMenu ("sign-in")} className={menu ==="sign-in"? "active": ""}>Sign In</li>
        <li onClick={() => setMenu ("sign-up")} className={menu ==="sign-up"? "active": ""}>Sign Up</li>
    </ul>
    <div className='navbar-right'>
        <img src={assests.basket_icon} alt="" />
        <div className="dot"></div>
    </div>
    </div>
  )
}

export default Navbar
