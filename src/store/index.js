import { configureStore, createSlice } from '@reduxjs/toolkit'
import authSlice from './auth-slice'
import counterSlice from './counter-slice'
import cartSlice from './cart-slice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    counter: counterSlice.reducer
  }
})

export default store
