import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name,img,seller,price,ratings,shipping} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
          <img src={img} alt="" /> 
          <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Shipping: ${shipping}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart <span> </span>
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;