import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/frontend_assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Log in");

    return (
        <div className='login-popup' id='login-popup'>
            <form action="" className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt="Close" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Sign up" && <input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Your Password' required />
                </div>
                <button type="submit">{currentState === "Sign up" ? "Create Account" : "Log in"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" id="login-popup-condition-check" required />
                    <p>By continuing, I agree to the Terms and Conditions</p>
                </div>
                {currentState === "Log in" ? (
                    <p>Create a new account? <span onClick={() => setCurrentState("Sign up")}>Click Here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrentState("Log in")}>Login Here</span></p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
