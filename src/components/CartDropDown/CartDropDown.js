import React from 'react';
import CartItem from '../CartItem/CartItem';
import './CartDropDown.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {SelectorReducer,totalSelector} from '../../store/cart/cartSelector'

const CartDropDown = () => {
  const navigate=useNavigate();
  const navigateTo=()=>{
    navigate('/checkout')
  }
  const cartItems = useSelector(SelectorReducer);
  const cartTotal =useSelector(totalSelector);
  console.log('a',cartItems);
  return (
    <div className='cart-dropdown-container'>
      <div className='empty-message'>

      </div>
      <div className='items'>
        {
          cartItems.map(item=>(
            <CartItem product={item} key={item.id}/>
          ))
        }
      </div>
      <div>Total PKR{cartTotal}</div>
      <button onClick={()=>navigateTo()} className='button'>Check Out</button>
    </div>
  )
}

export default CartDropDown