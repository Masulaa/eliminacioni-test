import { configureStore, createSlice} from "@reduxjs/toolkit";


const produkti = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
);

const productSlice = createSlice({
    name: "products",
    initialState:produkti.products,
    reducers: {
        addProduct: (state, action) => {
            state = [...state, action.payload];
        },
        deleteProduct: (state, action) => {
            state = state.filter(product => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const { id } = action.payload;
            const index = state.findIndex(product => product.id === id);
            if (index !== -1) {
              state[index] = action.payload;
            }
        }
    }
});

export const {addProduct, deleteProduct, updateProduct} = productSlice.actions;
export const productActions = productSlice.actions;

const items = configureStore({
    reducer: {
        products: productSlice.reducer,
    }
});

export default items;