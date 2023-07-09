import { combineReducers, configureStore } from '@reduxjs/toolkit';
import apiSlice from './api';


const slice = combineReducers({
    api: apiSlice,

})

const store = configureStore ({
    reducer: slice,
})

export default store;