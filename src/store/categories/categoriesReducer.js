import { CATEGORY_TYPE } from "./categoriesType";
const INIATIAL_STATE={
    categories:[],
    isLoading:false,
    error:null
};

export const categoriesReducer =(state=INIATIAL_STATE,action={})=>{
    const {type,payload}=action;
    console.log(type)
    switch(type){
        case CATEGORY_TYPE.FETCH_CATEGORIES_SUCCESS:
            console.log('success')
            return{
                ...state,
                isLoading: false,
                categories:payload,
                
            };
        case CATEGORY_TYPE.FETCH_CATEGORIES_FAILED:
            return{
                ...state,
                error:payload,
                isLoading:false
            };
        case CATEGORY_TYPE.FETCH_CATEGORIES_START:
            console.log('start')
            return{
                ...state,
                isLoading:false
            }
        default:
            return state;
    }
}