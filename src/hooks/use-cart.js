import React from 'react';
import { createContext, useContext, useState } from 'react';

const cartContext = createContext();

export function ProvideCart({ children }) {
    const cart = useProvideCart();
    return <cartContext.Provider value={cart}>{children}</cartContext.Provider>
}

export const useCart = () => {
    return useContext(cartContext);
}

function useProvideCart () {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => { 

        const isAleadyInCart = cartItems.find((cartItem) => cartItem === item);

        if (isAleadyInCart) {
            item.quantity++;
            const cartItemIndex = cartItems.findIndex((cartItem) => cartItem === item); 
            cartItems[cartItemIndex] = item;
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, item]);
        }
       
    }

    return { cartItems, addItem }
}