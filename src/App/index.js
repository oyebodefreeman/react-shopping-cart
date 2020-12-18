import  React, { Fragment, useState } from 'react';
import Products from './Products';
import Cart from './Cart';

export default function App() {
    const [cart, setCart] = useState([]);
    return (
        <Fragment>
            <Cart cart={cart} />
            <div>
                <h1>Fruits Shop</h1>
                <Products cart={cart} setCart={setCart}/>
            </div>
        </Fragment>
    )
}