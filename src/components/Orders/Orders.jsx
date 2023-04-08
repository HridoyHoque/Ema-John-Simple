import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../reviewItems/ReviewItems';
import './Orders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt, faArrowCircleRight, faCheckToSlot } from '@fortawesome/free-solid-svg-icons'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)

    const handleRemoveCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleRemoveFromCart = () => {
        setCart([]);
        deleteShoppingCart();

    }
    console.log(savedCart)
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        handleRemoveCart={handleRemoveCart}
                    ></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}>
                    <Link className='proceed-link' to='/Checkout'>
                        <button className='btn-checkout'>Proceed Checkout 
                        <FontAwesomeIcon icon={faCheckToSlot} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;