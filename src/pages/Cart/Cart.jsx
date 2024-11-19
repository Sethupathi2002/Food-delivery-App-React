import React, { useContext } from 'react'; // Use useContext instead of useState
import './Cart.css';
import { StoreFoodContext } from '../../context/StoreFoodContext'; // Import your context
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    // Use useContext to access the values from StoreFoodContext
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreFoodContext);

    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    // Check if the item is in the cart
                    if (cartItems[item._id] > 0) {
                        return (
                            <div>
                                <div key={index} className="cart-items-item">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>{item.price * cartItems[item._id]}</p>
                                    <p className='cross' onClick={() => { removeFromCart(item._id) }}>x</p>
                                </div>
                                <hr />

                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <p>${getTotalCartAmount() + 2}</p>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>Proceed to Check Out</button>
                </div>
                <div className="cart-promo-code">
                    <div>
                        <p>If You have a coupon code, enter it here</p>
                        <div className='cart-promo-code-input'>
                            <input type="text" placeholder="Coupon Code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
