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
    data: [],
    loading: false,
    error: false,
}


const apiSlice = createSlice({
    name: 'api',
    initialState,
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


export const {addData} = apiSlice.actions;
export default apiSlice.reducer;
