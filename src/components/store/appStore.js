import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./appSlice";

const appStore = configureStore({
    reducer:{
        product:productReducer,
    }
})
export default appStore