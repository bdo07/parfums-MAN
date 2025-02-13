import { configureStore } from '@reduxjs/toolkit';
import {productsReducer } from './CardParfums/DataSlice.jsx';
import formReducer from './MENU/formSlice.jsx';  
import cartReducer from "./MENU/cartSlice.jsx"; 


const store = configureStore({
   reducer: {
    tousproduct: productsReducer,  
    form: formReducer, 
    cart: cartReducer,
   },
});

export default store;
