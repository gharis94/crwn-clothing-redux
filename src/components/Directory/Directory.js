import React from 'react';
import './Directory.scss';
import { useNavigate } from 'react-router-dom';

const Directory = ({category}) => {
    const {title,imageUrl} = category;
    const navigate=useNavigate();
    const navigateTo=({title})=>{
        navigate(`shop/${title}`)
    }
  return (
    
    <div className='category-container'>
        <div className = 'background-image'
        style = {
            {
                backgroundImage: `url(${imageUrl})`,
            }
        }
        />
        <div onClick={()=>navigateTo({title})} className = 'category-body-container' >
            <h2 className='title'>{title.toUpperCase()}</h2>
            <p className='shop'>Shop Now</p>
        </div>
    </div>
   
  )
}

export default Directory;