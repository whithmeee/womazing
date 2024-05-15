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
            const { id } = action.payload;

            const existingProduct = state.products.find((p) => p.id === id);

            if (existingProduct) {
                existingProduct.count++;
            } else {
                state.products.push(action.payload);
            }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(
                (p) => p.id === action.payload
            );
        },
        productDecrement: (state, action) => {
            const { id } = action.payload;
            const decrementProduct = state.products.find((p) => p.id === id);

            if (decrementProduct) {
                decrementProduct.count--;
            }

            if (decrementProduct?.count === 0) {
                decrementProduct.count = 1;
            }
        },
        clearProduct: (state) => {
            state.products = [];
        },
    },
});

export const { setProduct, removeProduct, productDecrement } =
    productSlice.actions;
export default productSlice.reducer;
