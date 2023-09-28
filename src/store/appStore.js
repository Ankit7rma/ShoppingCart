import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const appStore = configureStore(
    {
        reducer:{
            slice:appSlice,
        }
    }
)
export default appStore;