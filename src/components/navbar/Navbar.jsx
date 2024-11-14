import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <img src={assets.logo} alt="Logo Image" />
            </div>
            <div className='navbar-list'>
                <ul className='navbar-list-items'>
                    <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                    <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                    <li onClick={() => setMenu("mobileApp")} className={menu === "mobileApp" ? "active" : ""}>Mobile App</li>
                    <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}> Contact us</li>
                </ul>
            </div>
            <div className='navbar-right'>
                <div className="navbar-right-icons">
                    <img src={assets.search_icon} alt="Search Icon" />
                    <div className='navbar-right-icons-basket'>
                        <img src={assets.basket_icon} alt="Cart Icon" />
                        <div className="navbar-right-icons-basket-dot"></div>
                    </div>
                </div>
                <button className='sign-in-button'> Sign in</button>
            </div>
        </div>
    )
}

export default Navbar
