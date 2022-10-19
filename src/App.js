import './App.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { counterActions as actions } from './store/counter-slice'
import Layout from './components/Layout'
import Auth from './components/Auth'
import { sendCartData } from './store/cart-slice'

function App() {
  const counter = useSelector((state) => state.counter.counter)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const cart = useSelector((state) => state.cart.itemsList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(sendCartData(cart))
  }, [cart, dispatch])

  const increment = () => {
    dispatch(actions.increment())
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }
  const addBy = () => {
    dispatch(actions.addBy(10))
  }
  return (
    <>
      {isLoggedIn && <Layout />}
      {!isLoggedIn && <Auth />}
      <div>
        <button onClick={increment}> increment</button>
        <button onClick={decrement}> decrement</button>
        <button onClick={addBy}> add by 10 </button>
        <div>counter: {counter}</div>
      </div>
    </>
  )
}

export default App
