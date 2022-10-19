import { createSlice } from '@reduxjs/toolkit'
import { counterActions } from './counter-slice'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [{ id: 1, quantity: 12 }],
    totalQuantity: 0,
    showCart: false
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.itemsList.filter(
        (item) => item.id === newItem.id
      )
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.itemsList.push({
          id: newItem.id,

          quantity: 1
        })
      }
    },
    removeFromCart(state, action) {
      const id = action.payload
      const existingItem = state.itemsList.find((item) => item.id === id)
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id)
      } else {
        existingItem.quantity -= 1
      }
    },
    setShowCart(state) {
      state.showCart = true
    }
  }
})

export const sendCartData = (card) => {
  console.log('card arrived', card)
  return async (dispatch) => {
    dispatch(counterActions.addBy(10))
    try {
      const res = await fetch(
        'https://bakend-jennifer.herokuapp.com/api/products'
      )
      const data = await res.json()
      console.log('products returned ', data)
    } catch (err) {
      console.log('error')
    }
    dispatch(counterActions.addBy(20))
  }
}

export const cartActions = cartSlice.actions
export default cartSlice
