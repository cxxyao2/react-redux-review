import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++
    },
    decrement(state, action) {
      state.counter--
    },
    addBy(state, action) {
      state.counter = state.counter + action.payload
    }
  }
})

export const counterActions = counterSlice.actions
export default counterSlice
