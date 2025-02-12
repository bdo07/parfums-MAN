import { configureStore } from '@reduxjs/toolkit';
import { productReducer, productsReducer } from './CardParfums/DataSlice.jsx';
import formReducer from './MENU/formSlice.jsx';  // إضافة الـ formReducer

import cartReducer from "./MENU/cartSlice.jsx"; // استيراد ملف cartSlice


const store = configureStore({
   reducer: {
    products: productReducer,
    tousproduct: productsReducer,  // إضافة جميع المنتجات
    form: formReducer, // إضافة نموذج تسجيل الدخول
    cart: cartReducer,
   },
});

export default store;
