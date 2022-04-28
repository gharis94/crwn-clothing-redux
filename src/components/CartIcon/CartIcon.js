import React from 'react';
import {ReactComponent as ShopIcon} from '../../asset/shopping-bag.svg'
import "./CartIcon.scss";
import { useSelector } from 'react-redux';
import { countSelector } from '../../store/cart/cartSelector'
const CartIcon = () => {
  const cartCount = useSelector(countSelector)
  
  return (
    <div className='cart-icon-container'>
        <ShopIcon className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon