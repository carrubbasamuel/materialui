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
    currentItem: null,
}


const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        addCart: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item) {
              item.amount += 1;
            } else {
              state.cart.push({ ...action.payload, amount: 1 });
            }
          },
          
          removeCart: (state, action) => {
            const find = state.cart.find((item) => item.id === action.payload.id);
            if (find) {
              find.amount -= 1;
              if (find.amount === 0) {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
              }
            }
          },
          setCurrentItem: (state, action) => {
            state.currentItem = action.payload;
          },
          setSelectionImg: (state, action) => {
            const filtered = state.currentItem.images.filter((item) => item !== action.payload);
            filtered.push(action.payload);
            state.currentItem = {
              ...state.currentItem,
              images: filtered,
            }
          },
          
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


export const {addCart, toggleCart, removeCart, setCurrentItem,  setSelectionImg } = apiSlice.actions;
export default apiSlice.reducer;
