import { CART_TYPE } from "./cartTypes";

const INIATIAL_STATE={
    isToggle:true,
    cartItems:[],
};



export const cartReducer = (state=INIATIAL_STATE,action={}) =>{
    const {type,payload} = action;
    switch(type){
        case CART_TYPE.CART_ITEM:
            return {
                ...state,
                cartItems:payload
            };
        case CART_TYPE.TOGGLE:
            return{
                ...state,
                isToggle:payload
            };
        default:
            return state
    }
};