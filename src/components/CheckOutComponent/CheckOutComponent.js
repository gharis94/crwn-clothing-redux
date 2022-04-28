import React from 'react';
import "./CheckOutComponent.scss";
import { useDispatch,useSelector } from 'react-redux';
import {decrementCart,addToBucket,delItem} from '../../store/cart/cartAction';
import {SelectorReducer} from '../../store/cart/cartSelector'; 

const CheckOutComponent = ({product}) => {
    const {imageUrl,name,quantity}=product;
    const cartItems = useSelector(SelectorReducer);
    const dispatch = useDispatch();
    const decrement =(cartItems,product)=>dispatch(decrementCart(cartItems,product))
    const addTo =(cartItems,product)=> dispatch(addToBucket(cartItems,product))
    const del =(cartItems,product)=>dispatch(delItem(cartItems,product))
  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={name}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div onClick={()=>decrement(cartItems,product)} className = 'arrow'>&#10094;</div>
            {quantity}
            <div onClick={()=>addTo(cartItems,product)} className = 'arrow'>&#10095;</div>
        </span>
        <div onClick={()=>del(cartItems,product)} className = 'remove-button'>&#10005;</div>
    </div>
    
  )
}

export default CheckOutComponent