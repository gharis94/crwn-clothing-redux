import React, { useEffect, useState } from 'react'
import { categoriesSelector, isLoadingSelector } from '../../store/categories/categoriesSelector';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import "./CategoryPage.scss";
import { useSelector } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';

const CategoryPage = () => {
  const {category} = useParams();
  const categories = useSelector(categoriesSelector) ;
  const isLoading = useSelector(isLoadingSelector)
  const [products,setProducts] = useState(categories[category]);

  useEffect(()=>{
    setProducts(categories[category])
  },[categories,category])

  return (
    <React.Fragment>
      {console.log({isLoading})}
      <h2>{category.toUpperCase()}</h2>
      {
        isLoading ?
          <Spinner/>:
          <div className = 'category-page-container' >
          {
            products && products.map(product=>(
            <ProductCard product={product} key={product.id}/>
            ))
          }
        </div>
      }
      
      
    </React.Fragment>
  )
}

export default CategoryPage;