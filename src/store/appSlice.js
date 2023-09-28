const { createSlice } = require("@reduxjs/toolkit");

const appSlice = createSlice({
    name:"appSlice",
    initialState:{
        setProducts:null,
        selectedProducts:null,
    },
    reducers:{
        addSetProducts:(state,action)=>{
            state.setProducts = action.payload
        },
        addSelectedProducts:(state,action)=>{
            state.selectedProducts =action.payload;
        }
    }
})
export const {addSetProducts,addSelectedProducts} = appSlice.actions;
export default appSlice.reducer