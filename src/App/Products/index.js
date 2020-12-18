import React from 'react';

import { useCart } from '../../hooks/use-cart'


const products = [
    {
        name: "Apple",
        quantity: 1
    },
    {
        name: "Oranges",
        quantity: 1
    },
    {
        name: "Bannana",
        quantity: 1
    }
]

export default function Products() {
   const cart = useCart();
    return (
        <div>
            {products.map((product, index) => {
                return (
                    <div key={`product-${index}`}>
                        <h4>{product.name}</h4>
                        <button onClick={() => cart.addItem(product)}>Add To Cart</button>
                    </div>
                ); 
            })}
        </div>
    )
}