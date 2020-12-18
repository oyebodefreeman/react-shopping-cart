import React from 'react';


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

export default function Products({ setCart, cart }) {
    const addToCart = (product) => { 

        const isAleadyInCart = cart.find((cartItem) => cartItem === product);

        if (isAleadyInCart) {
            const cartProductIndex = cart.findIndex((cartItem) => cartItem === product); 
            product.quantity++;
            cart[cartProductIndex] = product;
            setCart([...cart]);
        } else {
            setCart([...cart, product]);
        }
       
    }
    return (
        <div>
            {products.map((product, index) => {
                return (
                    <div key={`product-${index}`}>
                        <h4>{product.name}</h4>
                        <button onClick={() => addToCart(product)}>Add To Cart</button>
                    </div>
                ); 
            })}
        </div>
    )
}