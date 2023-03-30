import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const [product , setProduct] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div className='shop-container'>
          <div className="product-container">
            {
               product.map(product => <Product
               key={product.id}
               product={product}
               ></Product>) 
            }
            </div> 
            <div className="cart-container">
                <h2>Order Summary</h2>
                </div> 
        </div>
    );
};

export default Shop;