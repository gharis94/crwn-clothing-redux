import React from 'react';
import {Routes,Route} from 'react-router-dom';
import CategoryPage from '../CategoryPage/CategoryPage';
import PreviewCategory from '../PreviewCategory/PreviewCategory';
import "./ShopPage.scss";

const ShopPage = () => {
    
        
    return (
        <div className = 'categories-container' >
            <Routes>
                <Route index element={<PreviewCategory/>}/>
                <Route path=":category" element={<CategoryPage />}/>
            </Routes>
            
        </div>
  )
}

export default ShopPage