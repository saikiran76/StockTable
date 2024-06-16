import { createSlice } from "@reduxjs/toolkit";

const initialState={
    symbol: "SPY",
}

const stockSlice = createSlice({
    name:"stock",
    initialState,
    reducers:{
        changeSymbol:(state, action)=>{
            state.symbol = action.payload;

        }
    }
})

export const { changeSymbol } = stockSlice.actions;
export default stockSlice.reducer;