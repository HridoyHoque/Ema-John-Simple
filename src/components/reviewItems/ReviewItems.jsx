import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItems.css'
const ReviewItems = ({ product, handleRemoveCart }) => {
    const { id, img, name, quantity, price } = product;
    return (
        <div className='review-items'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price <span className='product-price'>{price}</span> </p>
                <p> Order Quantity: <span className='product-quantity'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItems;