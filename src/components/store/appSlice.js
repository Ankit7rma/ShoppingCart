import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name:"product",
    initialState:{
        product:null,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.product = action.payload;
        }
    }
})
export const {addProduct} = appSlice.actions
export default appSlice.reducer