import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.items.push(action.payload)
        },
        removeProduct: (state, action) =>{state.items.indexOf(action.payload); 
        state.items.splice(action.payload, 1)}
    }
})
export const {addToCart,removeProduct} = cartSlice.actions;
export default cartSlice.reducer