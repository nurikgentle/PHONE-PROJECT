import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";



const initialState = {
    Items: data,
    amount: 1,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            return {amount: 0}
        },
    },
});
// console.log(cartSlice);

export const {clearCart} = cartSlice.actions;

export default cartSlice.reducer;