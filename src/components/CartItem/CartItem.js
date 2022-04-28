import React from 'react';
import "./CartItem.scss";
const CartItem = ({product}) => {
    const {imageUrl,price,quantity,name}=product;
  return (
    <div  className = 'cart-item-container' >
        <img src={imageUrl} alt={name}/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span>{quantity} X {price}</span>
        </div>
        
        
    </div>
  )
}

export default CartItem