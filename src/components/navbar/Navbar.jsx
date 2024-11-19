import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { StoreFoodContext } from '../../context/StoreFoodContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");

    const { getTotalCartAmount } = useContext(StoreFoodContext)

    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <Link to='/'> <img src={assets.logo} alt="Logo" /></Link>
            </div>
            <div className='navbar-list'>
                <ul className='navbar-list-items'>
                    <li
                        onClick={() => setMenu("home")}
                        className={menu === "home" ? "active" : ""}
                    >
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        onClick={() => setMenu("menu")}
                        className={menu === "menu" ? "active" : ""}
                    >
                        Menu
                    </li>
                    <li
                        onClick={() => setMenu("mobileApp")}
                        className={menu === "mobileApp" ? "active" : ""}
                    >
                        Mobile App
                    </li>
                    <li
                        onClick={() => setMenu("contact")}
                        className={menu === "contact" ? "active" : ""}
                    >
                        Contact Us
                    </li>
                </ul>
            </div>
            <div className='navbar-right'>
                <div className="navbar-right-icons">
                    <img src={assets.search_icon} alt="Search" />
                    <div className='navbar-right-icons-basket'>
                        <Link to="/cart">
                            <img src={assets.basket_icon} alt="Cart" />
                        </Link>
                        <div className={getTotalCartAmount() === 0 ? "" : "navbar-right-icons-basket-dot"}></div>
                    </div>
                </div>
                <button
                    className='sign-in-button'
                    onClick={() => setShowLogin(true)}
                >
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Navbar;
