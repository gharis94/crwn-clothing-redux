import { compose,createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const middleware=[
    process.env.NODE_ENV !== 'production' && logger,
    thunk
].filter(Boolean);



const persistConfig = {
    key:'root',
    storage,
    blacklist:['user']
};
const persistedReducer = persistReducer(persistConfig,rootReducer);

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middleware));

export const store = createStore(persistedReducer,undefined,composeEnhancers);

export const persistor = persistStore(store);