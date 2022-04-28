import React from 'react';
import CheckOutComponent from '../../components/CheckOutComponent/CheckOutComponent';
import './CheckOutPage.scss';
import { useSelector } from 'react-redux';
import {totalSelector,SelectorReducer} from '../../store/cart/cartSelector';
const CheckOutPage = () => {
  const cartItems = useSelector(SelectorReducer);
  const cartTotal = useSelector(totalSelector);
  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-bloc'>Image</div>
            <div className='header-bloc'>Description</div>
            <div className='header-bloc'>Quantity</div>
            <div className='header-bloc'>Amoutn</div>
            <div className='header-bloc'>Remove</div>
        </div>
        <div>{
          cartItems.map(product=>(
            <CheckOutComponent key={product.id} product={product}/>
          ))
        }</div>
        <div className='total'>total PKR {cartTotal}</div>
    </div>
  )
}

export default CheckOutPage