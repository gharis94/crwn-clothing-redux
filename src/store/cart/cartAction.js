import { createAction } from "../../utils/reducer/reducer"
import { CART_TYPE } from "./cartTypes";


const addItem =(cartitems,product)=>{
    const itemExist = cartitems.find(item=> item.id === product.id);

    if(itemExist){
        return cartitems.map(item => item.id === product.id ? {...item,quantity:item.quantity+1} : item)
    };

    return [ ...cartitems,{...product,quantity:1}];
};

const decItem = (cartitems,product) =>{
    if (product.quantity > 1) {
        return cartitems.map(item => item.id === product.id ? {
            ...item,
            quantity: item.quantity - 1
        } : item)
    };

    return cartitems.filter(item => item.id !== product.id);
};

const removeItem = (cartitems,product) =>{
    return cartitems.filter(item => item.id !== product.id);
};





export const isCartOpen = (boolean) =>{
    console.log(boolean)
    return createAction(CART_TYPE.TOGGLE,boolean)
};




export const addToBucket=(cartitems,product)=>{
    const newCart = addItem(cartitems,product);
    return createAction(CART_TYPE.CART_ITEM,newCart);
};

export const decrementCart=(cartitems,product)=>{
    const newCart = decItem(cartitems,product);
    return createAction(CART_TYPE.CART_ITEM,newCart);
};

export const delItem = (cartitems,product) =>{
    const newCart = removeItem(cartitems,product);
    return createAction(CART_TYPE.CART_ITEM,newCart);
};