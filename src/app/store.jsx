// import configureStore
import { configureStore } from "@reduxjs/toolkit";

// import reducers
import counterReducer from "../features/counterSlice";
import abcReducer from "../features/abcSlice";

export const store = configureStore({
    reducer: {
        // we will access our states with these names
        counter: counterReducer,
        abc: abcReducer
    }
});


