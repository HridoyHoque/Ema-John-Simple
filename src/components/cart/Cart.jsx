import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    // const {cart} = props
   console.log(cart)
    let total = 0;
    let totalshipping = 0;
    for (const product of cart){
        total = total + product.price;
        totalshipping = totalshipping + product.shipping
    }
    const tax = total * 7 / 100
    const GrandTotal = total + totalshipping + tax;
        return (
            <div className='cart'>
                <h2>Order Summary</h2>
                <h3>selected items: {cart.length}</h3>
                <h3>Total Price: {total} </h3>
                <h3>Total Shipping Charge: {totalshipping}</h3>
                <h3>Tax: {tax}</h3>
                <h2>Grand Total: {GrandTotal}</h2>
            </div>
        );
};

export default Cart;