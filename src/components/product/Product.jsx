import React from 'react';
import './product.css'
const Product = (props) => {
    const {img , name, ratings, price, seller} = props.product;
        return (
        <div className='product'>
       <img src={img} alt="" />
       <div className='product-info'>
       <h6 className='product-name'>{name}</h6>
       <p>Price: ${price}</p>
       <p>Manufacturer: {seller}</p>
       <p>Rating: {ratings}</p>
       </div>
       <button className='btn-add-product'>Add to cart</button>
        </div>
    );
};

export default Product;