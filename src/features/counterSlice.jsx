// import create slice
import { createSlice } from '@reduxjs/toolkit'


// create initial state
const initialState = {
    countValue: 0
}


export const counterSlice = createSlice({

    name: 'counter',
    initialState,

    // define reducers: these are functions (actions) which help to update our states
    reducers: {
        increment: (state) => {
            state.countValue += 1;
        },

        decrement: (state) => {
            state.countValue -= 1
        },

        incrementByValue: (state, action) => {
            state.countValue += action.payload;
        }
    },
})



// console.log(counterSlice.reducer)


export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;