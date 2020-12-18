import  React from 'react';

import Products from './Products';
import Cart from './Cart';

import { ProvideCart } from '../hooks/use-cart'

export default function App() {
    return (
        <ProvideCart>
            <Cart/>
            <div>
                <h1>Fruits Shop</h1>
                <Products/>
            </div>
        </ProvideCart>
    )
}