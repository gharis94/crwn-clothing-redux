import { createAction } from "../../utils/reducer/reducer"
import { CATEGORY_TYPE } from "./categoriesType";
import {getCollectionAndDocments} from "../../utils/firebase/firebase";



export const fetchCategoriesStart = () =>{
   console.log('start')
   return createAction(CATEGORY_TYPE.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (categoriesArray)=>{
   console.log('s')
   return createAction(CATEGORY_TYPE.FETCH_CATEGORIES_SUCCESS,categoriesArray); 
};

export const fetchCategoriesFailed = (error) =>{
   return createAction(CATEGORY_TYPE.FETCH_CATEGORIES_FAILED,error);
};

export const fetchCategoriesAsync =()=>{
   return async(dispatch)=>{
   dispatch(fetchCategoriesStart());
  
   try{
      const categoriesArray = await getCollectionAndDocments('categories');
      dispatch(fetchCategoriesSuccess(categoriesArray))
     
   }catch(error){
      dispatch(fetchCategoriesFailed(error))
   }
}
}