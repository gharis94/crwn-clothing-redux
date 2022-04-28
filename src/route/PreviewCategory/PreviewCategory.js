import React from 'react'
//import {CategoriesContext} from '../../context/categoryContext'
import { categoriesSelector } from '../../store/categories/categoriesSelector';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { useSelector } from 'react-redux';
const PreviewCategory = () => {
  
  const categories = useSelector(categoriesSelector)
    

  return (
    <div>
        {   categories?
            Object.keys(categories).map(title=>{
                const products = categories[title]
                
                return <CategoryPreview key={title} title={title} products={products}/>
            })
            : console.log('not')
        }

    </div>
  )
}

export default PreviewCategory