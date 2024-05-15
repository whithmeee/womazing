import { createSlice } from "@reduxjs/toolkit";

interface IProduct {
    id: number;
    title: string;
    image: string;
    count: number;
    price: number;
}

interface IProductSlice {
    products: IProduct[];
}

const initialState: IProductSlice = {
    products: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.products.push(action.payload);
        },
    },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
