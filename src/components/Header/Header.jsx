import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2 className='header-contents-heading'>Order your favorite foods here</h2>
                <p className='header-contents-para'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and prepared with utmost care.
                    Our chefs are passionate about creating mouth-watering dishes that will leave your taste buds in ecstasy.</p>
                <button className='header-view-button'>View Menu</button>
            </div>

        </div>
    )
}

export default Header
