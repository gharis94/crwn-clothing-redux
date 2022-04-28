import { combineReducers } from "redux";
import { userReducer } from './user/userReducer';
import { categoriesReducer } from "./categories/categoriesReducer";
import { cartReducer } from "./cart/cartReducer";

export const rootReducer =combineReducers({
    user:userReducer,
    category:categoriesReducer,
    cart:cartReducer
});