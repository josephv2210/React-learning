import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    doubleCounter: 0,
    fibonacci: "0"
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        doubleCounterCount: (state, action: PayloadAction<number>) => {
            state.doubleCounter = action.payload;
        },
        setFibonacci: (state, action: PayloadAction<string>) => {
            state.fibonacci = action.payload;
        }
    }
})

export const { increment, decrement, doubleCounterCount, setFibonacci } = counterSlice.actions
export default counterSlice.reducer;