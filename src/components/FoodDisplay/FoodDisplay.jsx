import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreFoodContext } from '../../context/StoreFoodContext';
import FoodItem from '../FoodItems/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreFoodContext); // Destructuring from context

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => (
                    <FoodItem
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default FoodDisplay;
