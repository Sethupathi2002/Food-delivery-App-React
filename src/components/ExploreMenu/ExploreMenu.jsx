import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    console.log(category);
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our Menu</h1>
            <p className='explore-menu-para'>Our menu is a collection of mouth-watering dishes that will leave your taste buds in ecstasy.
                From delectable appetizers to delectable desserts.</p>

            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div
                            onClick={() => setCategory(category === item.menu_name ? "All" : item.menu_name)}
                            key={index}
                            className='explore-menu-list-item'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>

                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
