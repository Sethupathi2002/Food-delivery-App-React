import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreFoodContext = createContext();

const StoreFoodContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    // Add item to cart
    const addToCart = (itemId) => {
        setCartItems((prevCartItems) => {
            // Get the current count for the item, default to 0 if not found
            const currentCount = prevCartItems[itemId] || 0;

            // Update the cart with the new count for this item
            return { ...prevCartItems, [itemId]: currentCount + 1 };
        });
    };

    // Remove item from cart
    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) => {
            const currentCount = prevCartItems[itemId] || 0;

            if (currentCount > 1) {
                // Decrement count for this item
                return { ...prevCartItems, [itemId]: currentCount - 1 };
            } else {
                // Remove item entirely if count is 1
                const { [itemId]: _, ...rest } = prevCartItems;
                return rest;
            }
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                let itemInfo = food_list.find((product) => product._id === itemId);
                totalAmount += itemInfo.price * cartItems[itemId];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreFoodContext.Provider value={contextValue}>
            {props.children}
        </StoreFoodContext.Provider>
    );
};

export default StoreFoodContextProvider;
