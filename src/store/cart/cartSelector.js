import {createSelector} from 'reselect';


export const cartSelectorReducer = state => state.cart;

export const SelectorReducer= createSelector(
    [cartSelectorReducer],
    (cart)=>cart.cartItems
);

export const toggleSelector = createSelector(
    [cartSelectorReducer],
    (cart)=>cart.isToggle
)

export const countSelector=createSelector(
    [SelectorReducer],
    (cartitems)=>cartitems.reduce((acc,product)=>{
        acc += product.quantity;
        return acc;
    },0)
);

export const totalSelector=createSelector(
    [SelectorReducer],
    (cartitems)=> cartitems.reduce((acc,product)=>{
        acc = product.quantity * product.price;
        return acc;
    },0)
);