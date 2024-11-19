import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreFoodContext } from '../../context/StoreFoodContext'

const PlaceOrder = () => {

    const { getTotalCartAmount } = useContext(StoreFoodContext);
    return (
        <div className='place-order'>
            <form action="" className="place-order-form">
                <div className="place-order-left">
                    <p className='title'>Delivery Information</p>
                    <div className="multi-fields">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <input type="email" placeholder='Email Address' />
                    <input type="text" placeholder='Street Address' />
                    <div className="multi-fields">
                        <input type="text" placeholder='City' />
                        <input type="text" placeholder='State' />
                    </div>
                    <div className="multi-fields">
                        <input type="text" placeholder='Zip Code' />
                        <input type="text" placeholder='Country' />
                    </div>
                    <input type="text" placeholder='Phone Number' />
                </div>
            </form>

            <div className="place-order-right">
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
                    <button>Proceed to Check Out</button>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder
