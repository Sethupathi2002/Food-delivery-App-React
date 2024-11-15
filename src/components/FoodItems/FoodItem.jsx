import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreFoodContext } from '../../context/StoreFoodContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreFoodContext);

    // Access the count for this specific item
    const itemCount = cartItems[id] || 0;

    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img className='food-item-image' src={image} alt={name} />
                {itemCount === 0 ? (
                    <img
                        className='add'
                        src={assets.add_icon_white}
                        onClick={() => addToCart(id)}  // Pass the item's id
                        alt='Add Icon'
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img
                            src={assets.remove_icon_red}
                            onClick={() => removeFromCart(id)}  // Pass the item's id
                            alt='Remove Icon'
                        />
                        <p>{itemCount}</p>
                        <img
                            src={assets.add_icon_green}
                            onClick={() => addToCart(id)}  // Pass the item's id
                            alt='Add Icon'
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <div className="food-item-price-description">
                    <p className='food-item-description-text'>{description}</p>
                    <p className='food-item-description-price'>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
