import React from 'react';
import {useState} from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart,removeFromDb } from '../../utilities/fakedb';
 
const Orders = () => {
    const {products, previousCart} = useLoaderData();
    const [cart,setCart] = useState(previousCart);

    const handleClearCart =()=>{
        setCart([]);
        deleteShoppingCart();
      }
    
    const handleRemoveItem =(id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No item for review. Please <Link to='/'>Shop More</Link></h2>
                }

            </div>
            <div className='cart-container'>
                <Cart handleClearCart={handleClearCart} cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Orders;