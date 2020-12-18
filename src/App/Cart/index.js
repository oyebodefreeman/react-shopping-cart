import  React from 'react';

export default function App({ cart }) {
    return (
        <div>
            <h1>Cart</h1>
            {cart.length === 0 ? <div>Cart is empty</div> : (
                <ul>
                {cart.map((item, index) => {
                   return  <li key={`cart-${index}`}>{item.name} x{item.quantity}</li>
               })}
                </ul>
            )}
            
           
        </div>
    )
}