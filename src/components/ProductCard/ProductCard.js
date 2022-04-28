import React from 'react'
import './ProductCard.scss';
import { useDispatch,useSelector } from 'react-redux';
import {addToBucket} from '../../store/cart/cartAction';
import { SelectorReducer } from '../../store/cart/cartSelector';
const ProductCard = ({product}) => {
    const {imageUrl,name,price}=product;
    const cartItems = useSelector(SelectorReducer);
    const dispatch = useDispatch();
    const addTo=(cartItems,product) => dispatch(addToBucket(cartItems,product))
  return (
    <div className='product-card-container'>
          <img className='img' alt={name} src={imageUrl}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
        <button onClick={()=>addTo(cartItems,product)} className='button'>ADD TO Card</button>
    </div>
  )
}

export default ProductCard