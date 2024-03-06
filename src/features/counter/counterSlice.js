import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({ 
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: { 
        increments: (state) => { 
            state.value += 1
        }, 
        decrements: (state) => { 
            state.value -= 1
        },
        incrementByAmount: (state, action) => { 
            state.value += action.payload
        }
    }
})

export const { increments, decrements, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer