import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const carts =props.carts;
    console.log(carts)
    const total = carts.reduce((previous, current)=>previous+current.price,0)
    const tax = carts.reduce((previous, current)=>previous+current.price/10,0)
    const shipping = carts.reduce((previous, current)=>previous+current.shipping,0)
    const grandtotal = total+tax+shipping;
    return (
        <div className='cart'>
            <h2>CART</h2>
            <h3>Orderd Item: {carts.length}</h3>
            <h3>Order Total: ${total.toFixed(2)}</h3>
            <h3>Shipping: ${shipping.toFixed(2)}</h3>
            <h3>Tax: ${tax.toFixed(2)}</h3>
            <h3>Grand Total: ${grandtotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;