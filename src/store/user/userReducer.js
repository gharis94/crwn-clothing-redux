import { USER_ACTION_TYPES } from "./userType";

const initialState={
    currentUser:null
};

export const userReducer =(state = initialState,action={})=>{
    const {type,payload}=action;
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:payload
            };
        default:
            return state;
    }
}