import { configureStore } from '@reduxjs/toolkit'
import guitarReducer from './guitar'

const store = configureStore({
    reducer: {
        guitar: guitarReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>