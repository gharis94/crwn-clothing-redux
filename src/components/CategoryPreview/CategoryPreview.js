import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "./CategoryPreview.scss";
import { useNavigate } from 'react-router-dom';


const CategoryPreview = ({products,title}) => {
  const navigate = useNavigate();
  const navigateTo=({title})=>{
    navigate(`/shop/${title}`)
    console.log(title)
  }
  return (
    <div className = 'category-preview-container' >

        <h2 className='title'>
          <span onClick={()=>navigateTo({title})}>{title.toUpperCase()}</span>
        </h2>

        <div className='preview'>
            {   
               products.filter((_,idx)=>idx < 4).map(product=><ProductCard product={product} key={product.id}/>)
            }
        </div>
    </div>
  )
}

export default CategoryPreview