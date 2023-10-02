import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./appSlice";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer:{
        product:productReducer,
        cart:cartReducer,
    }
})
export default appStore