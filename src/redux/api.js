import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const endpoint = "https://dummyjson.com/products"

export const fetchData = createAsyncThunk(
    'api/fetchData',
    async () => {
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            return data;
        }
        catch (error) {
           console.log(error);
        }
    }
)




const initialState = {
    cart: [],
    isCartOpen: false,
    data: [],
    loading: false,
    error: false,
}


const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cart.push(action.payload);
        },
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        removeCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.products;

            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
    }
})


export const {addCart, toggleCart, removeCart} = apiSlice.actions;
export default apiSlice.reducer;
