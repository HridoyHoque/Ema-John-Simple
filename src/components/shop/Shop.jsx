import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'
import Cart from '../cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'



const Shop = () => {
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }

    const handleRemoveFromCart = () => {
        setCart([]);
        deleteShoppingCart();

    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    product.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}>
                    <Link className='proceed-link' to='/orders'>
                        <button className='btn-checkout'>Review Order <FontAwesomeIcon icon={faArrowCircleRight} /></button>
                        
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;