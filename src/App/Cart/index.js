import  React from 'react';

import { useCart } from '../../hooks/use-cart';

export default function App() {
    const cart = useCart();
    return (
        <div>
            <h1>Cart</h1>
            {cart.cartItems.length === 0 ? <div>Cart is empty</div> : (
                <ul>
                {cart.cartItems.map((item, index) => {
                   return  <li key={`cart-${index}`}>{item.name} x{item.quantity}</li>
               })}
                </ul>
            )}
            
           
        </div>
    )
}